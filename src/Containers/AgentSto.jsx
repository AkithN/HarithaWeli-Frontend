import React from "react";
import putty from "../Assets/putty.png";
import brickBond from "../Assets/Brick-Bond.png";
import tileBond from "../Assets/Tile.png";
import readyMixPlaster from "../Assets/Gray-plaster.png";

const AgentSto = () => {
  const products = [
    { name: "PUTTY", stock: 100, img: putty, color: "text-red-400" },
    { name: "BRICK BOND", stock: 50000, img: brickBond, color: "text-green-400" },
    { name: "TILE BOND", stock: 55000, img: tileBond, color: "text-green-400" },
    { name: "READY MIX PLASTER", stock: 65000, img: readyMixPlaster, color: "text-green-400" },
    { name: "PUTTY", stock: 20000, img: putty, color: "text-blue-400" },
    { name: "BRICK BOND", stock: 15000, img: brickBond, color: "text-yellow-400" },
    { name: "TITLE BOND", stock: 30000, img: tileBond, color: "text-purple-400" },
    { name: "READY MIX PLASTER", stock: 25000, img: readyMixPlaster, color: "text-pink-400" },
    { name: "BRICK BOND", stock: 18000, img: putty, color: "text-orange-400" },
    { name: "TILE BOND", stock: 22000, img: brickBond, color: "text-teal-400" },
    { name: "PUTTY", stock: 28000, img: tileBond, color: "text-cyan-400" },
    { name: "READY MIX PLASTER", stock: 32000, img: readyMixPlaster, color: "text-gray-400" },
    
  ];

  return (
    <div className="flex-1 p-12 bg-[#10172F] min-h-screen text-white">
      {/* Product Stock Section */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#0A1025] p-4 rounded-lg shadow transform transition-transform hover:-translate-y-2 hover:shadow-lg relative overflow-hidden"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-20 h-20 mx-auto mb-4 object-contain"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className={`text-sm ${product.color}`}>Available Stock</p>
              <p className={`font-bold text-lg ${product.color}`}>{product.stock}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentSto;
