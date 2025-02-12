import React, { useState } from "react";

const locations = [
  { id: 1, name: "Kadawatha", address: "132/1, Kandy Road, Mahara, Kadawatha.", lat: 6.988000, lng: 79.937241 },
  { id: 2, name: "Makola", address: "329/3 Makola Rd, Kiribathgoda.", lat: 6.9789369, lng: 79.93827 },
  { id: 3, name: "Ragama", address: "188/A Mahabage Road, Ragama.", lat: 7.027731, lng: 79.914352 },
  { id: 4, name: "Rikillagaskada", address: "19, Makuruppa Road, Rikillagaskada.", lat: 7.146344, lng: 80.786652 },
  { id: 5, name: "Deraniyagala", address: "256/2B, Sirisaranankara Mawatha, Deraniyagala.", lat: 6.929565, lng: 80.341515 },
  { id: 6, name: "Welimada", address: "Ambagasdowa, Welimada.", lat: 6.927420, lng: 80.895561 },
  { id: 7, name: "Menikhinna", address: "No.20, Narampanawa Road, Menikhinna.", lat: 7.320008, lng: 80.701759 },
  { id: 8, name: "Kinniya", address: "No:236, Main Street, Kuttikkarach, Kinniya.", lat: 8.4833, lng: 81.2333 },
  { id: 9, name: "Pottuvil", address: "Main Street, Pottuvil 04.", lat: 6.8814, lng: 81.8244 },
  { id: 10, name: "Galaha", address: "No.149/01, Nillamba, Galaha.", lat: 7.1833, lng: 80.6833 },
  { id: 11, name: "Negombo", address: "No:104/C, Chilaw Rd, Daluwakotuwa, Kochchikade.", lat: 7.2083, lng: 79.8358 },
  { id: 12, name: "Maruthamunai", address: "Main Street, Maruthamunai, Periyaneelavanai – 02(M.D).", lat: 7.3833, lng: 81.8500 },
  { id: 13, name: "Baddegama", address: "Hewagewatta, Baddegama Road, Gonapinuwala.", lat: 6.1167, lng: 80.1833 },
  { id: 14, name: "Trincomalee", address: "No:45/10, Up Road, Selwanayagapuram, Trincomalee.", lat: 8.5667, lng: 81.2333 },
  { id: 15, name: "Hatton", address: "No. 64 Dunbar Road, Hatton.", lat: 6.8914, lng: 80.5956 },
  { id: 16, name: "Mannar", address: "Alakkadi Vely, Andankulam, Mannar.", lat: 8.9833, lng: 79.9000 },
  { id: 17, name: "Anuradhapura", address: "Asoka Building, 1st Floor, Dahaiyagama Junction, Anuradhapura.", lat: 8.3114, lng: 80.4037 },
  { id: 18, name: "Mihintale", address: "No:06, Pola Para, Mihintale.", lat: 8.3500, lng: 80.5000 },
  { id: 19, name: "Pujapitiya", address: "No.254/B, Bokkawela Road, Pujapitiya.", lat: 7.3833, lng: 80.5667 },
  { id: 20, name: "Kalutara", address: "No.75, Galle Road, Kalutara North.", lat: 6.5833, lng: 79.9647 },
];
const Locations = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const initialLocations = 3;

  const displayedLocations = showAll ? locations : locations.slice(0, initialLocations);

  return (
    <section className="max-w-7xl mx-auto py-12 px-6">
      <hr className="border-gray-300 mb-6" />
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-center flex-1 mb-6 rounded-md ">OUR LOCATIONS</h2>
        {!showAll && (
          <button onClick={() => setShowAll(true)} className="text-green-600 hover:text-green-800 font-semibold">
            View All
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedLocations.map((location) => (
          <div
            key={location.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer border-l-4 border-green-500"
          >
            <h3 className="text-xl font-semibold text-green-700">{location.name}</h3>
            <p className="text-gray-600">{location.address}</p>
            <button
              onClick={() => setSelectedLocation(location)}
              className="mt-2 text-blue-500 hover:underline font-medium"
            >
              View on Map
            </button>
          </div>
        ))}
      </div>
      {showAll && (
        <div className="text-center mt-6">
          <button onClick={() => setShowAll(false)} className="text-red-600 hover:text-red-800 font-semibold">
            Show Less
          </button>
        </div>
      )}
      {selectedLocation && (
        <div className="mt-10 w-full h-96 shadow-lg rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            src={`https://www.google.com/maps?q=${selectedLocation.lat},${selectedLocation.lng}&output=embed`}
            allowFullScreen
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default Locations;
