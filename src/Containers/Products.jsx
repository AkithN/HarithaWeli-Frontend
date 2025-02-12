import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import BrickBond from "../Assets/BB-300x300.jpeg";
import GrayPlaster from "../Assets/Gray-plaster-300x300.jpeg";
import Tpl from "../Assets/TPL-300x300.jpeg";
import Tfm from "../Assets/T-FM-300x300.jpeg";
import ClayPlaster from "../Assets/Clay-plaster-300x300.jpeg";
import Terrazzo from "../Assets/Terrazzo-Floormix-300x300.jpeg";
import WhitePlaster from "../Assets/White-plaster-300x300.jpeg";
import TileAdhesive from "../Assets/TA-300x300.jpeg";
import WallPutty from "../Assets/Wall-putty-300x300.jpeg";
import ClayPutty from "../Assets/Clay-putty-300x300.jpeg";
import Tm from "../Assets/TM-300x300.jpeg";
import Wpp from "../Assets/WP-P-300x300.jpeg";

const products = [
  { id: 1, name: "Brick Bond", image: BrickBond },
  { id: 2, name: "Gray Plaster", image: GrayPlaster },
  { id: 3, name: "Titanium Plaster", image: Tpl },
  { id: 4, name: "Titanium Floor Mix", image: Tfm },
  { id: 5, name: "Clay Plaster", image: ClayPlaster },
  { id: 6, name: "Terrazzo Floor Mix", image: Terrazzo },
  { id: 7, name: "White Plaster", image: WhitePlaster },
  { id: 8, name: "Tile Mortar", image: Tm },
  { id: 9, name: "Tile Adhesive", image: TileAdhesive },
  { id: 10, name: "Wall Putty", image: WallPutty },
  { id: 11, name: "Clay Putty", image: ClayPutty },
  { id: 12, name: "Water Proofing", image: Wpp },
];

const ProductSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-10 px-4">
      <hr className="border-gray-300 mb-6" />
      <h2 className="text-3xl font-semibold mb-6 rounded-md text-center">PRODUCTS</h2>

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
            <h3 className="text-md font-semibold mt-3 text-center">{product.name}</h3>
            <Link to={`/productCal`}>
              <button className="border-2 border-green-500 text-green-500 px-10 py-1 mt-2 ml-20 rounded-full hover:bg-green-500 hover:text-white transition">
                Calculate
              </button>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductSection;
