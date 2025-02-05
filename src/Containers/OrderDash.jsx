import React from "react";

const OrderDash = () => {
  const stats = [
    { title: "Monthly Sales", value: "LKR 100000", color: "text-green-400", icon: "🛒" },
    { title: "Today Sales", value: "LKR 10000", color: "text-red-400", icon: "📉" },
    { title: "Visitors", value: "---", color: "text-green-400", icon: "👥" },
    { title: "Refunded", value: "LKR 10000", color: "text-red-400", icon: "🔄" },
  ];

  return (
    <div className="flex-5 p-12 bg-[#10172F] min-h-screen text-white mt-4">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </div>
  );
};

export default OrderDash;

