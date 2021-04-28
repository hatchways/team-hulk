// connect to the Interview Model
let Interview = require ('../models/interview');

module.exports.createInterview = (req, res, next) => {
    const { date, theme, questions, difficulty } = req.body;
    const { user } = req.user;
    console.log('req.body:', req.body)
    console.log('req.user:', user)

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
        res.json(newInterview)
      }
    });
  };

module.exports.getInterviewList = (req, res, next) => {
    Interview.find((err, InterviewList) => {
        if (err){
            console.error(err);
            res.send(err);
        } else {
            res.json(InterviewList);
        }
    });
}

module.exports.getSingleInterview = (req, res, next) => {
    const id = req.params.id;

    Interview.findById(id, (err, singleInterview) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.json(singleInterview);
        }
    })
}

module.exports.updateInterview = (req, res, next) => {
    let id = req.params.id;
    const {participants, date, theme, questions, difficult} = req.body;
    let updatedInterview = Interview({
        "_id": id,
        "participants": participants,
        "date": date,
        "theme": theme,
        "questions": questions,
        "difficult": difficult
    });

    Interview.updateOne({_id: id}, updatedInterview, (err) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.json({success: true, msg: 'Successfully Updated Interview'})
        }
    })
}

module.exports.deleteInterview = (req, res, next) => {
    const id = req.params.id;

    Interview.deleteOne({_id: id}, (err, id) => {
        if (err){
            console.log(err);
            res.send(err);
        } else {
            res.json({success: true, id: id, msg: 'Successfully Deleted Interview'});
        }
    })
}