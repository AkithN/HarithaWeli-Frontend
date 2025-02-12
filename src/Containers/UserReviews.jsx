import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Sample user reviews data
const reviews = [
  {
    id: 1,
    name: "John Doe",
    description: "Excellent service! The product quality is outstanding, and customer support is very responsive.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    description: "Really loved the experience. Fast delivery and great eco-friendly packaging.",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Michael Smith",
    description: "The pricing is great, and the website is easy to navigate. Highly recommend!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Anna Williams",
    description: "Products are amazing and delivered on time! Will definitely shop again.",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const UserReviews = () => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i - rating < 1) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <section className="max-w-7xl mx-auto py-16 px-6 bg-gradient-to-b from-yellow-50 to-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 rounded-md text-center">
        WHAT OUR CUSTOMERS SAY
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg text-center transition-transform transform hover:scale-105">
            <img
              src={review.image}
              alt={review.name}
              className="w-20 h-30 rounded-full mb-4 border-4 border-yellow-400 shadow-md"
            />
            <h3 className="text-xl font-semibold text-gray-800 ">{review.name}</h3>
            <p className="text-gray-600 text-sm mt-2 px-4">
              "{review.description}"
            </p>
            <div className="flex mt-3">{renderStars(review.rating)}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default UserReviews;
