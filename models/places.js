const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({

  name: { type: String, required: true },
  image_url: String,
  categories: String,
  address: String,
  phone: String,
<<<<<<< HEAD
  url: String,

  
=======
  description: String,
>>>>>>> a6fd7709c1179061f4a8b086ceb4d75f40133328
  lattitude: Number,
  longitude: Number,
  date: { type: Date, default: Date.now }
});

const Places = mongoose.model("Places", placeSchema);

module.exports = Places;