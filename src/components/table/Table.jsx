import React from "react";
import PropTypes, { node } from "prop-types";
import { Table as AntdTable } from "antd";
import { ConfigProvider } from "antd";

const Table = ({ columns, data }) => {
  return (
    <div className="table">
      <ConfigProvider direction="rtl">
        <AntdTable
          dataSource={data}
          columns={columns}
          pagination={{ position: ["none", "none"] }}
          bordered={true}
        />
      </ConfigProvider>
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.any),
  data: PropTypes.arrayOf(PropTypes.any),
};

export default Table;
