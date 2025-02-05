import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BrickBond from "../Assets/Brick-Bond.png";
import WallPutty from "../Assets/Clay-putty.jpeg";

const products = [
  {
    id: 1,
    name: "Brick Bond",
    image: BrickBond,
    colors: [],
  },
  {
    id: 2,
    name: "Wall Putty",
    image: WallPutty,
    colors: ["#FFFFFF", "#8B4513", "#808080", "#FFD700", "#A9A9A9", "#EEE8AA", "#000000", "#FF0000", "#008000", "#8B0000"],
  },
];

const tabs = ["TOP", "NEW IN"];

const TopProducts = () => {
  const [activeTab, setActiveTab] = useState("TOP");

  return (
    <section className="max-w-7xl mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-6 text-lg font-semibold">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-2 ${activeTab === tab ? "border-b-2 border-black text-black" : "text-gray-500"}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <button className="text-gray-500 hover:text-black">View All</button>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="flex flex-col items-center">
            <div className="border-2 border-gray-300 p-4 rounded-lg w-full relative group cursor-pointer transition-transform duration-300 hover:shadow-lg hover:border-black">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-contain transition-transform duration-300 group-hover:scale-105"
              />

              {product.colors.length > 0 && (
                <div className="absolute top-5 right-5 grid grid-cols-2 gap-1">
                  {product.colors.map((color, index) => (
                    <div key={index} className="w-5 h-5 rounded-full border border-gray-300" style={{ backgroundColor: color }}></div>
                  ))}
                </div>
              )}

              <div className="flex items-center mt-2 text-sm text-green-600 font-medium">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-1"></span> In stock
              </div>
            </div>
            <h3 className="text-md font-semibold mt-3">{product.name}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TopProducts;
