var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");        ///////////
var logger = require('morgan');
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/planets-ejs')

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));    //////////
app.use(bodyParser.json())       ////////////


// view engine setup
app.engine('ejs',require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var planets = require('./routes/planets');    //  ?

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/planets', planets);                 //  ?

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
