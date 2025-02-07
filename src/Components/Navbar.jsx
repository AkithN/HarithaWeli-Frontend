import React, { useState } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaDribbble,
  FaVimeoV,
  FaTumblr,
  FaShoppingCart,
  FaHome,
  FaStore,
  FaProjectDiagram,
  FaInfoCircle,
  FaUser,
  FaCalculator,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import headerLogo from "../Assets/header-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow-md">
      {/* Top Navbar */}
      <div className="bg-[#222222] text-gray-400 flex items-center justify-between px-6 md:px-20 lg:px-80 text-sm">
        {/* Social Icons (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-3">
          <FaTwitter className="cursor-pointer hover:text-gray-200" />
          <FaFacebookF className="cursor-pointer hover:text-gray-200" />
          <FaDribbble className="cursor-pointer hover:text-gray-200" />
          <FaVimeoV className="cursor-pointer hover:text-gray-200" />
          <FaTumblr className="cursor-pointer hover:text-gray-200" />
        </div>

        <div className="flex items-center gap-2">
          <a href="/Login" className="hover:text-white text-xs md:text-sm">
            Log in
          </a>
          <span className="text-gray-500 hidden md:inline">or</span>
          <a href="/Register" className="hover:text-white text-xs md:text-sm">
            Create an account
          </a>
          <div className="flex items-center">
            <div className="relative flex items-center bg-[#55C2C3] text-white px-4 py-2 cursor-pointer">
              <FaShoppingCart className="text-xl" />
              <span className="ml-2 font-semibold text-xs md:text-sm">
                LKR 5500
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 md:px-20 lg:px-80 py-4">
        <img
          src={headerLogo}
          alt="HeaderLogo"
          className="h-14 w-auto md:h-20"
        />

        <div className="md:hidden">
          {menuOpen ? (
            <FaTimes
              className="text-3xl cursor-pointer text-[#55C2C3]"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <FaBars
              className="text-3xl cursor-pointer text-[#55C2C3]"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>

        <nav className="hidden md:flex items-center space-x-10 text-black font-semibold uppercase text-sm md:text-base">
          <a href="/" className="flex items-center gap-2 hover:text-[#55C2C3]">
            <FaHome size={20}/>
          </a>
          <a
            href="/productCal"
            className="flex items-center gap-2 hover:text-[#55C2C3]"
          >
            <FaCalculator size={20}/>
          </a>
          <a
            href="/E-Shop"
            className="flex items-center gap-2 hover:text-[#55C2C3]"
          >
            <FaStore size={20}/>
          </a>
          <a
            href="/Projects"
            className="flex items-center gap-2 hover:text-[#55C2C3]"
          >
            <FaProjectDiagram size={20}/>
          </a>
          <a
            href="/About"
            className="flex items-center gap-2 hover:text-[#55C2C3]"
          >
            <FaInfoCircle size={20}/>
          </a>
          <a
            href="/Account"
            className="flex items-center gap-2 hover:text-[#55C2C3]"
          >
            <FaUser size={20}/>
          </a>
        </nav>
      </div>

      <div
        className={`absolute top-16 left-0 w-full bg-gray-900 text-white transition-all duration-300 ease-in-out z-50 ${
          menuOpen ? "flex" : "hidden"
        } md:hidden flex-col items-center`}
      >
        <nav className="flex flex-col items-center space-y-4 py-6">
          <a
            href="/"
            className="flex items-center gap-2 hover:text-[#55C2C3] text-lg"
          >
            <FaHome size={20} />
          </a>
          <a
            href="/productCal"
            className="flex items-center gap-2 hover:text-[#55C2C3] text-lg"
          >
            <FaCalculator size={20} />
          </a>
          <a
            href="/E-Shop"
            className="flex items-center gap-2 hover:text-[#55C2C3] text-lg"
          >
            <FaStore size={20} />
          </a>
          <a
            href="/Projects"
            className="flex items-center gap-2 hover:text-[#55C2C3] text-lg"
          >
            <FaProjectDiagram size={20} />
          </a>
          <a
            href="/About"
            className="flex items-center gap-2 hover:text-[#55C2C3] text-lg"
          >
            <FaInfoCircle size={20} />
          </a>
          <a
            href="/Account"
            className="flex items-center gap-2 hover:text-[#55C2C3] text-lg"
          >
            <FaUser size={20} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
