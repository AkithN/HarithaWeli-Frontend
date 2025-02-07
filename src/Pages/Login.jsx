import React from "react";
import { FaGoogle, FaFacebook, FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-2xl p-6 w-full max-w-md relative">
        {/* Close Button */}
        <button className="absolute top-3 right-3 text-white text-xl" onClick={onClose}>
          <FaTimes />
        </button>

        <h2 className="text-2xl font-semibold text-white text-center">Welcome Back!</h2>
        <p className="text-sm text-gray-300 text-center">Enter your details below to sign in</p>

        {/* Social Login Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="flex-1 flex items-center justify-center gap-2 bg-white bg-opacity-20 text-white py-2 px-4 rounded-md hover:bg-opacity-30 transition">
            <FaGoogle /> Continue Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 bg-white bg-opacity-20 text-white py-2 px-4 rounded-md hover:bg-opacity-30 transition">
            <FaFacebook /> Continue Facebook
          </button>
        </div>

        {/* OR Separator */}
        <div className="flex items-center my-4 text-gray-400">
          <hr className="flex-grow border-gray-500" />
          <span className="mx-2">or</span>
          <hr className="flex-grow border-gray-500" />
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
            placeholder="Enter Password"
          />
          <button
            type="button"
            className="absolute right-3 top-10 text-gray-300"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Forgot Password */}
        <div className="text-right mb-3">
          <a href="#" className="text-blue-400 text-sm hover:underline">Forgot Password?</a>
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition">
          Login
        </button>

        {/* Signup Link */}
        <p className="text-center text-gray-300 mt-3">
          Don’t have an account? <a href="#" className="text-blue-400 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
