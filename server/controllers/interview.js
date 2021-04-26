// connect to the Interview Model
const Interview = require("../models/interview");
const User = require("../models/user");

module.exports.createInterview = async (req, res, next) => {
  const { guest, date, theme, questions, difficulty } = req.body;
  const user = await User.findOne({ email: req.user.user }, "id");

  const newInterview = new Interview({
    owner: user,
    date: date,
    theme: theme,
    questions: questions,
    difficulty: difficulty,
  });

  newInterview.save().then((err) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json({
        success: true,
        msg: "Successfully Created New Interview",
      });
    }
  });
};

module.exports.getInterviewList = async (req, res, next) => {
  const user = await User.findOne({ email: req.user.user }, "id");

  Interview.find(
    { $or: [{ owner: user }, { guest: user }] },
    (err, InterviewList) => {
      if (err) {
        console.error(err);
        res.send(err);
      } else {
        res.json(InterviewList);
      }
    }
  );
};

module.exports.getSingleInterview = (req, res, next) => {
  const id = req.params.id;

  Interview.findById(id, (err, singleInterview) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json(singleInterview);
    }
  });
};

module.exports.updateInterview = (req, res, next) => {
  const id = req.params.id;
  const { owner, guest, date, theme, questions, difficulty } = req.body;
  const updatedInterview = Interview({
    _id: id,
    owner: owner,
    guest: guest,
    date: date,
    theme: theme,
    questions: questions,
    difficulty: difficulty,
  });

  Interview.updateOne({ _id: id }, updatedInterview, (err) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json({ success: true, msg: "Successfully Updated Interview" });
    }
  });
};

module.exports.addInterviewGuest = async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findOne({ email: req.user.user }, "id");

  Interview.updateOne({ _id: id }, { $set: { guest: user } }, (err) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json({ success: true, msg: "Successfully Updated Interview" });
    }
  });
};

module.exports.deleteInterview = (req, res, next) => {
  const id = req.params.id;

  Interview.deleteOne({ _id: id }, (err, id) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json({
        success: true,
        id: id,
        msg: "Successfully Deleted Interview",
      });
    }
  });
};