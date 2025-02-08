import React, { useState, useEffect } from "react";

const Cal = () => {
  const [product, setProduct] = useState("");
  const [inches, setInches] = useState(0);
  const [quality, setQuality] = useState("low");
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const productPrices = {
    product1: 10,
    product2: 20,
    product3: 30,
  };

  const qualityMultiplier = {
    low: 1,
    medium: 1.5,
    high: 2,
  };

  useEffect(() => {
    const autoCalculateQuantity = () => {
      return inches > 0 ? Math.ceil(inches / 10) : 1;
    };

    const calculatePrice = () => {
      if (!product) return 0;
      const basePrice = productPrices[product] || 0;
      const calculatedQuantity = autoCalculateQuantity();
      setQuantity(calculatedQuantity);
      return basePrice * inches * qualityMultiplier[quality] * calculatedQuantity;
    };

    setTotalPrice(calculatePrice());
  }, [product, inches, quality]);

  return (
    <div className="p-6 max-w-lg mx-auto my-10 bg-white mt-20 shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Product Calculator</h2>

      <label className="block mb-2">Select Product:</label>
      <select
        className="w-full p-2 border rounded mb-4"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      >
        <option value="">Select</option>
        <option value="product1">Product 1</option>
        <option value="product2">Product 2</option>
        <option value="product3">Product 3</option>
      </select>

      <label className="block mb-2">Enter Feet:</label>
      <input
        type="number"
        className="w-full p-2 border rounded mb-4"
        value={inches}
        onChange={(e) => setInches(Number(e.target.value))}
      />

      <label className="block mb-2">Select Quality:</label>
      <select
        className="w-full p-2 border rounded mb-4"
        value={quality}
        onChange={(e) => setQuality(e.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <div className="text-lg font-semibold mt-4">
        Quantity: {quantity}
      </div>

      <div className="text-lg font-semibold mt-4">
        Total Price: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default Cal;
