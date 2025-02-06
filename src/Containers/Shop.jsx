import React from 'react';
import Product1 from '../Assets/Brick-Bond.png';
import Product2 from '../Assets/Clay-plaster.jpeg';
import Product3 from '../Assets/Clay-putty.jpeg';
import Product4 from '../Assets/Gray-plaster.jpeg';
import Product5 from '../Assets/Gray-plaster.png';
import Product6 from '../Assets/Wall-putty.jpeg';
import Product7 from '../Assets/Brick-Bond.png';
import Product8 from '../Assets/Clay-plaster.jpeg';
import Product9 from '../Assets/Clay-putty.jpeg';
import Product10 from '../Assets/Gray-plaster.jpeg';
import Product11 from '../Assets/Gray-plaster.png';
import Product12 from '../Assets/Wall-putty.jpeg';

const products = [
  { id: 1, name: "Product 1", price: 10, image: Product1 },
  { id: 2, name: "Product 2", price: 20, image: Product2 },
  { id: 3, name: "Product 3", price: 30, image: Product3 },
  { id: 4, name: "Product 4", price: 40, image: Product4 },
  { id: 5, name: "Product 5", price: 50, image: Product5 },
  { id: 6, name: "Product 6", price: 60, image: Product6 },
  { id: 7, name: "Product 7", price: 70, image: Product7 },
  { id: 8, name: "Product 8", price: 80, image: Product8 },
  { id: 9, name: "Product 9", price: 90, image: Product9 },
  { id: 10, name: "Product 10", price: 100, image: Product10 },
  { id: 11, name: "Product 11", price: 110, image: Product11 },
  { id: 12, name: "Product 12", price: 120, image: Product12 },
];

const Shop = () => {
  return (
    <div className=" max-w-6xl mx-auto my-5">
      <h2 className="text-3xl font-bold mb-6" >E-Shop</h2>
      <div className="grid grid-cols-2 md:grid-cols-3  gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4 text-center">
            <img src={product.image} alt={product.name} className="w-full h-80 object-cover mb-3 rounded" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
