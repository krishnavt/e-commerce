import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cart } = useCart();

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex items-center justify-between">
          <div className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200 transition-colors">Home</Link></li>
            <li><Link to="/food-services" className="hover:text-blue-200 transition-colors">Food Services</Link></li>
            <li><Link to="/bike-rentals" className="hover:text-blue-200 transition-colors">Bike Rentals</Link></li>
          </div>
          <li>
            <Link to="/cart" className="flex items-center hover:text-blue-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Cart ({cart.length})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;