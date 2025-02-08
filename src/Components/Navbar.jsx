import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaCalculator,
  FaShoppingBag,
  FaInfoCircle,
  FaUser,
  FaShoppingCart
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import headerLogo from "../Assets/header-logo.png";
import Login from "../Pages/Login";

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("home");
  const [hoveredTab, setHoveredTab] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    const pathToTab = {
      "/": "home",
      "/productCal": "calculator",
      "/eshop": "eshop",
      "/about": "about",
    };
    setActiveTab(pathToTab[location.pathname] || "home");
  }, [location.pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-white bg-opacity-10 backdrop-blur-lg">
        {/* Logo & Navbar Container */}
        <div className="flex items-center justify-between px-6 md:px-20 lg:px-100 py-4">
          <img src={headerLogo} alt="HeaderLogo" className="h-14 w-auto md:h-20" />
          <div className="flex items-center gap-10">
            <a href="/cart" className="text-black text-lg">
              <FaShoppingCart />
            </a>
            <button onClick={() => setIsLoginOpen(true)} className="text-black text-lg">
              <FaUser />
            </button>
          </div>
        </div>

        {/* Fixed Navigation Bar */}
        <nav
          className="fixed top-6 left-1/2 transform -translate-x-1/2 
        bg-white-500 bg-opacity-10 backdrop-blur-lg shadow-2xl 
        text-black w-[90%] max-w-[400px] rounded-3xl flex items-center justify-between 
        px-4 py-3 transition-all duration-300"
        >
          {[
            { id: "home", icon: <FaHome />, name: "Home", link: "/" },
            { id: "calculator", icon: <FaCalculator />, name: "Calculator", link: "/productCal" },
            { id: "eshop", icon: <FaShoppingBag />, name: "Shop", link: "/eshop" },
            { id: "about", icon: <FaInfoCircle />, name: "About Us", link: "/about" },
          ].map((tab) => (
            <a
              key={tab.id}
              href={tab.link}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                activeTab === tab.id ? "bg-green-600 text-white" : "text-black"
              }`}
              onMouseEnter={() => setHoveredTab(tab.id)}
              onMouseLeave={() => setHoveredTab(null)}
            >
              <span className="text-lg">{tab.icon}</span>
              <AnimatePresence>
                {(hoveredTab === tab.id || activeTab === tab.id) && (
                  <motion.span
                    className="text-sm font-medium"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    {tab.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </a>
          ))}
        </nav>
      </header>

      {/* Login Popup Component */}
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Navbar;

