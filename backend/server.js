// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

const foodServicesRouter = require('./routes/foodServices');
const bikeRentalsRouter = require('./routes/bikeRentals');

app.use('/api/food-services', foodServicesRouter);
app.use('/api/bike-rentals', bikeRentalsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});