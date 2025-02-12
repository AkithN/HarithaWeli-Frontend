import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import AboutImage1 from "../Assets/working.jpg";
import AboutImage2 from "../Assets/ciment1.jpg";
import AboutImage3 from "../Assets/plan.jpg";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate("/about");
  };

  return (
    <section className="max-w-7xl mx-auto py-12 px-6">
      <div className="bg-green-500 text-white text-xl font-semibold px-6 py-3 rounded-md">
        OUR SUSTAINABLE FOCUS
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="w-full h-96"
          >
            <SwiperSlide>
              <img
                src={AboutImage1}
                alt="Sustainability 1"
                className="w-full h-96 object-cover rounded-md shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={AboutImage2}
                alt="Sustainability 2"
                className="w-full h-96 object-cover rounded-md shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={AboutImage3}
                alt="Sustainability 3"
                className="w-full h-96 object-cover rounded-md shadow-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="bg-white px-6 shadow-md rounded-md">
          <p className="text-gray-700 text-justify">
            At CEEDCES Lanka Holdings, we want to ensure that we are responsible
            towards our community and the planet. Therefore, our aim is to offer
            products that are technologically improved, modern, cutting edge,
            wastage reduced and not only help our customers in saving money but
            offer great value for money they’ve spent.We, as a company, are well
            aware of the abuse and misuse of resources due to human activities
            that have put our planet in a precarious situation. However, we are
            taking small steps towards a big change by introducing eco-friendly
            products and reducing our carbon footprint.
          </p>

          <button
            onClick={handleShowMore}
            className="mt-4 bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition"
          >
            SHOW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
