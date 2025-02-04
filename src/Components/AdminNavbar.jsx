import React from "react";
import { UserOutlined, BellOutlined, CheckCircleOutlined } from "@ant-design/icons";
import logo from "../Assets/logo.png";
import avatar from "../Assets/avatar.jpg";

const AdminNavbar = () => {
  return (
    <nav className="bg-[#0A1025] text-white px-6 py-5 flex items-center justify-between shadow-lg fixed top-0 left-0 w-full">
      <div className="flex items-center gap-40">
        <img src={logo} alt="Logo" className="h-15 w-auto px-10" />
        
        <span className="text-lg font-semibold flex items-center gap-2">
          <UserOutlined className="text-xl" />
          SUPER ADMIN
        </span>
      </div>

      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2 text-sm">
          <CheckCircleOutlined className="text-lg" />
          <span>Live Status</span>
          <span>10:00 PM</span>
        </div>

        <BellOutlined className="text-xl cursor-pointer" />

        <img
          src={ avatar }
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-gray-500"
        />
      </div>
    </nav>
  );
};

export default AdminNavbar;
