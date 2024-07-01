// backend/seedDatabase.js
const mongoose = require('mongoose');
const FoodService = require('./models/FoodService');
const BikeRental = require('./models/BikeRental');

mongoose.connect('mongodb://localhost:27017/community_marketplace')
  .then(() => console.log('Connected to MongoDB for seeding'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

const sampleFoodServices = [
  { name: 'Homemade Pizza', description: 'Delicious handmade pizza with fresh ingredients', price: 15, category: 'Italian' },
  { name: 'Vegan Burrito', description: 'Healthy and tasty vegan burrito', price: 10, category: 'Mexican' },
  { name: 'Sushi Platter', description: 'Assorted sushi rolls for 2', price: 25, category: 'Japanese' },
];

const sampleBikeRentals = [
  { name: 'Mountain Bike', description: 'Rugged bike for off-road adventures', pricePerHour: 10, available: true },
  { name: 'City Cruiser', description: 'Comfortable bike for city rides', pricePerHour: 8, available: true },
  { name: 'Electric Bike', description: 'Easy-to-ride electric bike for longer trips', pricePerHour: 15, available: false },
];

const seedDatabase = async () => {
  try {
    await FoodService.deleteMany({});
    await BikeRental.deleteMany({});

    await FoodService.insertMany(sampleFoodServices);
    await BikeRental.insertMany(sampleBikeRentals);

    console.log('Sample data inserted successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
  }
};

seedDatabase();