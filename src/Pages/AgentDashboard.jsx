import React from 'react';
import AdminNavbar from '../Components/AdminNavbar';
import AdminSideBar from '../Components/AdminSideBar';
import AgentDash from '../Containers/AgentDash';


const AgentDashboard = () => {
return (
    <div className="flex mt-20">
      <AdminSideBar />

       <div className="flex flex-col w-full">
        <AdminNavbar />

        <div className="ml-0 mt-0 ">
          <AgentDash />
        </div>
     </div>
   </div>
  );
};
export default AgentDashboard;