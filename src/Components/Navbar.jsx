import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaDribbble,
  FaVimeoV,
  FaTumblr,
  FaShoppingCart,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import headerLogo from "../Assets/header-logo.png";

const Navbar = () => {
  return (
    <header className="shadow-md">
      <div className="bg-[#222222] text-gray-400 flex items-center justify-between px-80 py-2 text-sm">
        <div className="flex items-center gap-3">
          <FaTwitter className="cursor-pointer hover:text-gray-200" />
          <FaFacebookF className="cursor-pointer hover:text-gray-200" />
          <FaDribbble className="cursor-pointer hover:text-gray-200" />
          <FaVimeoV className="cursor-pointer hover:text-gray-200" />
          <FaTumblr className="cursor-pointer hover:text-gray-200" />
        </div>

        <div className="flex items-center gap-2">
          <a href="/Login" className="hover:text-white">
            Log in
          </a>
          <span className="text-gray-500">or</span>
          <a href="/Register" className="hover:text-white">
            Create an account
          </a>
          <FiSearch className="text-lg ml-4 cursor-pointer hover:text-white" />
          <div className="flex items-center">
            <div className="relative flex items-center bg-[#55C2C3] text-white px-4 py-2 rounded-md cursor-pointer">
              <FaShoppingCart className="text-xl" />
              <span className="ml-2 font-semibold">$99</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-80 py-4">
        <img src={headerLogo} alt="HeaderLogo" className="h-20 w-auto" />
        <nav className="flex items-center space-x-8 font-semibold uppercase text-black">
        <a href="/" className="hover:text-[#55C2C3]">
            HOME
          </a>
          <a href="/productCal" className="hover:text-[#55C2C3]">
            CAL
          </a>
          <a href="/E-Shop" className="hover:text-[#55C2C3]">
            E-Shop
          </a>
          <a href="/Projects" className="hover:text-[#55C2C3]">
            PROJECTS
          </a>
          <a href="/About" className="hover:text-[#55C2C3]">
            ABOUT US
          </a>
          <a href="/Account" className="hover:text-[#55C2C3]">
            ACCOUNT
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
