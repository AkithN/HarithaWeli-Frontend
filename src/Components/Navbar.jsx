import React from "react";
import { SearchOutlined, HeartOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <header className="shadow-md">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-6 py-2 text-sm text-gray-700">
        <div className="flex items-center gap-4">
          <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded">Hotline 24/7</span>
          <span className="font-semibold">+94 710 500 800</span>
        </div>

        <img src="/logo.png" alt="Harithaweli Logo" className="h-12" />

        <div className="flex items-center gap-6">
          <span className="text-gray-600">info@harithaweli.lk</span>
          <div className="flex items-center gap-2">
            <UserOutlined className="text-lg" />
            <span className="text-sm font-semibold">WELCOME</span>
            <a href="#" className="text-black font-semibold">LOG IN / REGISTER</a>
          </div>
          <div className="relative flex items-center">
            <ShoppingCartOutlined className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 rounded-full">5</span>
            <span className="ml-2 font-semibold">LKR 2000</span>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <nav className="flex items-center justify-center space-x-6 py-3 font-semibold uppercase">
        <a href="#" className="hover:text-green-600">HOMES</a>
        <a href="#" className="hover:text-green-600">PAGES</a>
        <a href="#" className="hover:text-green-600">PRODUCTS</a>
        <a href="#" className="hover:text-green-600">PROJECT</a>
        <a href="#" className="hover:text-green-600">CONTACT</a>
        <a href="#" className="hover:text-green-600">ABOUT</a>
      </nav>

      {/* SEARCH BAR & PROMOTIONS */}
      <div className="bg-green-500 py-4 px-6 flex items-center justify-between text-white">
        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-md p-2 w-2/5">
          <select className="bg-transparent text-gray-700 px-2 outline-none">
            <option>Province</option>
            <option>Colombo</option>
            <option>Kandy</option>
            <option>Galle</option>
          </select>
          <input
            type="text"
            placeholder="Search anything..."
            className="flex-grow px-4 text-gray-700 outline-none"
          />
          <SearchOutlined className="text-gray-700 text-xl cursor-pointer" />
        </div>

        {/* Promotion Texts */}
        <div className="flex space-x-10 font-semibold text-sm">
          <span>FREE SHIPPING</span>
          <span>30 DAYS MONEY BACK</span>
          <span>100% SECURE PAYMENT</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
