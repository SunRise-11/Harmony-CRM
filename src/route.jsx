import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashBoard from "./pages/dashBoard";

const RoutePage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </Router>
  );
};
export default RoutePage;
