const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const host = '127.0.0.1';
const port = '27017'; 
const database = 'financetracker';
const connectionString = 'mongodb://' + host + ':' + port + '/' + database;

var projectsCollection;

// Update project
router.post('/update', (req, res) => {
  var id = req.body.id;
  delete req.body._id;
  projectsCollection.update({ '_id': mongodb.ObjectID(id)}, req.body, (error, count, status) => {
    if(error) throw error;
    return res.status(200).json(count);
  });  

});

// Get project list
router.post('/all', (req, res) => {
  var userId = req.body.userId;
  projectsCollection.find({'userId':userId}, (error, result) => {
    if(error) throw error;
    result.toArray((error, found) => {
      if(error) throw error;
      return res.status(200).json(found);
    });
  });
});

// Get project
router.get('/details', (req, res) => {
  var id = req.query.id;
  
  projectsCollection.find(mongodb.ObjectID(id), (error, result) => {
    if(error) throw error;
    result.next((error, foundProject) => {
      if(error) throw error;
      if(!foundProject) {
        console.log("Project not found");
        return res.status(400).send('ERROR: Unable to find project.');
      }
      return res.status(200).json(foundProject);
    });
  });
});

// Add Project
router.post('/add', function (req, res) {
    projectsCollection.insert(req.body, (error, result) => {
      if(error) throw error;
      projectsCollection.findOne(req.body, { id: 1}, (error, doc) => {
          if(error) throw error;
          var id = doc._id;
          projectsCollection.update({_id: id}, {$set: {id: id}}, (error, count, status) => {
              if(error) throw error;
          });
          return res.status(200).json({ id: doc._id});
      });    
    });
});


//Connect to MongoDB
mongodb.connect(connectionString, function(error, db) {
  if(error) {
    throw error;
  }
  projectsCollection = db.collection('projects');
  // Close the database connection and server when the application ends
  process.on('SIGTERM', function () {
    console.log("Shutting server down.");
    db.close();
  });
});

module.exports = router;