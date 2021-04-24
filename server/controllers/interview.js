// connect to the Interview Model
let Interview = require('../models/interview');
let User = require('../models/user');

module.exports.createInterview = async (req, res, next) => {
	const { guest, date, theme, questions, difficult } = req.body;
	const user = await User.findOne({ email: req.user.user }, 'id');

	let newInterview = Interview({
		owner: user,
		guest: guest,
		date: date,
		theme: theme,
		questions: questions,
		difficult: difficult,
	});

	Interview.create(newInterview, (err) => {
		if (err) {
			console.log(err);
			res.end(err);
		} else {
			res.json({ success: true, msg: 'Successfully Created New Interview' });
		}
	});
};

module.exports.getInterviewList = async (req, res, next) => {
	const user = await User.findOne({ email: req.user.user }, 'id');

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
	let id = req.params.id;
	const { owner, guest, date, theme, questions, difficult } = req.body;
	let updatedInterview = Interview({
		_id: id,
		owner: owner,
		guest: guest,
		date: date,
		theme: theme,
		questions: questions,
		difficult: difficult,
	});

	Interview.updateOne({ _id: id }, updatedInterview, (err) => {
		if (err) {
			console.log(err);
			res.send(err);
		} else {
			res.json({ success: true, msg: 'Successfully Updated Interview' });
		}
	});
};

module.exports.addInterviewGuest = async (req, res, next) => {
	let id = req.params.id;
	const user = await User.findOne({ email: req.user.user }, 'id');

	Interview.updateOne({ _id: id }, { $set: { guest: user } }, (err) => {
		if (err) {
			console.log(err);
			res.send(err);
		} else {
			res.json({ success: true, msg: 'Successfully Updated Interview' });
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
				msg: 'Successfully Deleted Interview',
			});
		}
	});
};
