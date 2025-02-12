import React from "react";
import AdminSideBar from "../Components/AdminSideBar";
import AdminNavbar from "../Components/AdminNavbar";
import WebDash from "../Containers/WebDash";

const WebDashboard = () => {
    return (
        <div className="flex min-h-screen w-screen bg-black text-white">
            {/* Sidebar */}
            <div className="fixed top-3 left-5 w-64 h-screen z-50"> {/* Fixed sidebar */}
                <AdminSideBar />
            </div>

            <div className="flex flex-col flex-1 ml-64">  {/* Push content to the right */}
                {/* Navbar */}
                <AdminNavbar />

                <div className="flex-1 p-6 mt-20 ml-[-205px] max-w-[1500px]">



                    {/* Render Call History Page */}
                    <WebDash />

                    {/* Navigation Button */}

                </div>
            </div>
        </div>
    );
};

export default WebDashboard;
