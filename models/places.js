const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: { type: String, required: true },
  image_url: String,
  categories: String,
  address: String,
  phone: String,
  url: String,

  
  lattitude: Number,
  longitude: Number,
  date: { type: Date, default: Date.now }
});

const Places = mongoose.model("Places", placeSchema);

module.exports = Places;