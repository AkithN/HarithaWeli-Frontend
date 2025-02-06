import React from "react";
import avatar from "../Assets/avatar.jpg";

const Account = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      {/* Profile Section */}
      <div className="flex items-center space-x-6">
        <img
          className="w-20 h-20 rounded-full border-2 border-blue-500"
          src= { avatar }
          alt="Profile"
        />
        <div>
          <h2 className="text-2xl font-semibold">John Doe</h2>
          <p className="text-gray-500">johndoe@example.com</p>
        </div>
      </div>

      {/* Account Details */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold border-b pb-2">Account Details</h3>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-gray-600">Username:</p>
            <p className="font-medium">johndoe123</p>
          </div>
          <div>
            <p className="text-gray-600">Phone:</p>
            <p className="font-medium">+1 234 567 890</p>
          </div>
          <div>
            <p className="text-gray-600">Date of Birth:</p>
            <p className="font-medium">Jan 1, 1990</p>
          </div>
          <div>
            <p className="text-gray-600">Location:</p>
            <p className="font-medium">New York, USA</p>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold border-b pb-2">Security Settings</h3>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Change Password
        </button>
      </div>

      {/* Logout */}
      <div className="mt-6 text-center">
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Account;
