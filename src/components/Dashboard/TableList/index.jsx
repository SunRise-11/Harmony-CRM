import React from "react";

import Table from "../../Table";
import TitleLabel from "../../Labels/TitleLabel";
import TableData from "../../../mockup/TableData.json";

import attachmentIcon from "../../../assets/icons/master/attachment.svg";
import usersIcon from "../../../assets/icons/master/users.svg";
import bagIcon from "../../../assets/icons/master/bag.svg";

const TableList = () => {
  return (
    <div className="table-list">
      <div className="table1">
        <div className="table-style">
          <TitleLabel icon={usersIcon} title="מגעים חסרים של מעל לשבוע" />
          <Table
            columns={TableData.Table1.columns}
            data={TableData.Table1.data}
          />
        </div>
      </div>
      <div className="table1">
        <div className="table-style">
          <TitleLabel icon={attachmentIcon} title="אישורים לקראת סיום" />
          <Table
            columns={TableData.Table2.columns}
            data={TableData.Table2.data}
          />
        </div>
      </div>
      <div className="table2">
        <div className="table-style">
          <TitleLabel icon={bagIcon} title="הזדמנויות תעסוקה חדשות" />
          <Table
            columns={TableData.Table3.columns}
            data={TableData.Table3.data}
          />
        </div>
      </div>
    </div>
  );
};

export default TableList;
