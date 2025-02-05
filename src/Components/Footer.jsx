import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import Logo from "../Assets/logo.png";
import SL from "../Assets/sl.png";
import ITI from "../Assets/ITI.png";

const Footer = () => {
  return (
    <footer className="bg-white pt-10 px-80">
      {/* Top Green Section */}
      <div className="bg-[#1ABA1A] flex justify-between items-center p-6 px-20">
        <img src={SL}alt="Made in Sri Lanka" className="h-20" />
        <img src={Logo} alt="Harithaweli" className="h-20" />
        <img src={ITI} alt="Product Tested by ITI" className="h-20" />
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-gray-700">
        
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold">HARITHAWELI</h3>
          <p className="mt-2 text-sm">HOTLINE 24/7</p>
          <p className="text-lg font-bold text-green-600">+94 710 500 800</p>
          <p className="mt-2 text-sm">132/1, Kandy Road, Mahara, Kadawatha, Sri Lanka</p>
          <p className="text-sm">info@harithaweli.lk</p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <FaFacebookF className="text-gray-600 hover:text-green-500 text-lg cursor-pointer" />
            <FaTwitter className="text-gray-600 hover:text-green-500 text-lg cursor-pointer" />
            <FaInstagram className="text-gray-600 hover:text-green-500 text-lg cursor-pointer" />
            <FaYoutube className="text-gray-600 hover:text-green-500 text-lg cursor-pointer" />
            <FaPinterest className="text-gray-600 hover:text-green-500 text-lg cursor-pointer" />
          </div>
        </div>

        {/* Our Branches */}
        <div>
          <h3 className="text-lg font-semibold">OUR BRANCHES</h3>
          <div className="grid grid-cols-2 text-sm mt-2 gap-2">
            {["Kadawatha", "Makola", "Ragama", "Rikillagaskada", "Deraniyagala", "Welimada", "Menikhinna", "Kinniya", "Pottuvil", "Galaha", "Negombo", "Maruthamunai", "Baddegama", "Trincomalee", "Hatton", "Mannar", "Anuradhapura", "Mihintale", "Pujapitiya"].map((branch, index) => (
              <span key={index} className="text-gray-600">{branch}</span>
            ))}
          </div>
        </div>

        {/* Help Center */}
        <div>
          <h3 className="text-lg font-semibold">HELP CENTER</h3>
          <ul className="text-sm mt-2 space-y-2">
            {["Customer Service", "Policy", "Terms & Conditions", "Track Order", "FAQs", "My Account", "Product Support"].map((item, index) => (
              <li key={index} className="hover:text-green-500 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Partner */}
        <div>
          <h3 className="text-lg font-semibold">PARTNER</h3>
          <ul className="text-sm mt-2 space-y-2">
            {["Become Seller", "Affiliate", "Advertise", "Partnership"].map((item, index) => (
              <li key={index} className="hover:text-green-500 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 border-t">
        <p>© 2025 <span className="font-semibold text-black">Harithaweli</span>. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
