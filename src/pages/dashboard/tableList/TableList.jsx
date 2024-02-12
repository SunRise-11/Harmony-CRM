import React from "react";

import Table from "../../../components/table/Table";
import TitleLabel from "../../../components/labels/titleLabel/TitleLabel";
import TableData from "../../../mockup/TableData.json";

import attachImg from "../../../assets/icons/attach.svg";
import usersImg from "../../../assets/icons/users.svg";
import jobImg from "../../../assets/icons/job.svg";

const TableList = () => {
  return (
    <div>
      <div className="table-list">
        <div className="table1">
          <div className="table-style">
            <TitleLabel icon={usersImg} title="מגעים חסרים של מעל לשבוע" />
            <Table
              columns={TableData.Table1.columns}
              data={TableData.Table1.data}
            />
          </div>
        </div>
        <div className="table1">
          <div className="table-style">
            <TitleLabel icon={attachImg} title="אישורים לקראת סיום" />
            <Table
              columns={TableData.Table2.columns}
              data={TableData.Table2.data}
            />
          </div>
        </div>
        <div className="table2">
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
