const express = require("express");
const router = express.Router();

const auth = require("../middleware/authenticateJWT");

const questionController = require("../controllers/question");

// fetch a single question based on difficulty level
router.post("/", auth, questionController.getSingleQuestion);

module.exports = router;
