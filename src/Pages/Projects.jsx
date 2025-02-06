import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ClientProjects from "../Containers/ClientProjects";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <ClientProjects />
      <Footer />
    </div>
  );
};

export default Projects;
