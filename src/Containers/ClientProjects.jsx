import React, { useState } from "react";
import project1 from "../Assets/project1.jpeg";
import project2 from "../Assets/project2.jpeg";
import project3 from "../Assets/project3.jpeg";
import finish1 from "../Assets/project4.jpg";

// Data for Ongoing and Finishing Sites
const ongoingProjects = [
  { image: project1, client: "Mr.Lakshan", location: "Haputale" },
  { image: project2, client: "Mr.Sachithra", location: "Kelaniya" },
  { image: project3, client: "Mr.Shanaka", location: "Panadura" },
];

const finishingProjects = [
  { image: finish1, client: "Ms. Nimalka", location: "Kandy" },
];

const ClientProjects = () => {
  const [selectedTab, setSelectedTab] = useState("ongoing"); // Default: Ongoing Sites

  // Decide which projects to show
  const projectsToShow = selectedTab === "ongoing" ? ongoingProjects : finishingProjects;

  return (
    <div className="h-auto p-10">
      {/* Tabs Navigation */}
      <div className="flex justify-center space-x-6 mb-6">
        <button
          className={`px-4 py-2 text-lg font-semibold rounded ${
            selectedTab === "ongoing" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelectedTab("ongoing")}
        >
          Ongoing Sites
        </button>
        <button
          className={`px-4 py-2 text-lg font-semibold rounded ${
            selectedTab === "finishing" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelectedTab("finishing")}
        >
          Finishing Sites
        </button>
      </div>

      {/* Projects Grid */}
      <h2 className="text-center text-2xl font-bold">
        {selectedTab === "ongoing" ? "Ongoing Sites" : "Finishing Sites"}
      </h2>

      <div className="flex justify-center gap-8 mt-6 flex-wrap">
        {projectsToShow.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden w-80">
            <img className="w-full h-auto object-cover" src={project.image} alt={project.client} />
            <div className="p-4">
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                {selectedTab === "ongoing" ? "Ongoing project" : "Finishing project"}
              </span>
              <h3 className="text-lg font-semibold mt-2">
                {project.client} – {project.location}
              </h3>
              <button className="mt-3 text-blue-500 hover:underline">View Gallery</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientProjects;
