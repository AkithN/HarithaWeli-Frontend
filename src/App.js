import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AdminDashboard from "./Pages/AdminDashboard";
import CallCenterDashboard from "./Pages/CallCenterDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/call-center" element={<CallCenterDashboard />} />
    </Routes>
  );
}

export default App;
