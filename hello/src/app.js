require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var helloRouter = require('./routes/hello');

var app = express();
var cors = require('cors');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// set default language messages
global.DM = require('./locale/' + process.env.DEFAULT_LANGUAGE + '/display_messages').APP_MESSAGES;

//Get hello
app.get('/', helloRouter.sayHello);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // 404 not found response
  return res.status(404).json({
    message: DM.NOT_FOUND
  });
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  //handle server errors
  return res.status(500).json({
    message: DM.SOMETHING_WENT_WRONG
  });
});

module.exports = app;