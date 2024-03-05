import React from "react";
import PropTypes, { node } from "prop-types";
import { Table as AntdTable } from "antd";
import { ConfigProvider } from "antd";
import { useSelector } from "react-redux";

const Table = ({ columns, data, checkbox }) => {
  const direction = useSelector((state) => state.app.direction);
  return (
    <div className="table">
      <ConfigProvider direction={direction}>
        <AntdTable
          dataSource={data}
          columns={columns}
          pagination={{ position: ["none", "none"] }}
          bordered={true}
          scroll={{ x: "300px" }}
          rowSelection={
            checkbox && {
              type: "checkbox",
            }
          }
        />
      </ConfigProvider>
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.any),
  data: PropTypes.arrayOf(PropTypes.any),
  checkbox: PropTypes.bool,
};

Table.defaultProps = {
  checkbox: false,
};

export default Table;
