const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  questionIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "question" }],
  profileInfo: {
    img: { data: Buffer, contentType: String },
    proXp: Number,
    intXp: Number,
    FELanguages: String,
    BELanguages: String,
    bio: String,
  },
});

userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const User = mongoose.model("Users", userSchema, "users");

module.exports = User;
