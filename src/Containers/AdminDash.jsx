import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import putty from "../Assets/putty.png";
import brickBond from "../Assets/Brick-Bond.png";
import tileBond from "../Assets/Tile.png";
import readyMixPlaster from "../Assets/Gray-plaster.png";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const AdminDash = () => {
  const stats = [
    { title: "Monthly Sales", value: "LKR 100000", color: "text-green-400", icon: "🛒" },
    { title: "Today Sales", value: "LKR 10000", color: "text-red-400", icon: "📉" },
    { title: "Visitors", value: "---", color: "text-green-400", icon: "👥" },
    { title: "Refunded", value: "LKR 10000", color: "text-red-400", icon: "🔄" },
  ];

  const products = [
    { name: "PUTTY", stock: 100, img: putty, color: "text-red-400" },
    { name: "BRICK BOND", stock: 50000, img: brickBond, color: "text-green-400" },
    { name: "TILE BOND", stock: 55000, img: tileBond, color: "text-green-400" },
    { name: "READY MIX PLASTER", stock: 65000, img: readyMixPlaster, color: "text-green-400" },
  ];

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales",
        data: [12000, 15000, 17000, 14000, 20000, 25000, 22000, 27000, 29000, 26000, 30000, 31000],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.4,
      },
      {
        label: "Receivable",
        data: [10000, 13000, 16000, 12000, 18000, 21000, 20000, 25000, 27000, 23000, 28000, 29000],
        borderColor: "#cbd5e1",
        backgroundColor: "rgba(203, 213, 225, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: "white" } },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      x: { ticks: { color: "white" } },
      y: { ticks: { color: "white" }, beginAtZero: true },
    },
  };

  return (
    <div className="flex-1 p-12 bg-[#10172F] min-h-screen text-white">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#0A1025] p-6 rounded-lg shadow transform transition-transform hover:-translate-y-2 hover:shadow-lg"
          >
            <div className={`${stat.color} text-lg mb-2 flex items-center`}>
              <span className="mr-2 text-2xl">{stat.icon}</span>
              {stat.title}
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Product Stock Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#0A1025] p-4 rounded-lg shadow transform transition-transform hover:-translate-y-2 hover:shadow-lg relative overflow-visible"
          >
            <img
              src={product.img}
              alt={product.name}
              className="absolute top-[-60px] left-1/4 transform -translate-x-1/2 w-34 h-34 object-contain"
            />
            <div className="pt-16">
              <h3 className="text-lg font-semibold text-right">{product.name}</h3>
              <p className={`text-right ${product.color} text-sm`}>Available Stock</p>
              <p className={`text-right ${product.color} font-bold text-lg`}>{product.stock}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-[#0A1025] p-6 rounded-lg shadow-lg w-full max-w-2.5xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Sales vs Receivable</h2>
        <div className="h-[300px]">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default AdminDash;


