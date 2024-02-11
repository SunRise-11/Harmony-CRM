import React from "react";
import { Routes, Route } from "react-router-dom";

import DashBoard from "./pages/dashBoard";
import Recipients from "./pages/recipients/desktop/Desktop";
import Recipient from "./pages/recipients/recipient/Recipient";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/recipients" element={<Recipients />} />
      <Route path="/recipients/recipient" element={<Recipient />} />
    </Routes>
  );
};
export default RoutePage;
