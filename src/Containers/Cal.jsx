import React, { useState, useEffect, useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js Components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Cal = () => {
  const [product, setProduct] = useState("");
  const [inches, setInches] = useState(0);
  const [quality, setQuality] = useState(1);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const productPrices = useMemo(
    () => ({
      "Gray Plaster": 10,
      "White Plaster": 20,
      "Clay Plaster": 30,
      "Titanium Plaster": 40,
      "Titanium": 50,
      "Terrazzo Floor-Mix": 60,
      "Wall Putty": 70,
      "Clay Putty": 80,
      "Tile Adhesive": 90,
      "Tile Mortar": 100,
      "Brick Bond": 110,
      "Water Proofing": 120,
    }),
    []
  );

  const qualityMultiplier = useMemo(
    () => ({
      1: 1,  // Low
      2: 1.5, // Medium
      3: 2,   // High
    }),
    []
  );

  useEffect(() => {
    const autoCalculateQuantity = () => (inches > 0 ? Math.ceil(inches / 10) : 1);

    const calculatePrice = () => {
      if (!product) return 0;
      const basePrice = productPrices[product] || 0;
      const calculatedQuantity = autoCalculateQuantity();
      setQuantity(calculatedQuantity);
      return basePrice * inches * qualityMultiplier[quality] * calculatedQuantity;
    };

    setTotalPrice(calculatePrice());
  }, [product, inches, quality, productPrices, qualityMultiplier]);

  // Function to Download Calculation Results
  const downloadResults = () => {
    const fileName = `Product_Calculation_${product.replace(/\s+/g, "_")}.txt`;
    const textData = `
      📊 Product Calculation Results
      -----------------------------------
      Product: ${product || "Not Selected"}
      Inches: ${inches}
      Quality: ${quality === 1 ? "Low" : quality === 2 ? "Medium" : "High"}
      Quantity: ${quantity}
      Total Price: $${totalPrice.toFixed(2)}
    `;

    const blob = new Blob([textData], { type: "text/plain" });
    const fileURL = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = fileURL;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Chart Data
  const chartData = {
    labels: [product || "Select a Product"],
    datasets: [
      {
        label: "Total Price ($)",
        data: [totalPrice],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white mt-40 shadow-lg rounded-xl border border-gray-200">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">📊 Product Calculator</h2>

      {/* Select Product */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-700 mb-2">Select Product:</label>
        <select
          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        >
          <option value="">Select a Product</option>
          {Object.keys(productPrices).map((prod) => (
            <option key={prod} value={prod}>
              {prod}
            </option>
          ))}
        </select>
      </div>

      {/* Select Inches (Number Input) */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-700 mb-2">📏 Enter Feets:</label>
        <input
          type="number"
          className="w-full p-2 border rounded mb-4"
          value={inches}
          onChange={(e) => setInches(Number(e.target.value))}
        />
      </div>

      {/* Select Quality (Slider) */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-700 mb-2">⭐ Select Quality:</label>
        <input
          type="range"
          className="w-full cursor-pointer"
          min="1"
          max="3"
          step="1"
          value={quality}
          onChange={(e) => setQuality(parseInt(e.target.value))}
        />
        <div className="flex justify-between text-gray-600 mt-2 text-sm">
          <span>Low</span>
          <span>Medium</span>
          <span>High</span>
        </div>
      </div>

      {/* Quantity & Price Display */}
      <div className="mt-6 bg-gray-100 p-6 rounded-lg">
        <div className="text-lg font-semibold text-gray-700">
          🏗 <span className="text-blue-600">Quantity:</span> {quantity}
        </div>
        <div className="text-xl font-semibold text-gray-900 mt-2">
          💰 Total Price: <span className="text-blue-600">LKR {totalPrice.toFixed(2)}</span>
        </div>
      </div>

      {/* Chart Display */}
      {product && (
        <div className="mt-8 bg-black p-6 rounded-xl">
          <h3 className="text-white text-lg font-semibold text-center">Cost Breakdown</h3>
          <div className="h-64">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      )}

      {/* Download Button */}
      <div className="mt-6 text-center">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md text-lg transition-transform transform hover:scale-105"
          onClick={downloadResults}
        >
          Download Your Full Results 📥
        </button>
      </div>
    </div>
  );
};

export default Cal;
