import React from "react";
import AdminSideBar from "../Components/AdminSideBar";  // Sidebar component
import AdminNavbar from "../Components/AdminNavbar";    // Navbar component
import AdminDash from "./AdminDash";

const Home = () => {
    return (
        <div className="flex min-h-screen w-screen bg-black text-white">  {/* Full screen background */}
            {/* Sidebar */}
            <div className="fixed top-3 left-5 w-64 h-screen z-50"> {/* Ensure full height */}
                <AdminSideBar />
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1 ml-64">  {/* Push content to the right */}
                {/* Navbar */}
                <AdminNavbar />

                {/* Main content section */}
                <div className="flex-1 p-6 mt-20 ml-[-145px] max-w-[1450px]">
                    <AdminDash />
                </div>
            </div>
        </div>
    );
};

export default Home;
