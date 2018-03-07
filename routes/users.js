var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/*router.get('/signup', function(req, res, next) {
  res.render('signup', {title: 'signup'});
  
});*/

// Check if all required fields are entered
router.post('/signup', function(req, res, next) {
  res.render('signup2', {title: 'signup'});
});


// Check that user doesn't already exists
router.post('/signup', function(req, res, next) {
  User.scan()
  .where('email').equals(req.body.email)
  .exec(function(err, user) {
    console.log(user);
    if (user.Count > 0) {
      res.end('user account already exists');
    } else {
      next();
    }
  });
})


router.post('/signup', function(req, res, next) {
  User.create({
    email: req.email,
    // Todo: bcrypt the password
    password: req.body.password,
    pasword_confirm: req.body.password_confirm,
    firstName: req.body.firsName,
    lastName: req.body.lastName
  }, function(err, user) {
    if (err) {
      console.log('ERROR: ');
      console.log(err);
      res.end("ERRROR");
    } else {
      // console.log('new user created');
      // console.log(user.get('email'));
      res.end("success!");
    } 
  });
})

module.exports = router;
