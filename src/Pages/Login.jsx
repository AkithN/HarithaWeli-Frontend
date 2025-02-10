import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  // Hardcoded login credentials
  const users = {
    "client@example.com": "client123",
    "admin@example.com": "admin123",
    "sales@example.com": "sales123",
    "agent@example.com": "agent123",
  };

  // Role mapping for each email
  const roles = {
    "client@example.com": "Client",
    "admin@example.com": "Admin",
    "sales@example.com": "Sales Representative",
    "agent@example.com": "Agent",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { email, password } = formData;

    if (isLogin) {
      if (users[email] && users[email] === password) {
        const userRole = roles[email];

        // Store in localStorage
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userRole", userRole);

        alert(`Login successful! Role: ${userRole}`);
        console.log(`Logged in as: ${userRole}`);

        // Redirect user based on role
        if (userRole === "Client") {
          navigate("/");
        } else {
          navigate("/admin");
        }
      } else {
        alert("Invalid email or password");
      }
    } else {
      alert("Signup is disabled in this demo.");
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
            {isLogin && (
              <>
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
                  <a href="/" className="text-green-400 text-sm hover:underline">
                    Forgot Password?
                  </a>
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
