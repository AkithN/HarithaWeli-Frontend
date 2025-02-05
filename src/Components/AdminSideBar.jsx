import React from "react";
import { Link } from "react-router-dom";
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
          <li>
            <Link
              to="/admin"
              className="flex items-center gap-3 cursor-pointer hover:text-red-500"
            >
              <DashboardOutlined className="text-xl" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/call-center"
              className="flex items-center gap-3 cursor-pointer hover:text-red-500"
            >
              <PhoneOutlined className="text-xl" />
              Call Center
            </Link>
          </li>
          <li>
            <Link
              to="/order"
              className="flex items-center gap-3 cursor-pointer hover:text-red-500"
            >
              <ShoppingOutlined className="text-xl" />
              Order
            </Link>
          </li>
          <li>
            <Link
              to="/user-role"
              className="flex items-center gap-3 cursor-pointer hover:text-red-500"
            >
              <TeamOutlined className="text-xl" />
              User Role
            </Link>
          </li>
          <li>
            <Link
              to="/stock"
              className="flex items-center gap-3 cursor-pointer hover:text-red-500"
            >
              <DatabaseOutlined className="text-xl" />
              Stock
            </Link>
          </li>
          <li>
            <Link
              to="/report"
              className="flex items-center gap-3 cursor-pointer hover:text-red-500"
            >
              <FileTextOutlined className="text-xl" />
              Report
            </Link>
          </li>
          <li>
            <Link
              to="/web"
              className="flex items-center gap-3 cursor-pointer hover:text-red-500"
            >
              <GlobalOutlined className="text-xl" />
              Web
            </Link>
          </li>
          <li>
            <Link
              to="/manage"
              className="flex items-center gap-3 cursor-pointer hover:text-red-500"
            >
              <UserOutlined className="text-xl" />
              Manage
            </Link>
          </li>
        </ul>
      </div>

      {/* BOTTOM MENU */}
      <div>
        <ul className="space-y-6">
          <li>
            <Link
              to="/settings"
              className="flex items-center gap-3 cursor-pointer hover:text-red-500"
            >
              <SettingOutlined className="text-xl" />
              Settings
            </Link>
          </li>

          {/* Separator Line */}
          <div className="border-t border-gray-600 my-3"></div>

          <li>
            <Link
              to="/help"
              className="flex items-center gap-3 cursor-pointer hover:text-red-500"
            >
              <QuestionCircleOutlined className="text-xl" />
              Help
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center gap-3 cursor-pointer hover:text-red-500"
            >
              <MailOutlined className="text-xl" />
              Contact us
            </Link>
          </li>
          <li>
            <Link
              to="/logout"
              className="flex items-center gap-3 cursor-pointer hover:text-red-500"
            >
              <LogoutOutlined className="text-xl" />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSideBar;
