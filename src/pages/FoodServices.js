import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const FoodServices = () => {
  const [foodServices, setFoodServices] = useState([]);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchFoodServices = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/food-services');
        setFoodServices(response.data);
      } catch (err) {
        console.error('Error fetching food services:', err);
        setError('Failed to fetch food services. Please try again later.');
      }
    };
    fetchFoodServices();
  }, []);

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Food Services</h1>
      {foodServices.length === 0 ? (
        <p className="text-center">Loading food services...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {foodServices.map((service) => (
            <div key={service._id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-lg font-bold text-green-600">${service.price}</p>
                <p className="text-sm text-gray-500">Category: {service.category}</p>
              </div>
              <button
                onClick={() => addToCart(service)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 w-full transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodServices;