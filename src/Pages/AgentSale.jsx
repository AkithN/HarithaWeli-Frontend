import React from 'react';
import AdminNavbar from '../Components/AdminNavbar';
import AdminSideBar from '../Components/AdminSideBar';
import AgentSaleDash from '../Containers/AgentSaleDash';

const AgentSaleDashboard = () => {
  return (
    <div className="flex mt-20">
      <AdminSideBar />

      <div className="flex flex-col w-full">
        <AdminNavbar />

        <div >
          <AgentSaleDash />
        </div>
      </div>
    </div>
  );
};

export default AgentSaleDashboard;