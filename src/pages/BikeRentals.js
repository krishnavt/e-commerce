import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const BikeRentals = () => {
  const [bikeRentals, setBikeRentals] = useState([]);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchBikeRentals = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/bike-rentals');
        setBikeRentals(response.data);
      } catch (err) {
        console.error('Error fetching bike rentals:', err);
        setError('Failed to fetch bike rentals. Please try again later.');
      }
    };
    fetchBikeRentals();
  }, []);

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Bike Rentals</h1>
      {bikeRentals.length === 0 ? (
        <p className="text-center">Loading bike rentals...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bikeRentals.map((rental) => (
            <div key={rental._id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{rental.name}</h3>
                <p className="text-gray-600 mb-4">{rental.description}</p>
                <p className="text-lg font-bold text-blue-600">${rental.pricePerHour}/hour</p>
                <p className={`text-sm ${rental.available ? 'text-green-500' : 'text-red-500'}`}>
                  {rental.available ? 'Available' : 'Not Available'}
                </p>
              </div>
              <button
                onClick={() => addToCart(rental)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 w-full transition-colors"
                disabled={!rental.available}
              >
                {rental.available ? 'Add to Cart' : 'Not Available'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BikeRentals;