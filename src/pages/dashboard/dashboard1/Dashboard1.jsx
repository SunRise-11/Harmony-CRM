import React from "react";

import QuickInfo from "../quickInfo/QuickInfo";
import CardList from "../cardList/CardList";
import TableList from "../tableList/TableList";

const DashBoard1 = () => {
  return (
    <div className="dashboard1">
      <div className="dashboard1-main">
        <div>
          <QuickInfo flag={false} />
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

export default DashBoard1;
