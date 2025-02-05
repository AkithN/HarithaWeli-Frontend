import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BrickBond from "../Assets/Brick-Bond.png";
import GrayPlaster from "../Assets/Clay-plaster.jpeg";
import TileAdhesive from "../Assets/Clay-plaster.jpeg";
import WallPutty from "../Assets/Waterproofing.jpeg";
import Clay1 from "../Assets/Clay-plaster.jpeg";
import Clay2 from "../Assets/Clay-plaster.jpeg";

const products = [
  { id: 1, name: "Brick-Bond", image: BrickBond },
  { id: 2, name: "Gray- Plaster", image: GrayPlaster },
  { id: 3, name: "Tile adhesive", image: TileAdhesive },
  { id: 4, name: "Wall-putty", image: WallPutty },
  { id: 5, name: "Clay1", image: Clay1 },
  { id: 6, name: "Clay2", image: Clay2 },
];

const ProductSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-semibold mb-6">PRODUCT</h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="flex flex-col items-center">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full group cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-60 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="text-md font-semibold mt-3">{product.name}</h3>
            <button className="border-2 border-green-500 text-green-500 px-4 py-1 mt-2 rounded-full hover:bg-green-500 hover:text-white transition">
              SHOP NOW
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductSection;
