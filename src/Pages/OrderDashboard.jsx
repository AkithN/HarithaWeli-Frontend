import React from 'react';
import AdminNavbar from '../Components/AdminNavbar';
import AdminSideBar from '../Components/AdminSideBar';
import OrderDash from '../Containers/OrderDash';

const OrderDashboard = () => {
  return (
    <div className="flex mt-20">
      <AdminSideBar />

      <div className="flex flex-col w-full">
        <AdminNavbar />

        <div >
          <OrderDash />
        </div>
      </div>
    </div>
  );
};

export default OrderDashboard;