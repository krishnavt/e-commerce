import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="text-center">
    <h1 className="text-4xl font-bold mb-6">Welcome to Community Marketplace</h1>
    <p className="text-xl mb-8">Find local food services and bike rentals in your community!</p>
    <div className="flex justify-center space-x-4">
      <Link to="/food-services" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
        Explore Food Services
      </Link>
      <Link to="/bike-rentals" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors">
        Explore Bike Rentals
      </Link>
    </div>
  </div>
);

export default Home;