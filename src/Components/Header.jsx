import React from "react";
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

const slides = [
  {
    id: 1,
    title: "Canvas Sneaker",
    description:
      "Suspendisse sodales vestibulum augue, eget suscipit lectus euismod vitae.",
    image: Header1,
  },
  {
    id: 2,
    title: "Sport Running Shoes",
    description:
      "Best quality running shoes for maximum performance and comfort.",
    image: Header2,
  },
  {
    id: 3,
    title: "Classic Leather Sneakers",
    description:
      "Elegant leather sneakers for a stylish and comfortable experience.",
    image: Header3,
  },
];

const HeroSection = () => {
  return (
    <div className=" lg:h-[60vh] flex items-center justify-center px-10 relative">
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
              {/* Left Content */}
              <div className="w-1/2 space-y-4">
                <h4 className="text-gray-600 text-lg">Limited time offer!</h4>
                <h1 className="text-5xl font-bold text-black">{slide.title}</h1>
                <p className="text-gray-600">{slide.description}</p>

                {/* BUY NOW Button */}
                <button className="border-2 border-[#55C2C3] text-black px-6 py-2 flex items-center gap-2 mt-4 hover:bg-[#55C2C3] hover:text-white transition">
                  BUY NOW <HiArrowNarrowRight className="text-lg" />
                </button>
              </div>

              {/* Right Image */}
              <div className="w-1/2 flex justify-end">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-[500px] object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="custom-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/50 text-white p-3 rounded-full hover:bg-gray-900 transition">
        <FaChevronLeft size={20} />
      </button>
      <button className="custom-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/50 text-white p-3 rounded-full hover:bg-gray-900 transition">
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default HeroSection;
