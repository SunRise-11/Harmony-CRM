import React from "react";
import { Routes, Route } from "react-router-dom";

import DashBoard from "./pages/dashBoard";
import Reception from "./pages/receptions/desktop/Reception";
import Recipient from "./pages/receptions/recipient/Recipient";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/reception" element={<Reception />} />
      <Route path="/reception/recipient" element={<Recipient />} />
    </Routes>
  );
};
export default RoutePage;
