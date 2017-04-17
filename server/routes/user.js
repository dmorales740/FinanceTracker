const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const host = '127.0.0.1';
const port = '27017'; 
const database = 'financetracker';
const connectionString = 'mongodb://' + host + ':' + port + '/' + database;

var usersCollection;

// User login
router.post('/login', function (req, res) {
  usersCollection.find({ username: req.body.username }, 
    function (err, result) {
    if (err) {
      throw err;
    }
    result.next((err, foundUser) => {
      if (err) {
        throw err;
      }
      if (!foundUser) {
        return res.status(400).send('User not found.');
      }
      if (req.body.password != foundUser.password) {
        return res.status(400).send('Invalid password');
      }
      delete foundUser.password;
      return res.status(200).send( foundUser );
    });
  });
});

// Creates a new user in the database
router.post('/signup', (req, res) => {
  var user = { 
    'username': req.body.username,
    'password': req.body.password
  };
  usersCollection.findOne({username:user.username}, (err, result) => {
    if (err) {
      return res.status(500).send('An error occurred creating this user.');
    }
    if (result) {
      return res.status(401).send('A user with this username address already exists.');
    }
    usersCollection.insert(user, (err, result) => {
      if (err) {
        return res.send(500, 'An error occurred creating this user.');
      }
      return res.status(201).json('User created successfully!');
    });
  });
});

//Connect to MongoDB
mongodb.connect(connectionString, function(error, db) {
  if(error) {
    throw error;
  }
  usersCollection = db.collection('users');
  // Close the database connection and server when the application ends
  process.on('SIGTERM', function () {
    console.log("Shutting server down.");
    db.close();
  });
});

module.exports = router;