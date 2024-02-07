import React from "react";
import InlineSVG from "react-inlinesvg";

import Table from "../../components/table/index";
import TableData from "../../mockup/TableData.json";

import attachImg from "../../assets/icons/attach.svg";
import usersImg from "../../assets/icons/users.svg";
import sortImg from "../../assets/icons/sort.svg";
import jobImg from "../../assets/icons/job.svg";

const TableList = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-[30px]">
        <div className="xl:col-span-1 lg:col-span-2 md:col-span-2 sm:col-span-2">
          <Table
            icon={usersImg}
            title="מגעים חסרים של מעל לשבוע"
            columns={TableData.Table1.columns}
            data={TableData.Table1.data}
          />
        </div>
        <div className="xl:col-span-1 lg:col-span-2 md:col-span-2 sm:col-span-2">
          <Table
            icon={attachImg}
            title="אישורים לקראת סיום"
            columns={TableData.Table2.columns}
            data={TableData.Table2.data}
          />
        </div>
        <div className="col-span-2">
          <Table
            icon={jobImg}
            title="הזדמנויות תעסוקה חדשות"
            columns={TableData.Table3.columns}
            data={TableData.Table3.data}
          />
        </div>
      </div>
    </div>
  );
};

export default TableList;
