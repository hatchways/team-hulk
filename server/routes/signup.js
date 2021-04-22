let express = require('express');
let router = express.Router();

const User = require('../models/user')

router.route('/')
  .get((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.send('Test response');
  })

  .post((req, res) => {
    const newUser = new User(req.body);
    newUser.save()
      .then(() => {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html");
        res.redirect('/')
      }, (err) => next(err))
      .catch(err => {
        res.status(400).send("Unable to save to database");
      });
  });

module.exports = router;