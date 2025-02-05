import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./Pages/AdminDashboard";
import CallCenterDashboard from "./Pages/CallCenterDashboard";

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/callcenter" element={<CallCenterDashboard />} />
      <Route path="/" element={<AdminDashboard />} /> {/* Default route */}
    </Routes>
  );
}

export default App;
