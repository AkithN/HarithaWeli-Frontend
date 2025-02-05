import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AdminDashboard from "./Pages/AdminDashboard";
import CallCenterDashboard from "./Pages/CallCenterDashboard";
import AgentStock from "./Pages/AgentStock";
import AgentDashboard from "./Pages/AgentDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/call-center" element={<CallCenterDashboard />} />
      <Route path="/agent-stock" element={<AgentStock />} />
      <Route path="/agent-dashboard" element={<AgentDashboard />} />
    </Routes>
  );
}

export default App;