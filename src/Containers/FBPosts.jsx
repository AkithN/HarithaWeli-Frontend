import React from "react";
import FB1 from "../Assets/Harithaweli1.jpg"; 
import FB2 from "../Assets/Harithaweli2.jpg";
import FB3 from "../Assets/Harithaweli3.jpg";

const featuredItems = [
  {
    id: 1,
    title: "adfsfdsfadsfdsfds",
    image: FB1,
  },
  {
    id: 2,
    title: "sdafdsafdsfdsafsdf",
    image: FB2,
  },
  {
    id: 3,
    title: "afdsafsfdsfsdfsafsfsa",
    image: FB3,
  },
];

const FBPosts = () => {
  return (
    <section className="max-w-7xl mx-auto py-10 px-4">
      <hr className="border-gray-300 mb-6" />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
        {featuredItems.map((item) => (
          <div 
            key={item.id} 
            className="relative overflow-hidden bg-gray-100 shadow-md rounded-lg group cursor-pointer"
          >
            {/* Image with Hover Zoom Effect */}
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-90 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />

            {/* Overlay with Text on Hover */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FBPosts;
