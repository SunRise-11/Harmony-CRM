import React from "react";

import QuickInfo from "./QuickInfo";
import CardList from "./CardList";
import TableList from "./TableList";

const DashBoard1 = () => {
  return (
    <div className="flex place-content-center">
      <div className="grid grid-cols-3 gap-[30px] max-w-[1320px] mt-[30px]">
        <div className="col-span-3">
          <QuickInfo flag={false} />
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

export default DashBoard1;
