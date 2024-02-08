import React from "react";
import PropTypes, { node } from "prop-types";
import { Table as AntdTable } from "antd";
import { ConfigProvider } from "antd";

import sortImg from "../../assets/icons/sort.svg";
import "./Table.scss";

const Table = ({ columns, data }) => {
  return (
    <ConfigProvider direction="rtl">
      <AntdTable
        dataSource={data}
        columns={columns}
        pagination={{ position: ["none", "none"] }}
        bordered={true}
      />
    </ConfigProvider>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.any),
  data: PropTypes.arrayOf(PropTypes.any),
};

export default Table;
