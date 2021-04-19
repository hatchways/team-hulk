const createError = require("http-errors");
const express = require("express");
const { join } = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
require('dotenv').config({ path: './.env'})

// Router connections
const indexRouter = require("./routes/index");
const pingRouter = require("./routes/ping");
const signupRouter = require("./routes/signup");
const interviewRouter = require("./routes/interview");

const { json, urlencoded } = express;

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectionString = 'mongodb+srv://' + process.env.REACT_APP_MONGO_ID + ':' + process.env.REACT_APP_MONGO_PW + '@cluster0.q0hmz.mongodb.net/project?retryWrites=true&w=majority'

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

let mongoDB = mongoose.connection;

mongoDB.on("error", console.error.bind(console, "Connection Error:"));

mongoDB.once("open", () => {
  console.log("Connected to MongoDB...");
});

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

// Routing
app.use("/", indexRouter);
app.use("/ping", pingRouter);
app.use("/signup", signupRouter);
app.use("/api/interview", interviewRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = app;
