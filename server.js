// Just a better practice to use single-quotes instead of double quotes.
// Completely a stylistic preference. (or is it?)

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const restaurant = require('./routes/api/restaurant');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

app.use('/api/users', users);
app.use('/api/restaurant', restaurant);

const port = process.env.PORT || 8888;

app.listen(port, () => console.log(`Server running on port ${port}`));
