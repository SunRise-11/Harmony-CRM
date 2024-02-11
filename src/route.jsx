import React from "react";
import { Routes, Route } from "react-router-dom";

import DashBoard from "./pages/dashBoard";
import Reception from "./pages/receptions/desktop/Reception";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/reception" element={<Reception />} />
    </Routes>
  );
};
export default RoutePage;
