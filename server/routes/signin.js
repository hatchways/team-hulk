const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const initPassport = require("../passport-config");
initPassport(passport);

router.post("/", async (req, res, next) => {
  // const userId = await User.findOne({ email: req.body.email }, "id");
  const userDromDb = await User.findOne({ email: req.body.email });

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

      const token = jwt.sign({ user: userDromDb._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      res.cookie("token", token, {
        httpOnly: true,
      });

      // return res.send(req.body.email);
      const userData = {
        email: userDromDb.email,
        firstName: userDromDb.firstName,
        lastName: userDromDb.lastName,
        _id: userDromDb._id,
      };
      return res.status(200).json(userData);
    });
  })(req, res, next);
});

module.exports = router;
