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
    <section className="max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-2xl font-semibold text-center mb-6">What Our Customers Say</h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="flex flex-col items-center bg-yellow-50 p-6 shadow-lg rounded-lg text-center">
            <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full mb-4 border-2 border-green-500" />
            <h3 className="text-lg font-semibold">{review.name}</h3>
            <p className="text-gray-600 text-sm mt-2">{review.description}</p>
            <div className="flex mt-3">{renderStars(review.rating)}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default UserReviews;
