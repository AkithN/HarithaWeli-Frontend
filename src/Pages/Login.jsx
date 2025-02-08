import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (isLogin) {
      console.log("Login:", formData.email, formData.password);
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      console.log("Signup:", formData);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white bg-opacity-10 backdrop-blur-lg shadow-xl rounded-2xl p-6 w-full max-w-md relative"
      >
        <button className="absolute top-4 right-4 text-white text-lg" onClick={onClose}>
          <FaTimes />
        </button>

        <h2 className="text-2xl font-bold text-white text-center mb-2">
          {isLogin ? "Welcome Back!" : "Create an Account"}
        </h2>
        <p className="text-sm text-gray-300 text-center mb-4">
          {isLogin ? "Enter your details below to sign in" : "Join us by entering your details below"}
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={isLogin ? "login" : "register"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Login Form */}
            {isLogin ? (
              <>
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

                <div className="mb-3">
                  <label className="text-white text-sm">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 rounded-md bg-gray-700 bg-opacity-40 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3 relative">
                  <label className="text-white text-sm">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
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

                <div className="text-right mb-3">
                  <a href="#" className="text-green-400 text-sm hover:underline">
                    Forgot Password?
                  </a>
                </div>
              </>
            ) : (
              // Register Form
              <>
                <div className="mb-3">
                  <label className="text-white text-sm">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 rounded-md bg-gray-700 bg-opacity-40 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="mb-3">
                  <label className="text-white text-sm">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 rounded-md bg-gray-700 bg-opacity-40 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3 relative">
                  <label className="text-white text-sm">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 rounded-md bg-gray-700 bg-opacity-40 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-10 text-gray-300"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <div className="mb-4">
                  <label className="text-white text-sm">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 rounded-md bg-gray-700 bg-opacity-40 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Confirm your password"
                  />
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        <button
          onClick={handleSubmit}
          className="w-full bg-white bg-opacity-20 text-white py-2 rounded-md text-sm font-semibold hover:bg-green-700 transition mb-4"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <p className="text-center text-gray-300">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button onClick={() => setIsLogin(!isLogin)} className="text-green-400 hover:underline">
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default AuthModal;
