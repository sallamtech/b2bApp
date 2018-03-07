var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');

var User = require('../models/User');


router.get('/login', function(req, res) {
    
});


router.post('/register', function(req, res) {
    User.create(req.body, function (err, user) {
        if (err) { return res.json({ message: err }) }
        res.json({user})
    });
});

