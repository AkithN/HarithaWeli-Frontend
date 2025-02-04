import React from 'react';
import putty from '../Assets/putty.png';
import brickBond from '../Assets/Brick-Bond.png';
import tileBond from '../Assets/Tile.png';
import readyMixPlaster from '../Assets/Gray-plaster.png';

const AdminDash = () => {
  const stats = [
    { title: 'Monthly Sales', value: 'LKR 100000', color: 'text-green-400', icon: '🛒' },
    { title: 'Today Sales', value: 'LKR 10000', color: 'text-red-400', icon: '📉' },
    { title: 'Visitors', value: '---', color: 'text-green-400', icon: '👥' },
    { title: 'Refunded', value: 'LKR 10000', color: 'text-red-400', icon: '🔄' },
  ];

  const products = [
    { name: 'PUTTY', stock: 100, img: putty, color: 'text-red-400' },
    { name: 'BRICK BOND', stock: 50000, img: brickBond, color: 'text-green-400' },
    { name: 'TILE BOND', stock: 55000, img: tileBond, color: 'text-green-400' },
    { name: 'READY MIX PLASTER', stock: 65000, img: readyMixPlaster, color: 'text-green-400' },
  ];

  return (
    <div className="flex-1 p-12 bg-[#10172F] min-h-screen text-white">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#0A1025] p-4 rounded-lg shadow transform transition-transform hover:-translate-y-2 hover:shadow-lg"
          >
            <div className={`${stat.color} text-lg mb-2`}>{stat.icon} {stat.title}</div>
            <div className="text-2xl font-bold">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Product Stock Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#0A1025] p-4 rounded-lg shadow transform transition-transform hover:-translate-y-2 hover:shadow-lg"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-24 h-24 mb-4 mx-auto object-contain"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className={`${product.color} text-sm`}>Available Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDash;
