import React from "react";

import QuickInfo from "./QuickInfo";
import TableList from "./TableList";
import CardList from "./CardList";
import BarChart from "../../components/charts/BarChart";
import Doughnut from "../../components/Doughnut";
import PieChart from "../../components/charts/PieChart";

const DashBoard2 = () => {
  return (
    <div className="dashboard2">
      <div className="dashboard2-main">
        <div style={{ gridColumn: "span 3" }}>
          <QuickInfo flag={false} />
        </div>
        <div style={{ gridColumn: "span 1" }}>
          <PieChart />
        </div>
        <div style={{ gridColumn: "span 1" }}>
          <Doughnut />
        </div>
        <div style={{ gridColumn: "span 1" }}>
          <BarChart />
        </div>
        <div className="dashboard1-main-table">
          <TableList />
        </div>
        <div className="dashboard1-main-card">
          <CardList />
        </div>
      </div>
    </div>
  );
};

export default DashBoard2;
