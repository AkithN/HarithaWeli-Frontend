import React, { useState } from "react";
import AboutImage from "../Assets/Aboutus.png";

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="max-w-7xl mx-auto py-12 px-6">
      <div className="bg-green-500 text-white text-xl font-semibold px-6 py-3 rounded-md">
        OUR SUSTAINABLE FOCUS
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 relative group">
          <img 
            src={AboutImage} 
            alt="Sustainability Focus" 
            className="w-full h-96 object-cover rounded-md shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute bottom-3 left-3 bg-gray-800 text-white text-sm px-3 py-1 rounded-md opacity-75">
            514 ✕ 400
          </span>
        </div>

        <div className="bg-white p-6 shadow-md rounded-md">
          <p className="text-gray-700 text-justify">
            At CEEDCES Lanka Holdings, we want to ensure that we are responsible 
            towards our community and the planet. Therefore, our aim is to offer 
            products that are technologically improved, modern, cutting edge, wastage 
            reduced and not only help our customers in saving money but offer great 
            value for money they’ve spent.
          </p>

          {showMore && (
            <p className="text-gray-700 mt-4 text-justify">
              We, as a company, are well aware of the abuse and misuse of resources 
              due to human activities that have put our planet in a precarious situation. 
              However, we are taking small steps towards a big change by introducing 
              eco-friendly products and reducing our carbon footprint.
            </p>
          )}

          <button 
            onClick={() => setShowMore(!showMore)}
            className="mt-4 bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition"
          >
            {showMore ? "SHOW LESS" : "READ MORE"}
          </button>
          
          <div className="w-full bg-gray-300 h-2 mt-4 rounded-full">
            <div 
              className={`h-2 bg-green-500 rounded-full transition-all duration-500 ${showMore ? "w-full" : "w-1/3"}`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
