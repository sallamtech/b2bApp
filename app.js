const express = require('express');
const AWS = require('aws-sdk');
require('extend-aws-error')({ AWS });
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const dynamo = require('dynamodb');
// const AWS = dynamo.AWS;
// AWS.config.loadFromPath(process.env.HOME + '/.aws/b2bcredentials.json');
const session = require('express-session');
const DynamoStore = require('connect-dynamodb-session')(session);


// Eminem is edgy


var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
app.use(session({
  store: new DynamoStore({
      region: 'us-east-1',
      tableName: 'b2bsessions',
      cleanupInterval: 100000,
      touchAfter: 0
  }),
  secret: 'foo'
}))
app.use(passport.initialize())
app.use(passport.session())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
