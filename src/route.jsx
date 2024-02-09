import React from "react";
import { Routes, Route } from "react-router-dom";

import DashBoard from "./pages/dashBoard";
import Reception from "./pages/receptions/Reception";
import EventReport from "./pages/reports/EventReport";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/reception" element={<Reception />} />
      <Route path="/report/event" element={<EventReport />} />
    </Routes>
  );
};
export default RoutePage;
