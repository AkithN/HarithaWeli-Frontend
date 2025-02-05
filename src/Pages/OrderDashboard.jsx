import React from 'react';
import AdminNavbar from '../Components/AdminNavbar';
import AdminSideBar from '../Components/AdminSideBar';
import OrderDash from '../Containers/OrderDash'; // Make sure this is the right import for your OrderDash component

const OrderDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <AdminSideBar />

      {/* Main Content */}
      <div className="flex flex-col w-full">
        {/* Navbar */}
        <AdminNavbar />

        {/* Order Dashboard Content */}
        <div className="p-6 bg-[#10172F] min-h-screen">
          <OrderDash />
        </div>
      </div>
    </div>
  );
};

export default OrderDashboard;
