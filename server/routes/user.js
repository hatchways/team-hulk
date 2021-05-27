const express = require("express");
const router = express.Router();

const auth = require("../middleware/authenticateJWT");

// Connect to User controller
const userController = require("../controllers/user");

/* GET Route to fetch a single user - GET USER operation. */
router.get("/:id", userController.getSingleUser);

/* PUT Route to edit a user - EDIT USER operation. */
router.put("/:id", userController.updateUser);

module.exports = router;
