import React from 'react';
import AdminNavbar from '../Components/AdminNavbar';
import AdminSideBar from '../Components/AdminSideBar';
import AdminDash from '../Containers/AdminDash';

const AdminDashboard = () => {
  return (
    <div className="flex mt-20">
      <AdminSideBar />

      <div className="flex flex-col w-full">
        <AdminNavbar />

        <div >
          <AdminDash />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;