const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const passport = require('passport')
const jwt = require("jsonwebtoken")

const initPassport = require('../passport-config')
initPassport(passport)

router.post('/', (req, res, next) => {
  passport.authenticate('local',
  (err, user, info) => {
    if (err) {
      console.log(err)
      return next(err);
    }

    if (!user) {
      return res.status(400).send("User not found!");
    }

    req.logIn(user, function(err) {
      if (err) {
        console.log(err)
        return next(err);
      }

      const token = jwt.sign(
        {user: req.body.email},
        process.env.JWT_SECRET,
        {expiresIn: "1d"}
        );

      res.cookie("Token", token, {
        httpOnly: true,
      })
      
      return res.send("Login successful", "User: " + req.body.email)

    });

  })(req, res, next);
});

module.exports = router;
