const Question = require("../models/question");
const User = require("../models/user");
var ObjectId = require("mongoose").Types.ObjectId;

module.exports.getSingleQuestionByDifficulty = async (req, res, next) => {
  const { difficulty } = req.body;
  const userId = req.user.user;

  try {
    const user = await User.findById(userId);
    const question = await Question.findOne({
      difficulty,
      _id: { $nin: user.questionIds },
    });

    if (question) {
      user.questionIds.push(question._id);
      await user.save();
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

module.exports.getSingleQuestionById = async (req, res, next) => {
  const questionId = req.params.id;
  console.log("id:", questionId);

  try {
    const question = await Question.findOne({ _id: questionId });
    res.status(200).json(question);
  } catch (error) {
    console.log(error);
  }
};
