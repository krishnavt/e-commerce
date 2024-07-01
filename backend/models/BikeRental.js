// backend/models/BikeRental.js
const mongoose = require('mongoose');

const bikeRentalSchema = new mongoose.Schema({
  name: String,
  description: String,
  pricePerHour: Number,
  available: Boolean,
});

module.exports = mongoose.model('BikeRental', bikeRentalSchema);