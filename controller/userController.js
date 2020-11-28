const db = require("../models");
const md5=require("md5");

// Defining methods for the postsController
module.exports = {
  
  register: function(req, res) {
    db.User.create({
        name:req.body.name,
        email:req.body.email.toLowerCase(),
        password:md5(req.body.password)
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(409).json(err));
  }
};