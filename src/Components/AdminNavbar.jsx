import React from "react";
import { UserOutlined, BellOutlined, CheckCircleOutlined } from "@ant-design/icons";
import avatar from "../Assets/avatar.jpg";

const AdminNavbar = () => {
  return (
    <nav className="bg-[#262626] text-white px-6 py-4 flex items-center justify-between shadow-lg 
                    fixed top-3 right-[-675px] transform -translate-x-1/2 w-[90%] rounded-full z-50 h-14">

      {/* Left Side */}
      <div className="flex items-center gap-6 px-8">
        <span className="text-lg font-semibold flex items-center gap-2">
          <UserOutlined className="text-xl" />
          SUPER ADMIN
        </span>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6 px-8">
        <div className="flex items-center gap-2 text-sm">
          <CheckCircleOutlined className="text-lg" />
          <span>Live Status</span>
          <span>10:00 PM</span>
        </div>

        <BellOutlined className="text-xl cursor-pointer" />

        <img src={avatar} alt="Profile" className="w-10 h-10 rounded-full border-2 border-gray-500" />
      </div>

    </nav>
  );
};

export default AdminNavbar;
