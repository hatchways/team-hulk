const createError = require("http-errors");
const express = require("express");
const { join } = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });

// Router connections
const signupRouter = require("./routes/signup");
const interviewRouter = require("./routes/interview");
const signinRouter = require("./routes/signin");
const passport = require("passport");

const { json, urlencoded } = express;

const app = express();

app.use(urlencoded({ extended: true }));

app.use(passport.initialize());

app.use(express.json());

mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let mongoDB = mongoose.connection;

mongoDB.on("error", console.error.bind(console, "Connection Error:"));

mongoDB.once("open", () => {
  console.log("Connected to MongoDB...");
});

app.use(logger("dev"));
app.use(json());
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

// Routing
app.use("/api/interview", interviewRouter);
app.use("/api/signup", signupRouter);
app.use("/api/signin", signinRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = app;
