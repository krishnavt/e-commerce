// backend/routes/bikeRentals.js
const express = require('express');
const router = express.Router();
const BikeRental = require('../models/BikeRental');

router.get('/', async (req, res) => {
  try {
    const bikeRentals = await BikeRental.find();
    res.json(bikeRentals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;