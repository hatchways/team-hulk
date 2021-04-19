let express = require('express');
let router = express.Router();

// Connect to Interview controller
let interviewController = require('../controllers/interview');

/* POST Route to perform Creation - CREATE INTERVIEW operation. */
router.post('/', interviewController.createInterview);

/* GET Route to fetch the list of interviews - GET LIST operation. */
router.get('/', interviewController.getInterviewList);

/* GET Route to fetch a single interview - GET INTERVIEW operation. */
router.get('/:id', interviewController.getSingleInterview);

/* PUT Route to edit interviews - EDIT INTERVIEW operation. */
router.put('/:id', interviewController.updateInterview);

/* DELETE Route to delete a interviews - DELETE INTERVIEW operation. */
router.delete('/:id', interviewController.deleteInterview);

module.exports = router;