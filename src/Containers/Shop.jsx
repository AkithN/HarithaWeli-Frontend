import React, { useState } from 'react';
import Product1 from '../Assets/Brick-Bond.png';
import Product2 from '../Assets/Clay-plaster.jpeg';
import Product3 from '../Assets/Clay-putty.jpeg';
import Product4 from '../Assets/Gray-plaster.jpeg';
import Product5 from '../Assets/Gray-plaster.png';
import Product6 from '../Assets/Wall-putty.jpeg';

const products = [
  { id: 1, name: "Product 1", price: 10, image: Product1, branch: "Kadawatha" },
  { id: 2, name: "Product 2", price: 20, image: Product2, branch: "Makola" },
  { id: 3, name: "Product 3", price: 30, image: Product3, branch: "Ragama" },
  { id: 4, name: "Product 4", price: 40, image: Product4, branch: "Rikillagaskada" },
  { id: 5, name: "Product 5", price: 50, image: Product5, branch: "Deraniyagala" },
  { id: 6, name: "Product 6", price: 60, image: Product6, branch: "Welimada" },
];

const branches = [
  "Kadawatha", "Makola", "Ragama", "Rikillagaskada", 
  "Deraniyagala", "Welimada", "Menikhinna", "Kinniya",
  "Pottuvil", "Galaha", "Negombo", "Maruthamunai"
];

const Shop = () => {
  const [selectedBranch, setSelectedBranch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showPopup, setShowPopup] = useState(true);

  const handleBranchChange = (branch) => {
    setSelectedBranch(branch);
    setShowPopup(false);
    const filtered = products.filter((product) => product.branch === branch);
    setFilteredProducts(filtered);
  };

  return (
    <div className="relative">
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-md">
          <div className="bg-black bg-opacity-10 rounded-lg p-6 w-4/5 sm:w-2/3 lg:w-1/2 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">Select Your Nearest Branch</h3>
            <div className="grid grid-cols-3 gap-6">
              {branches.map((branch) => (
                <button
                  key={branch}
                  onClick={() => handleBranchChange(branch)}
                  className="px-6 py-4 bg-white bg-opacity-20 text-white rounded-md hover:bg-green-700 transition mb-4 text-center"
                >
                  {branch}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto my-5">
        <h2 className="text-3xl font-bold mb-6">E-Shop</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-4 text-center">
              <img src={product.image} alt={product.name} className="w-full h-80 object-cover mb-3 rounded" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;



