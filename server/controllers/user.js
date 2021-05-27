const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const User = require("../models/user");

module.exports.getSingleUser = (req, res, next) => {
  const id = req.params.id;

  User.findById(id, (err, singleUser) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json(singleUser);
    }
  });
};

module.exports.updateUser = (req, res, next) => {
  const id = req.params.id;
  const { firstName, lastName, email, profileInfo } = req.body;

  console.log(req.body);

  const updatedUser = User({
    _id: id,
    profileInfo: profileInfo,
  });

  User.updateOne({ _id: id }, updatedUser, (err) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json({ success: true, msg: "Successfully Updated User" });
    }
  });
};
