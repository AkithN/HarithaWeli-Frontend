import React from "react";
import {
  DashboardOutlined,
  PhoneOutlined,
  ShoppingOutlined,
  TeamOutlined,
  DatabaseOutlined,
  FileTextOutlined,
  GlobalOutlined,
  UserOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  MailOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const AdminSideBar = () => {
  return (
    <div className="bg-[#0A1025] h-screen w-80 py-10 px-10 text-white flex flex-col justify-between">
      <div>
        <ul className="space-y-6">
        <li className="flex items-center gap-3 cursor-pointer hover:text-red-500">
            <DashboardOutlined className="text-xl" />
            Dashboard
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:text-red-500">
            <PhoneOutlined className="text-xl" />
            Call Center
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:text-red-500">
            <ShoppingOutlined className="text-xl" />
            Order
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:text-red-500">
            <TeamOutlined className="text-xl" />
            User Role
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:text-red-500">
            <DatabaseOutlined className="text-xl" />
            Stock
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:text-red-500">
            <FileTextOutlined className="text-xl" />
            Report
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:text-red-500">
            <GlobalOutlined className="text-xl" />
            Web
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:text-red-500">
            <UserOutlined className="text-xl" />
            Manage
          </li>
        </ul>
      </div>

      {/* BOTTOM MENU */}
      <div>
        <ul className="space-y-6">
          <li className="flex items-center gap-3 cursor-pointer hover:text-red-500">
            <SettingOutlined className="text-xl" />
            Settings
          </li>

          {/* Separator Line */}
          <div className="border-t border-gray-600 my-3"></div>

          <li className="flex items-center gap-3 cursor-pointer hover:text-red-500">
            <QuestionCircleOutlined className="text-xl" />
            Help
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:text-red-500">
            <MailOutlined className="text-xl" />
            Contact us
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:text-red-500">
            <LogoutOutlined className="text-xl" />
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSideBar
