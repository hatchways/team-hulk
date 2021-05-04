const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const authenticateJWT = require("../middleware/authenticateJWT");

router.get("/", authenticateJWT, (req, res, next) => {
  console.log(req.user);
  res.send(req.user);
});

module.exports = router;
