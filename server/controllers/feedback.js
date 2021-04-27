// connect to the Feedback Model
const Feedback = require("../models/feedback");
const User = require("../models/user");

module.exports.createFeedback = (req, res, next) => {
  const newFeedback = new Feedback({
    interview: req.body.interview,
    candidate: req.body.candidate,
    overallScore: req.body.overallScore,
    communication: req.body.communication,
    codeEfficiency: req.body.codeEfficiency,
    codeOrganization: req.body.codeOrganization,
    speed: req.body.speed,
    debugging: req.body.debugging,
    problemSolving: req.body.problemSolving,
    didWell: req.body.didWell,
    canImprove: req.body.canImprove,
    recommendedResources: req.body.recommendedResources,
    additionalFeedback: req.body.additionalFeedback,
    experienceRating: req.body.experienceRating,
    experienceDescription: req.body.experienceDescription,
  });

  newFeedback.save((err) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json({
        success: true,
        msg: "Successfully Created New Feedback",
      });
    }
  });
};

module.exports.getFeedbackList = async (req, res, next) => {
  const user = await User.findOne({ email: req.user.user }, "id");

  Feedback.find({ interviewee: user }, (err, feedbackList) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json(feedbackList);
    }
  });
};

module.exports.getSingleFeedback = (req, res, next) => {
  const id = req.params.id;

  Feedback.findById(id, (err, singleFeedback) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json(singleFeedback);
    }
  });
};
