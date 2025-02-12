import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaCalculator,
  FaShoppingBag,
  FaInfoCircle,
  FaUser,
  FaShoppingCart,
  FaGlobe,
} from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import headerLogo from "../Assets/header-logo.png";
import Login from "../Pages/Login";
import CartPage from "../Pages/Cartpage"; // Import CartPage component

const Navbar = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState("home");
  const [hoveredTab, setHoveredTab] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // New state for Cart Modal

  useEffect(() => {
    const pathToTab = {
      "/": "home",
      "/productCal": "calculator",
      "/about": "about",
    };

    const currentPath = location.pathname;

    if (currentPath.startsWith("/e-shop")) {
      setActiveTab("eshop");
    } else {
      setActiveTab(pathToTab[currentPath] || "home");
    }
  }, [location.pathname]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-10 backdrop-blur-lg shadow-md">
        <div className="flex items-center justify-between px-6 md:px-20 lg:px-100 py-4">
          {/* Logo */}
          <Link to="/">
            <img src={headerLogo} alt="HeaderLogo" className="h-14 w-auto md:h-20" />
          </Link>
          <div className="flex items-center gap-6 relative">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="text-black text-lg flex items-center gap-1"
              >
                <FaGlobe />
              </button>
              {isLangOpen && (
                <div className="absolute top-10 left-0 bg-white shadow-lg rounded-lg p-2 flex flex-col">
                  {[{ code: "en", label: "English" }, { code: "si", label: "Sinhala" }, { code: "ta", label: "Tamil" }].map((lang) => (
                    <button
                      key={lang.code}
                      className="flex items-center gap-2 px-4 py-2 text-black hover:bg-gray-200 text-sm"
                      onClick={() => changeLanguage(lang.code)}
                    >
                      <FaGlobe /> {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/* Cart and Login Buttons */}
            <button onClick={() => setIsCartOpen(true)} className="text-black text-lg">
              <FaShoppingCart />
            </button>
            <button onClick={() => setIsLoginOpen(true)} className="text-black text-lg">
              <FaUser />
            </button>
          </div>
        </div>
      </header>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-6 left-1/2 transform -translate-x-1/2 
        bg-white-500 bg-opacity-10 backdrop-blur-lg shadow-2xl 
        text-black rounded-3xl flex items-center justify-center 
        px-4 py-3 transition-all duration-300 w-auto z-50">
        <div className="flex">
          {[{ id: "home", icon: <FaHome />, name: t("Home"), link: "/" },
            { id: "calculator", icon: <FaCalculator />, name: t("Calculator"), link: "/productCal" },
            { id: "eshop", icon: <FaShoppingBag />, name: t("Shop"), link: "/e-shop" },
            { id: "about", icon: <FaInfoCircle />, name: t("About Us"), link: "/about" }].map((tab) => (
            <Link
              key={tab.id}
              to={tab.link}
              className={`relative flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 
                ${activeTab === tab.id ? "bg-green-600 text-white" : "text-black"}`}
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
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className="flex md:hidden fixed bottom-0 left-0 w-full 
        bg-white-500 bg-opacity-10 backdrop-blur-lg shadow-2xl 
        text-black rounded-t-3xl flex items-center justify-around 
        px-4 py-3 transition-all duration-300 z-50">
        {[{ id: "home", icon: <FaHome />, name: t("Home"), link: "/" },
          { id: "calculator", icon: <FaCalculator />, name: t("Calculator"), link: "/productCal" },
          { id: "eshop", icon: <FaShoppingBag />, name: t("Shop"), link: "/e-shop" },
          { id: "about", icon: <FaInfoCircle />, name: t("About Us"), link: "/about" }].map((tab) => (
          <Link
            key={tab.id}
            to={tab.link}
            className={`flex flex-col items-center text-sm transition-all duration-300 
              ${activeTab === tab.id ? "text-green-600" : "text-black"}`}
          >
            <span className="text-xl">{tab.icon}</span>
            <span className="text-xs">{tab.name}</span>
          </Link>
        ))}
      </nav>

      {/* Login Modal */}
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      
      {/* Cart Modal */}
      <CartPage isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
