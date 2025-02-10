import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Header1 from "../Assets/Header1.jpg";
import Header2 from "../Assets/Header2.jpg";
import Header3 from "../Assets/Header3.jpg";
import TileImage from "../Assets/1.png"; // Import the tile image

// Sample slide data
const slides = [
  {
    id: 1,
    title: "Canvas Sneaker",
    description: "Suspendisse sodales vestibulum augue, eget suscipit lectus euismod vitae.",
    image: Header1,
  },
  {
    id: 2,
    title: "Sport Running Shoes",
    description: "Best quality running shoes for maximum performance and comfort.",
    image: Header2,
  },
  {
    id: 3,
    title: "Classic Leather Sneakers",
    description: "Elegant leather sneakers for a stylish and comfortable experience.",
    image: Header3,
  },
];

const HeroSection = () => {
  const [animateCubes, setAnimateCubes] = useState(true);
  

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-r from-green-100 via-green-250 to-green-00">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full bg-opacity-30 backdrop-blur-lg" />
      </div>

      {/* Inline Tailwind Animation for Floating Cubes and Tile Background */}
      <style>
        {`
          @keyframes floating1 {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
            100% { transform: translateY(0) rotate(360deg); }
          }
          @keyframes floating2 {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(20px) rotate(180deg); }
            100% { transform: translateY(0) rotate(360deg); }
          }
          @keyframes floating3 {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(180deg); }
            100% { transform: translateY(0) rotate(360deg); }
          }
          @keyframes tileBackground {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      {/* Tile Background Animation */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-cover bg-no-repeat opacity-10 animate-[tileBackground_30s_linear_infinite]"
        style={{ backgroundImage: `url(${TileImage})`, backgroundPosition: "center", backgroundSize: "contain" }}
      />
      
      {/* Floating Cubes Animation */}
      <div
        className={`absolute top-1/4 left-1/3 w-40 h-40 bg-green-800 opacity-70 transform rotate-12 ${animateCubes ? "animate-[floating1_4s_ease-in-out_infinite]" : ""}`}
      />
      <div
        className={`absolute bottom-1/4 right-1/4 w-32 h-32 bg-green-600 opacity-60 transform rotate-45 ${animateCubes ? "animate-[floating2_4s_ease-in-out_infinite]" : ""}`}
      />
      <div
        className={`absolute top-1/3 right-1/3 w-24 h-24 bg-green-500 opacity-50 transform rotate-30 ${animateCubes ? "animate-[floating3_4s_ease-in-out_infinite]" : ""}`}
      />

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="max-w-7xl w-full relative"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex items-center">
              <div className="w-1/2 space-y-4 animate-fade-in">
                <h4 className="text-gray-600 text-lg">Limited time offer!</h4>
                <h1 className="text-5xl font-bold text-black">{slide.title}</h1>
                <p className="text-gray-600">{slide.description}</p>
                <button className="border-2 border-[#1f9d55] text-black px-6 py-2 flex items-center gap-2 mt-4 hover:bg-[#1f9d55] hover:text-white transition animate-bounce">
                  BUY NOW <HiArrowNarrowRight className="text-lg" />
                </button>
              </div>
              <div className="w-1/2 flex justify-end animate-slide-in">
                <img src={slide.image} alt={slide.title} className="w-[500px] object-contain" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="custom-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/50 text-white p-3 rounded-full hover:bg-gray-900 transition animate-fade-in">
        <FaChevronLeft size={20} />
      </button>
      <button className="custom-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/50 text-white p-3 rounded-full hover:bg-gray-900 transition animate-fade-in">
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default HeroSection;
