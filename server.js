const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const item = require('./routes/api/item');
const users = require('./routes/api/user');
const path = require('path');

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

// Server static in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const port = process.env.PORT || 3001;

app.listen(port);