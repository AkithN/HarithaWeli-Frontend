import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import Product1 from '../Assets/Brick-Bond.png';
import Product2 from '../Assets/Clay-plaster.jpeg';
import Product3 from '../Assets/Clay-putty.jpeg';
import Product4 from '../Assets/Gray-plaster.jpeg';
import Product5 from '../Assets/Gray-plaster.png';
import Product6 from '../Assets/Wall-putty.jpeg';

const products = [
  { id: 1, price: 10, image: Product1, available: true },
  { id: 2, price: 20, image: Product2, available: false },
  { id: 3, price: 30, image: Product3, available: true },
  { id: 4, price: 40, image: Product4, available: false },
  { id: 5, price: 50, image: Product5, available: true },
  { id: 6, price: 60, image: Product6, available: true },
];

const branches = [
  "Kadawatha", "Makola", "Ragama", "Rikillagaskada",
  "Deraniyagala", "Welimada", "Menikhinna", "Kinniya",
  "Pottuvil", "Galaha", "Negombo", "Maruthamunai"
];

const Shop = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleBranchChange = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative min-h-screen bg-white">
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-md">
          <div className="bg-white rounded-lg p-6 w-4/5 sm:w-2/3 lg:w-1/2 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Select Your Nearest Branch</h3>
            <div className="grid grid-cols-3 gap-6">
              {branches.map((branch) => (
                <button
                  key={branch}
                  onClick={handleBranchChange}
                  className="px-6 py-4 bg-gray-200 text-gray-800 rounded-md hover:bg-green-500 hover:text-white transition mb-4 text-center"
                >
                  {branch}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto my-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">E-Shop</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 rounded-lg p-6 shadow-lg transition transform hover:scale-105 hover:shadow-xl"
            >
              <img src={product.image} alt={`Product ${product.id}`} className="w-full h-60 object-cover mb-4 rounded-lg" />
              <div className="text-center">
                <p className="text-lg font-bold text-gray-800">${product.price}</p>
                <p className={`text-sm font-medium ${product.available ? "text-green-500" : "text-red-500"}`}>
                  {product.available ? "Available" : "Out of Stock"}
                </p>
              </div>
              <div className="flex justify-center space-x-6 mt-4">
                <a
                  href={`https://wa.me/?text=I'm interested in this product.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg transition hover:scale-110 hover:shadow-green-500/50"
                >
                  <BsWhatsapp size={24} />
                </a>
                <button className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-lg transition hover:scale-110 hover:shadow-blue-500/50">
                  <FiShoppingCart size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
