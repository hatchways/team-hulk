var mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

mongoose.Promise = global.Promise;

var userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

userSchema.plugin(passportLocalMongoose, {usernameField: "email"});

var User = mongoose.model("Users", userSchema, "users");

module.exports = User