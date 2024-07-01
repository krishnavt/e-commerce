import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FoodServices from './pages/FoodServices';
import BikeRentals from './pages/BikeRentals';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';

const paypalClientId = "AaNJcQRrta72n1mIGVJ1SBj_OLsFx70tuEODzD7Eh8FEHyL81afcl1qNfU7BcCKHBIo-7wtUwxaUOnr1"; // Replace with your actual PayPal client ID

const paypalOptions = {
  "client-id": paypalClientId,
  currency: "USD",
};

function App() {
  return (
    <PayPalScriptProvider options={paypalOptions}>
      <CartProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/food-services" element={<FoodServices />} />
                <Route path="/bike-rentals" element={<BikeRentals />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </PayPalScriptProvider>
  );
}

export default App;