var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var catalogRouter = require('./routes/catalog');
var coolRouter = require('./routes/users/cool');
var wiki = require('./routes/wiki');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // Middleware-Funktion von Express

app.use('/', indexRouter); // Liefert Antwort zurück
app.use('/users', usersRouter); // Liefert Antwort zurück
app.use('/catalog', catalogRouter);
app.use('/users/cool', coolRouter);
app.use('./routes/wiki', wiki);

// catch 404 and forward to error handler
app.use(function(req, res, next) { // Middleware-Funktion, von Express zur Verfügung gestellt
  next(createError(404)); // Übergibt Objekte zur nächsten Middleware-Funktion
});

// error handler
app.use(function(err, req, res, next) { 
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500); // Falls kein Error gesetzt, setze error 500
  res.render('error'); // Error-Template(pug) wird geladen und gerendert
});

module.exports = app;

// Beispiel Route-Abfragen
// app.get('/book/create', function())
// app.get('/book/:bookid', function())