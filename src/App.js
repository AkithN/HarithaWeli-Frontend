import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AdminDashboard from "./Pages/AdminDashboard";
import CallCenterDashboard from "./Pages/CallCenterDashboard";
import AgentStock from "./Pages/AgentStock";
import AgentDashboard from "./Pages/AgentDashboard";
import OrderDashboard from "./Pages/OrderDashboard";
import AgentSaleDashboard from "./Pages/AgentSale";
import Calculation from "./Pages/ProductCal";
import EShop from "./Pages/E-Shop";
import Project from "./Pages/Projects";
import Account from "./Pages/ClientAccount";
import About from "./Pages/Aboutus";

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
      <Route path="/productCal" element={<Calculation />} />
      <Route path="/E-Shop" element={<EShop />} />
      <Route path="/Projects" element={<Project />} />
      <Route path="/Account" element={<Account />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
}

export default App;