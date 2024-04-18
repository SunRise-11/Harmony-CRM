import React from "react";

import QuickInfo from "../QuickInfo";
import CardList from "../CardList";
import TableList from "../TableList";

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
