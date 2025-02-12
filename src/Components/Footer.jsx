import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import Logo from "../Assets/logo.png";
import SL from "../Assets/sl.png";
import ITI from "../Assets/ITI.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      {/* Top Green Section */}
      <div className="bg-green-600 flex flex-wrap justify-center md:justify-between items-center px-8 py-5">
        <img src={SL} alt="Made in Sri Lanka" className="h-14 mx-3" />
        <img src={Logo} alt="Harithaweli" className="h-16 mx-3" />
        <img src={ITI} alt="Product Tested by ITI" className="h-14 mx-3" />
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-gray-400">
        
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white">HARITHAWELI</h3>
          <p className="mt-3 text-sm">HOTLINE 24/7</p>
          <p className="text-lg font-bold text-green-400">+94 710 500 800</p>
          <p className="mt-3 text-sm">132/1, Kandy Road, Mahara, Kadawatha, Sri Lanka</p>
          <p className="text-sm">info@harithaweli.lk</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map((Icon, index) => (
              <Icon
                key={index}
                className="text-gray-400 hover:text-green-400 text-xl transition-transform transform hover:scale-110 hover:shadow-lg cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Our Branches */}
        <div>
          <h3 className="text-xl font-semibold text-white">OUR BRANCHES</h3>
          <div className="grid grid-cols-2 text-sm mt-4 gap-2">
            {["Kadawatha", "Makola", "Ragama", "Rikillagaskada", "Deraniyagala", "Welimada", "Menikhinna", "Kinniya", "Pottuvil", "Galaha", "Negombo", "Maruthamunai", "Baddegama", "Trincomalee", "Hatton", "Mannar", "Anuradhapura", "Mihintale", "Pujapitiya"].map((branch, index) => (
              <span key={index} className="text-gray-400 hover:text-green-400 transition-colors">{branch}</span>
            ))}
          </div>
        </div>

        {/* Help Center */}
        <div>
          <h3 className="text-xl font-semibold text-white">HELP CENTER</h3>
          <ul className="text-sm mt-4 space-y-3">
            {["Customer Service", "Policy", "Terms & Conditions", "Track Order", "FAQs", "My Account", "Product Support"].map((item, index) => (
              <li key={index} className="hover:text-green-400 cursor-pointer transition-colors">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 border-t border-gray-700">
        <p>© 2025 <span className="font-semibold text-white">Harithaweli</span>. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
