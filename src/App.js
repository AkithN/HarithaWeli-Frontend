import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AdminDashboard from "./Pages/AdminDashboard";
import CallCenterDashboard from "./Pages/CallCenterDashboard";
import AgentStock from "./Pages/AgentStock";
import AgentDashboard from "./Pages/AgentDashboard";
import OrderDashboard from "./Pages/OrderDashboard";
import AgentSaleDashboard from "./Pages/AgentSale";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/call-center" element={<CallCenterDashboard />} />
      <Route path="/agent-stock" element={<AgentStock />} />
      <Route path="/agent-dashboard" element={<AgentDashboard />} />
      <Route path="/order" element={<OrderDashboard />} />
      <Route path="/sale" element={<AgentSaleDashboard />} />

    </Routes>
  );
}

export default App;