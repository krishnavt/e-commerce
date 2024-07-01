// backend/models/FoodService.js
const mongoose = require('mongoose');

const foodServiceSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
});

module.exports = mongoose.model('FoodService', foodServiceSchema);

