import React, { useState } from "react";

import DashBoard1 from "./Dashboard1";
import DashBoard2 from "./Dashboard2";

const DashBoard = () => {
  const [isClick, setClick] = useState(true);

  return (
    <>
      <div className="dashboard">
        <button
          onClick={() => setClick(true)}
          style={{ color: isClick ? "#60a5fa" : "white" }}
        >
          <div style={{ color: isClick ? "white" : "#60a5fa" }}>1</div>
        </button>
        <button
          onClick={() => setClick(false)}
          style={{ color: isClick ? "#60a5fa" : "white" }}
        >
          <div style={{ color: isClick ? "white" : "#60a5fa" }}>2</div>
        </button>
      </div>
      {isClick ? <DashBoard1 /> : <DashBoard2 />}
    </>
  );
};

export default DashBoard;
