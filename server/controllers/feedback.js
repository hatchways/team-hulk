// connect to the Feedback Model
const Feedback = require("../models/feedback");
const Interview = require("../models/interview");

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
  const { user } = req.user;

  const feedbackList = await Feedback.find({ candidate: user._id });

  const feedbackListShort = await Promise.all(
    feedbackList.map(async (feedback) => {
      try {
        const interview = await Interview.findById(feedback.interview);
        const {
          codeEfficiency,
          codeOrganization,
          speed,
          debugging,
          problemSolving,
        } = feedback;
        const code = Math.round(
          (codeEfficiency +
            codeOrganization +
            speed +
            debugging +
            problemSolving) /
            5
        );
        return {
          date: interview.date,
          communication: feedback.communication,
          code,
          questions: interview.questions,
          id: feedback.id,
        };
      } catch (err) {
        throw err;
      }
    })
  );

  res.json(feedbackListShort);
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
