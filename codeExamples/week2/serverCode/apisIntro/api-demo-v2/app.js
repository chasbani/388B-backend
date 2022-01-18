var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var booksRouter = require('./routes/api/books');

var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/books', booksRouter);

const db = mongoose.connect('mongodb+srv://dbadmin:dbpassword@cmsc388b.a9mha.mongodb.net/388-arasevic?retryWrites=true&w=majority', 
    { useNewUrlParser: true,  useUnifiedTopology: true});
module.exports = app;
