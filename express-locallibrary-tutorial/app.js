var process = require('process');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var catalogRouter = require('./routes/catalog');
var coolRouter = require('./routes/users/cool');
var wiki = require('./routes/wiki');
var app = express();

// connect to MongoDB
var mongoDB = "";
if (!mongoDB) {
    console.error('Environment variable MONGODB_URI must be set in order to connect to the MongoDB database.');
    process.exit(-1);
}

mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true})
    .then(() => {
        console.log('Connection to MongoDB established.');
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    },
    err => console.error('Connection to MongoDB failed: ', err));

// view engine setup
// eslint-disable-next-line no-undef
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter); // Liefert Antwort zurück
app.use('/users', usersRouter); // Liefert Antwort zurück
app.use('/catalog', catalogRouter);
app.use('/users/cool', coolRouter);
app.use('./routes/wiki', wiki);
app.use('/wiki', wiki);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    //res.render('error'); // normale render version
    //res.json({"error" : err, "http-status": err.status}); // als json-version
    res.json({"error" : {"message" : err.message, "http-status": err.status}});
});

module.exports = app;

// Beispiel Route-Abfragen
// app.get('/book/create', function())
// app.get('/book/:bookid', function())