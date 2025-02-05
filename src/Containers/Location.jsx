import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

// Sample Location Data
const locations = [
  {
    id: 1,
    name: "Kadawatha",
    address: "132/1, Kandy Road, Mahara, Kadawatha.",
    mapLink: "https://www.google.com/maps?q=Kadawatha,Sri+Lanka",
  },
  {
    id: 2,
    name: "Makola",
    address: "329/3 Makola Rd, Kiribathgoda.",
    mapLink: "https://www.google.com/maps?q=Makola,Sri+Lanka",
  },
  {
    id: 3,
    name: "Ragama",
    address: "188/A Mahabage Road, Ragama.",
    mapLink: "https://www.google.com/maps?q=Ragama,Sri+Lanka",
  },
  {
    id: 4,
    name: "Rikillagaskada",
    address: "19, Makuruppa Road, Rikillagaskada.",
    mapLink: "https://www.google.com/maps?q=Rikillagaskada,Sri+Lanka",
  },
];

const Locations = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-6">
      {/* Heading */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900 flex items-center">
          <FaMapMarkerAlt className="text-red-500 mr-2" />
          Our Locations
        </h2>
        <a href="#" className="text-gray-600 hover:text-gray-900">View All</a>
      </div>

      {/* Location Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {locations.map((location) => (
          <div
            key={location.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 opacity-0 group-hover:opacity-20 transition duration-300"></div>
            <h3 className="text-xl font-semibold text-gray-900">{location.name}</h3>
            <p className="text-gray-600 mt-2">{location.address}</p>
            <a
              href={location.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-green-600 font-medium hover:underline"
            >
              View on Map →
            </a>
          </div>
        ))}
      </div>

      {/* Google Map Embed */}
      <div className="mt-12">
        <iframe
          className="w-full h-80 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126741.41932224966!2d79.86415568524607!3d6.927078903292552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2591b3d2076e3%3A0x6f8690aee17a0b6a!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1633065891921!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Locations;
