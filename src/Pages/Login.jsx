import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const LoginPage = () => {
  const [isDark, setIsDark] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Tracks whether we're in login or register mode

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const switchForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient blur-3xl opacity-30"></div>

      <div className="relative p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg max-w-md w-full border border-white border-opacity-20 dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>
        <form className="space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-full bg-white bg-opacity-20 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-full bg-white bg-opacity-20 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {!isLogin && (
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-full bg-white bg-opacity-20 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold transition transform hover:scale-105 focus:ring-4 focus:ring-blue-300 focus:outline-none"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <div className="text-center mt-6">
          <a href="#" onClick={switchForm} className="text-blue-400 hover:underline">
            {isLogin ? "Switch to Register" : "Switch to Login"}
          </a>
        </div>
        <div className="absolute top-4 right-4 flex items-center cursor-pointer" onClick={toggleTheme}>
          <FaSun className={`text-2xl ${!isDark ? "text-yellow-400" : "text-gray-500"}`} />
          <FaMoon className={`text-2xl ml-2 ${isDark ? "text-blue-400" : "text-gray-500"}`} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


