import React from "react";

import Table from "../../components/table/Table";
import TitleLabel from "../../components/TitleLabel";
import TableData from "../../mockup/TableData.json";

import attachImg from "../../assets/icons/attach.svg";
import usersImg from "../../assets/icons/users.svg";
import jobImg from "../../assets/icons/job.svg";

import "./Style.scss";

const TableList = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-[30px]">
        <div className="xl:col-span-1 lg:col-span-2 md:col-span-2 sm:col-span-2">
          <div className="table-style">
            <TitleLabel icon={usersImg} title="מגעים חסרים של מעל לשבוע" />
            <Table
              columns={TableData.Table1.columns}
              data={TableData.Table1.data}
            />
          </div>
        </div>
        <div className="xl:col-span-1 lg:col-span-2 md:col-span-2 sm:col-span-2">
          <div className="table-style">
            <TitleLabel icon={attachImg} title="אישורים לקראת סיום" />
            <Table
              columns={TableData.Table2.columns}
              data={TableData.Table2.data}
            />
          </div>
        </div>
        <div className="col-span-2">
          <div className="table-style">
            <TitleLabel icon={jobImg} title="הזדמנויות תעסוקה חדשות" />
            <Table
              columns={TableData.Table3.columns}
              data={TableData.Table3.data}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableList;
