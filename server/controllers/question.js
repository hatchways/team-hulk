// connect to the Interview Model
const Question = require("../models/question");

module.exports.getSingleQuestion = async (req, res, next) => {
  const { difficulty } = req.body;
  const { user } = req.user;
  const id = user._id;
  console.log("user id:", id);

  try {
    const question = await Question.findOne({
      difficulty,
      userIds: { $nin: [id] },
    });
    await Question.findOneAndUpdate(
      { _id: question._id },
      { $push: { userIds: user._id } }
    );
    res.status(200).json(question);
  } catch (error) {
    console.log(error);
  }

  //   const newInterview = new Interview({
  //     title: user,
  //     body: date,
  //     solution: theme,
  //     difficulty,
  //   });

  //   newQuestion.save().then((err) => {
  //     if (err) {
  //       console.log(err);
  //       res.send(err);
  //     } else {
  //       res.json(newInterview);
  //     }
  //   });
};
