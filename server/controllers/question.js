const Question = require("../models/question");
const User = require("../models/user");
var ObjectId = require("mongoose").Types.ObjectId;

module.exports.getSingleQuestion = async (req, res, next) => {
  const { difficulty } = req.body;
  const { user } = req.user;
  const userId = user._id;
  console.log("user id:", userId);

  try {
    const user = await User.findById(userId);
    const question = await Question.findOne({
      difficulty,
      _id: { $nin: user.questionIds },
    });

    if (question) {
      await User.findOneAndUpdate(
        { _id: userId },
        { $push: { questionIds: question._id } }
      );
      res.status(200).json(question);
    } else {
      let allQuestionIdsWithSameDifficultyLevel = await Question.find(
        {
          difficulty,
        },
        { title: 0, body: 0, solution: 0, difficulty: 0, _id: 1 }
      );
      allQuestionIdsWithSameDifficultyLevel = allQuestionIdsWithSameDifficultyLevel.map(
        (idObj) => idObj._id
      );

      await User.findOneAndUpdate(
        { _id: userId },
        {
          $pull: {
            questionIds: { $in: allQuestionIdsWithSameDifficultyLevel },
          },
        }
      );

      const newQuestion = await Question.findOne({
        difficulty,
      });
      // console.log("new quest:", newQuestion);
      await User.findOneAndUpdate(
        { _id: userId },
        { $push: { questionIds: newQuestion._id } }
      );
      res.status(200).json(newQuestion);
    }
  } catch (error) {
    console.log(error);
  }
};
