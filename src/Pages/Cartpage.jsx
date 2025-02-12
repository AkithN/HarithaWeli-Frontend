import React from "react";
import { FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CartPage = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleCheckout = () => {
    onClose(); // Close the cart popup
    navigate("/payment"); // Redirect to the payment page
  };

  return (
    <div className="fixed inset-0 z-50  mt-20 flex items-start justify-end p-4">
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 50, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white-500 bg-opacity-60 backdrop-blur-lg shadow-xl rounded-2xl p-6 w-80 relative"
      >
        <h2 className="text-xl font-bold text-black mb-4">Shopping Cart</h2>

        <div className="space-y-4">
          {/* Example Cart Item */}
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-800 bg-opacity-30 p-2 rounded-md"
            >
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt={`Item ${item}`}
                  className="w-12 h-12 object-cover rounded-md"
                />
                <span className="ml-4 text-white">Product {item}</span>
              </div>
              <button
                className="text-red-500 hover:text-red-700 transition"
                onClick={() => alert(`Remove Product ${item}`)} // Replace this with real remove logic
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-lg text-black">Total:</span>
          <span className="text-lg text-black">$150.00</span>
        </div>

        <div className="mt-6">
          <button
            onClick={handleCheckout}
            className="w-full bg-green-500 text-white py-2 rounded-md text-sm font-semibold hover:bg-green-700 transition"
          >
            Checkout
          </button>
        </div>
      </motion.div>
      {/* Click outside to close the modal */}
      <div
        className="fixed inset-0 bg-transparent"
        onClick={onClose}
      ></div>
    </div>
  );
};

export default CartPage;
