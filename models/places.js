const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: { type: String, required: true },

  category: { type: String, required: true },
  cost: { type: String, required: true },
  description: String,
  imageUrl: String,
  lattitude: Number,
    longitude: Number,
    name:String,
  date: { type: Date, default: Date.now }
});

const Places = mongoose.model("Places", placeSchema);

module.exports = Places;