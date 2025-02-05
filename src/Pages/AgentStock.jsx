import React from "react";
import AdminNavbar from "../Components/AdminNavbar";
import AdminSideBar from "../Components/AdminSideBar";
import AgentSto from "../Containers/AgentSto"; // ✅ Ensure correct import

const AgentStock = () => {
  return (
    <div className="flex mt-20">
      <AdminSideBar />

      <div className="flex flex-col w-full">
        <AdminNavbar />

        <div className="ml-0 mt-0">
          <AgentSto /> {/* ✅ Renders correctly now */}
        </div>
      </div>
    </div>
  );
};

export default AgentStock;
