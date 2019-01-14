const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const item = require('./routes/api/item');
const users = require('./routes/api/user');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//use routes
app.use('/api/item', item);
app.use('/api/users', users);

//use passport jwt authentication strategy

app.use(passport.initialize());
//passport config
require('./config/passport')(passport);

//connect to DB
const mongodb = require('./config/keys').mongodb;
mongoose
    .connect(mongodb, { useNewUrlParser: true })
    .then(() => console.log('connected to DB'))
    .catch(err => console.log(err));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world')
});

const port = process.env.PORT || 3001;

app.listen(port);