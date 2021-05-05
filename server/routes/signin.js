const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const initPassport = require("../passport-config");
initPassport(passport);

const authenticateJWT = require("../middleware/authenticateJWT");

router.get("/", authenticateJWT, async (req, res, next) => {
  const user = await User.findOne({ id: req.body.id });
  if (user) {
    res.send(user);
  }
});

router.post("/", async (req, res, next) => {
  const userId = await User.findOne({ email: req.body.email }, "id");

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.log(err);
      return next(err);
    }

    if (!user) {
      return res.status(400).send("User not found!");
    }

    req.logIn(user, function (err) {
      if (err) {
        console.log(err);
        return next(err);
      }

      const token = jwt.sign({ user: userId }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      res.cookie("token", token, {
        httpOnly: true,
      });

      return res.send(user);
    });
  })(req, res, next);
});

module.exports = router;
