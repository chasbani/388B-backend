var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var authorsRouter = require('./routes/api/v1/authors');

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
app.use('/api/v1/authors', authorsRouter);


//connect mongoose
// store credentials as enviroment variables
//const dbuser = process.env.MONGODB 
//const dbpass = process.env.MONGODBPASS
const dbuser = 'dbadmin'
const dbpass = 'dbpassword'
// TODO - Discuss connection uri
// Need to set mongoDB variable to the uri for your own database
// explain what lectureExamples is in the url and show on Atlas
const mongoDB = `mongodb+srv://${dbuser}:${dbpass}@teaching-adb1b.mongodb.net/lectureExamples?retryWrites=true`;
mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = app;