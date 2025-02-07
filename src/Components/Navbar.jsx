import React, { useState } from "react";
import {
  FaHome,
  FaCalculator,
  FaShoppingBag,
  FaInfoCircle,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";
import headerLogo from "../Assets/header-logo.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home"); // Track active tab
  const [clickedTab, setClickedTab] = useState(null); // Track clicked tab for text toggle

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-white bg-opacity-10 backdrop-blur-lg">
      
      <div className="flex items-center justify-between px-6 md:px-20 lg:px-100 py-4">
        <img src={headerLogo} alt="HeaderLogo" className="h-14 w-auto md:h-20" />
        <div className="flex items-center gap-10">
          <a href="/cart" className="text-black text-lg">
            <FaShoppingCart />
          </a>
          <a href="/profile" className="text-black text-lg">
            <FaUser />
          </a>
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
          { id: "calculator", icon: <FaCalculator />, name: "Calculator",link: "/productCal" },
          { id: "eshop", icon: <FaShoppingBag />, name: "E-Shop",link: "/eshop" },
          { id: "about", icon: <FaInfoCircle />, name: "About Us",link: "/about" },
          
        ].map((tab) => (
          <button
            key={tab.id}
            className={`relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              activeTab === tab.id ? "bg-green-600 text-white" : "text-black"
            }`}
            onClick={() => {
              setActiveTab(tab.id);
              setClickedTab(clickedTab === tab.id ? null : tab.id);
            }}
          >
            <span className="text-lg">{tab.icon}</span>
            {clickedTab === tab.id && (
              <span className="text-sm font-medium">{tab.name}</span>
            )}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;

