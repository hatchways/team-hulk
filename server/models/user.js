var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

var User = mongoose.model("User", userSchema);

module.exports = User