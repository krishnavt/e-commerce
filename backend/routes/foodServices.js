// backend/routes/foodServices.js
const express = require('express');
const router = express.Router();
const FoodService = require('../models/FoodService');

router.get('/', async (req, res) => {
  try {
    const foodServices = await FoodService.find();
    res.json(foodServices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

