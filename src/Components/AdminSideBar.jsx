import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MdDashboard, MdPhone, MdPeople, MdInventory, MdAssessment, MdWeb,
  MdManageAccounts, MdSettings, MdLogout, MdShoppingCart, MdAttachMoney,
  MdStar, MdReceiptLong, MdPerson, MdBusiness
} from "react-icons/md";

// Importing the logo image from src/Assets folder
import logo from '../Assets/logo.png';

const AdminSidebar = () => {
  const location = useLocation();
  const [showWebSubMenu, setShowWebSubMenu] = useState(false);
  const [showPeopleSubMenu, setShowPeopleSubMenu] = useState(false);

  return (
    <div className="h-[90vh] w-20 bg-[#144c29] text-white flex flex-col items-center py-4 space-y-4 shadow-lg rounded-t-2xl rounded-b-2xl relative">
      {/* Logo at the top of the sidebar */}
      <div className="p-2 rounded-full">
        <img src={logo} alt="Company Logo" className="h-10 w-10 object-contain" />
      </div>

      {/* Sidebar Menu Items */}
      <nav className="flex flex-col space-y-3">
        <SidebarIcon to="/admin" icon={<MdDashboard size={22} />} location={location} />
        <SidebarIcon to="/admin" icon={<MdPhone size={22} />} location={location} />
        <SidebarIcon to="/order" icon={<MdShoppingCart size={22} />} location={location} />

        {/* People Icon with Hover Submenu */}
        <div
          className="relative"
          onMouseEnter={() => setShowPeopleSubMenu(true)}
          onMouseLeave={() => setShowPeopleSubMenu(false)}
        >
          <SidebarIcon to="/user-role" icon={<MdPeople size={22} />} location={location} />

          {/* Submenu for People */}
          {showPeopleSubMenu && (
            <div className="absolute left-full top-0 bg-[#144c29] p-2 rounded-lg shadow-lg flex flex-col space-y-2 w-36">
              <SubMenuIcon to="/sales-representative" icon={<MdPerson />} label="Sales Rep" />
              <SubMenuIcon to="/agent" icon={<MdBusiness />} label="Agent" />
            </div>
          )}
        </div>

        <SidebarIcon to="/stock" icon={<MdInventory size={22} />} location={location} />
        <SidebarIcon to="/report" icon={<MdAssessment size={22} />} location={location} />

        {/* Web Icon with Hover Submenu */}
        <div
          className="relative"
          onMouseEnter={() => setShowWebSubMenu(true)}
          onMouseLeave={() => setShowWebSubMenu(false)}
        >
          <SidebarIcon to="/web" icon={<MdWeb size={22} />} location={location} />

          {/* Submenu for Web */}
          {showWebSubMenu && (
            <div className="absolute left-full top-0 bg-[#144c29] p-2 rounded-lg shadow-lg flex flex-col space-y-2 w-36">
              <SubMenuIcon to="/dashboard" icon={<MdDashboard />} label="Dashboard" />
              <SubMenuIcon to="/product" icon={<MdShoppingCart />} label="Product" />
              <SubMenuIcon to="/order" icon={<MdInventory />} label="Order" />
              <SubMenuIcon to="/sales" icon={<MdAttachMoney />} label="Sales" />
              <SubMenuIcon to="/reviews" icon={<MdStar />} label="Reviews" />
              <SubMenuIcon to="/invoice" icon={<MdReceiptLong />} label="Invoice" />
            </div>
          )}
        </div>

        <SidebarIcon to="/manage" icon={<MdManageAccounts size={22} />} location={location} />
      </nav>

      {/* Bottom Section */}
      <div className="flex flex-col space-y-3 mt-auto">
        <SidebarIcon to="/settings" icon={<MdSettings size={22} />} location={location} extraClass="mb-12" />
        <SidebarIcon to="/logout" icon={<MdLogout size={22} />} location={location} />
      </div>
    </div>
  );
};

const SidebarIcon = ({ to, icon, location, extraClass = "" }) => {
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`text-xl p-2 rounded-full transition hover:bg-green-600 flex justify-center items-center 
                ${isActive ? "bg-green-500 text-black" : "text-white"} ${extraClass}`}
    >
      {icon}
    </Link>
  );
};

// Submenu Item Component
const SubMenuIcon = ({ to, icon, label }) => {
  return (
    <Link
      to={to}
      className="flex items-center space-x-1 text-white hover:text-green-400 transition text-sm"
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

export default AdminSidebar;
