import React, { useState } from "react";

import DashBoard1 from "./Dashboard1";
import DashBoard2 from "./Dashboard2";

const DashBoard = () => {
  const [isClick, setClick] = useState(true);

  return (
    <>
      <div className="fixed top-20 left-5 w-[30px] h-[65px] flex-col justify-start items-start gap-[5px] inline-flex">
        <button
          onClick={() => setClick(true)}
          className={`w-[30px] h-[30px] p-2.5 ${
            isClick ? "bg-blue-400" : "bg-white"
          } rounded-[30px] flex-col justify-center items-center gap-2.5 flex`}
        >
          <div
            className={`text-center ${
              isClick ? "text-white" : "text-blue-400 "
            } text-2xl font-medium font-['Afek 1.5 AAA']`}
          >
            1
          </div>
        </button>
        <button
          onClick={() => setClick(false)}
          className={`w-[30px] h-[30px] p-2.5 ${
            !isClick ? "bg-blue-400" : "bg-white"
          } rounded-[30px] flex-col justify-center items-center gap-2.5 flex`}
        >
          <div
            className={`text-center ${
              isClick ? "text-blue-400" : "text-white"
            } text-2xl font-medium font-['Afek 1.5 AAA']`}
          >
            2
          </div>
        </button>
      </div>
      {isClick ? <DashBoard1 /> : <DashBoard2 />}
    </>
  );
};

export default DashBoard;
