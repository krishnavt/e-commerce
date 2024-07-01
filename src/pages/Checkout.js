import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [{ isPending, isResolved, isRejected }] = usePayPalScriptReducer();

  const totalPrice = cart.reduce((total, item) => total + (item.price || item.pricePerHour), 0);

  const handlePayPalSuccess = (details) => {
    console.log('Payment successful:', details);
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">Thank You!</h1>
        <p>Your order has been placed successfully.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input type="text" id="name" required className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" required className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
          <textarea id="address" required className="w-full px-3 py-2 border rounded-lg"></textarea>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
        </div>
        {isPending && <div>Loading PayPal...</div>}
        {isRejected && <div>Failed to load PayPal. Please refresh the page and try again.</div>}
        {isResolved && (
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: totalPrice.toFixed(2),
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                handlePayPalSuccess(details);
              });
            }}
            onError={(err) => {
              console.error('PayPal error:', err);
              alert('There was an error processing your payment. Please try again.');
            }}
          />
        )}
      </form>
    </div>
  );
};

export default Checkout;