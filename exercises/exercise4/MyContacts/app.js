const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const contactsRouter = require('./routes/api/v1/contacts');

// Set-up middleware stack
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1/contacts', contactsRouter);




// TODO
//Update this connection string with your directory id inside of the brackets
const db = mongoose.connect('mongodb+srv://dbadmin:dbpassword@cmsc388b.a9mha.mongodb.net/chasbani-exercise4?retryWrites=true&w=majority', 
    { useNewUrlParser: true,  useUnifiedTopology: true})
    .catch( err => console.error(err));

app.get('/api/v1/contacts', (req, res) => {
    res.json({firstName: 'Andrej', lastName: 'Rasevic'})
})

module.exports = app;
