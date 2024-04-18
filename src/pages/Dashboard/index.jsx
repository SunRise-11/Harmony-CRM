import React, { useState } from "react";

import Dashboard1 from "../../components/Dashboard/Dashboard1";
import Dashboard2 from "../../components/Dashboard/Dashboard2";

const DashBoard = () => {
  const [click, setClick] = useState(true);

  return (
    <>
      {click ? <Dashboard1 /> : <Dashboard2 />}
      <div className="dashboard">
        <button
          onClick={() => setClick(true)}
          className={click ? "selected" : "unselected"}
        >
          1
        </button>
        <button
          onClick={() => setClick(false)}
          className={click ? "unselected" : "selected"}
        >
          2
        </button>
      </div>
    </>
  );
};

export default DashBoard;
