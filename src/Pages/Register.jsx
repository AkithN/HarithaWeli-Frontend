import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";

const Register = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-2xl p-6 w-full max-w-md relative">
        {/* Close Button */}
        <button className="absolute top-3 right-3 text-white text-xl" onClick={onClose}>
          <FaTimes />
        </button>

        <h2 className="text-2xl font-semibold text-white text-center">Create an Account</h2>
        <p className="text-sm text-gray-300 text-center">Join us by entering your details below</p>

        {/* Social Signup Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="flex-1 flex items-center justify-center gap-2 bg-white bg-opacity-20 text-white py-2 px-4 rounded-md hover:bg-opacity-30 transition">
            <FaGoogle /> Sign Up with Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 bg-white bg-opacity-20 text-white py-2 px-4 rounded-md hover:bg-opacity-30 transition">
            <FaFacebook /> Sign Up with Facebook
          </button>
        </div>

        {/* OR Separator */}
        <div className="flex items-center my-4 text-gray-400">
          <hr className="flex-grow border-gray-500" />
          <span className="mx-2">or</span>
          <hr className="flex-grow border-gray-500" />
        </div>

        {/* Full Name Input */}
        <div className="mb-3">
          <label className="text-white text-sm">Full Name</label>
          <input
            type="text"
            className="w-full p-2 mt-1 rounded-md bg-gray-700 bg-opacity-40 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email Input */}
        <div className="mb-3">
          <label className="text-white text-sm">Email</label>
          <input
            type="email"
            className="w-full p-2 mt-1 rounded-md bg-gray-700 bg-opacity-40 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-3 relative">
          <label className="text-white text-sm">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full p-2 mt-1 rounded-md bg-gray-700 bg-opacity-40 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Create a password"
          />
          <button
            type="button"
            className="absolute right-3 top-10 text-gray-300"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Confirm Password Input */}
        <div className="mb-3 relative">
          <label className="text-white text-sm">Confirm Password</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            className="w-full p-2 mt-1 rounded-md bg-gray-700 bg-opacity-40 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Confirm your password"
          />
          <button
            type="button"
            className="absolute right-3 top-10 text-gray-300"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Sign Up Button */}
        <button className="w-full bg-white bg-opacity-20 text-white py-2 rounded-md text-lg font-semibold hover:bg-green-700 transition">
          Sign Up
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-300 mt-3">
          Already have an account? <a href="/Login" className="text-green-400 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
