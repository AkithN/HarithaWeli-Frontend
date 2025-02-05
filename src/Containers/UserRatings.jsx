import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const UserRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [ratings, setRatings] = useState([]);
  
  // Calculate the average rating
  const averageRating = ratings.length > 0 ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1) : "0.0";

  const handleRating = (rate) => {
    setRating(rate);
    setRatings([...ratings, rate]); // Store ratings
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 shadow-lg rounded-lg text-center">
      <h2 className="text-xl font-semibold text-gray-800">Rate Your Experience</h2>

      {/* Star Rating UI */}
      <div className="flex justify-center mt-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            size={30}
            className={`cursor-pointer transition-colors duration-300 ${
              (hover || rating) >= star ? "text-yellow-400" : "text-gray-300"
            }`}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => handleRating(star)}
          />
        ))}
      </div>

      {/* Display the selected rating */}
      <p className="mt-3 text-lg text-gray-700">
        {rating > 0 ? `You rated: ${rating} Stars` : "Click to rate"}
      </p>

      {/* Display the average rating */}
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-800">Average Rating</h3>
        <p className="text-2xl font-bold text-green-500">{averageRating} / 5</p>
      </div>
    </div>
  );
};

export default UserRating;
