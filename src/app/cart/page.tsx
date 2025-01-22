"use client";

import { useCart } from '../component/contextApi';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { loadStripe } from '@stripe/stripe-js';

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    decreaseQuantity,
    clearCart,
    addToCart,
  } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemoveFromCart = (id: string, name: string) => {
    removeFromCart(id);
    toast.error(`${name} removed from cart!`);
  };

  const handleClearCart = () => {
    clearCart();
    toast.info('Cart cleared!');
  };

  const handleCheckout = async () => {
    try {
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartItems }),
      });

      const data = await response.json();
      console.log('API Response:', data); // Debugging: Log the API response

      if (!data.id) {
        throw new Error('No session ID returned from the API');
      }

      const result = await stripe?.redirectToCheckout({ sessionId: data.id });

      if (result?.error) {
        toast.error('Failed to redirect to checkout.');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error('Failed to process checkout.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <section className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-700 text-lg mb-4">Your cart is empty.</p>
            <Link
              href="/shope"
              className="bg-[#007580] text-white py-2 px-6 rounded-lg font-semibold hover:bg-[#005f6b] transition duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="p-8">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center justify-between border-b border-gray-200 py-6"
                >
                  <div className="relative w-24 h-24 mb-4 md:mb-0">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      className="object-cover rounded-lg"
                      fill
                      sizes="100px"
                    />
                  </div>
                  <div className="flex-1 ml-0 md:ml-6 text-center md:text-left">
                    <h2 className="text-xl font-semibold text-gray-900">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-lg text-[#007580] font-semibold">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition duration-300"
                    >
                      -
                    </button>
                    <span className="text-gray-700 text-lg">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition duration-300"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id, item.name)}
                    className="text-red-500 hover:text-red-700 mt-4 md:mt-0"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="p-8 border-t border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Total</h2>
                <p className="text-2xl text-[#007580] font-semibold">${totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <button
                  onClick={handleClearCart}
                  className="bg-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
                >
                  Clear Cart
                </button>
                <button
                  onClick={handleCheckout}
                  className="bg-[#007580] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#005f6b] transition duration-300"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}