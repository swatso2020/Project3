const db = require("../models");
const yelp = require('yelp-fusion');
require("dotenv").config();
//const apiKey = MY_VARIABLE
const client = yelp.client(process.env.MY_VARIABLE);

// Defining methods for the postsController
module.exports = {
  findAll: function(req, res) {
    db.Places.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Places
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Places
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Places
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Places
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  yelpFind: function(req, res) {
    client.eventLookup("oakland-saucy-oakland-restaurant-pop-up").then(response => {
      console.log(response.jsonBody);
    }).catch(e => {
      console.log(e);
    });
  },
  yelpApi: function(req, res) {
    client.search({
      term: 'Four Barrel Coffee',
      location: 'san francisco, ca',
    }).then(response => {
      //console.log(response.jsonBody.businesses[0].name);
      console.log(response.jsonBody)
    }).catch(e => {
      console.log(e);
    });
  },
  ypFind: function(req, res) {
    client.eventSearch({
      categories: 2,
      //is_free: true,
      location:'mami'
    }).then(response => {
      console.log(response.jsonBody);
    }).catch(e => {
      console.log(e);
    });

  }
    
  

};