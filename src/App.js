import React from "react";
import { Routes, Route } from "react-router-dom";

// Import Home components
import Home from "./Pages/Home"; // Regular Home Page
import AdminHome from "./Containers/AdminHome"; // Admin Home Page

// Other imports (Removed AdminDashboard)
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
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Cartpage from "./Pages/Cartpage";
import Payment from "./Containers/Payment"


function App() {
  
  return (
    <Routes>
      {/* Default Home Page */}
      <Route path="/" element={<Home />} />

      {/* Admin Home Page (Replaces AdminDashboard) */}
      <Route path="/admin" element={<AdminHome />} />

      {/* Other Routes */}
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
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Cart" element={<Cartpage />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default App;
