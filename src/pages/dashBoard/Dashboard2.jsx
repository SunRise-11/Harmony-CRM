import React from "react";

import QuickInfo from "./QuickInfo";
import TableList from "./TableList";
import CardList from "./CardList";
import BarChart from "../../components/BarChart";
import Doughnut from "../../components/Doughnut";
import PieChart from "../../components/PieChart";

const DashBoard2 = () => {
  return (
    <div className="flex place-content-center">
      <div className="grid grid-cols-3 gap-[30px] w-[1320px]">
        <div className="col-span-3">
          <QuickInfo flag={false} />
        </div>
        <div className="col-span-1">
          <PieChart />
        </div>
        <div className="col-span-1">
          <Doughnut />
        </div>
        <div className="col-span-1">
          <BarChart />
        </div>
        <div className="xl:col-span-2 lg:col-span-3 md:col-span-3 sm:col-span-3">
          <TableList />
        </div>
        <div className="xl:col-span-1 lg:col-span-3 md:col-span-3 sm:col-span-3">
          <CardList />
        </div>
      </div>
    </div>
  );
};

export default DashBoard2;
