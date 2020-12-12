const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name:String,
  location:{type:String},
  phoneNumber: Number,
  category: { type: String, required: true },
  cost: { type: String, required: true },
  description: String,
  imageUrl: String,
  lattitude: Number,
  longitude: Number,
  date: { type: Date, default: Date.now }
});

const Places = mongoose.model("Places", placeSchema);

module.exports = Places;