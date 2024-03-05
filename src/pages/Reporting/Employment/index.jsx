import { Button, Input } from "antd";
import { useState } from "react";
import InlineSVG from "react-inlinesvg";

import downloadIcon from "../../../assets/icons/master/download.svg";
import sendIcon from "../../../assets/icons/master/send.svg";
import trashIcon from "../../../assets/icons/master/trash.svg";
import editIcon from "../../../assets/icons/master/edit.svg";
import avatarImg1 from "../../../assets/avatars/avatar1.png";
import Table from "../../../components/Table";

const data = [
  {
    service: {
      name: "שמוליק גוטמן",
      avatar: avatarImg1,
    },
    program: "מפעל מוגן",
    key: "1",
  },
  {
    service: {
      name: "שמוליק גוטמן",
      avatar: avatarImg1,
    },
    program: "מפעל מוגן",
    key: "2",
  },
  {
    service: {
      name: "שמוליק גוטמן",
      avatar: avatarImg1,
    },
    program: "מפעל מוגן",
    key: "3",
  },
  {
    service: {
      name: "שמוליק גוטמן",
      avatar: avatarImg1,
    },
    program: "מפעל מוגן",
    key: "4",
  },
];
const Employment = () => {
  const [isEdit, setIsEdit] = useState("");
  const columns = [
    {
      title: "שם מקבל שירות",
      key: "service",
      dataIndex: "service",
      sorter: true,
      width: "240px",
      render: (service) => (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src={service.avatar} />
          <span>{service.name}</span>
        </div>
      ),
    },
    {
      title: "תוכנית",
      key: "program",
      dataIndex: "program",
      sorter: true,
      width: "180px",
    },
    {
      title: "ימי עבודה",
      key: "businessDays",
      dataIndex: "businessDays",
      sorter: true,
      width: "120px",
    },
    {
      title: "הערות",
      key: "remarks",
      dataIndex: "remarks",
      sorter: true,
      render: (remarks, record) => {
        if (isEdit === record.key) {
          return <Input />;
        } else {
          return <span>{remarks}</span>;
        }
      },
    },
    {
      title: "פעולות",
      key: "operations",
      dataIndex: "operations",
      sorter: true,
      width: "100px",
      render: (_, record) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <span
            onClick={() => setIsEdit(record.key)}
            className="recipient-medical-table-see"
          >
            <InlineSVG src={editIcon} />
          </span>
          <InlineSVG src={trashIcon} />
        </div>
      ),
    },
  ];
  return (
    <div className="employment">
      <div className="employment-title">דיווח תעסוקה ינואר 2024</div>
      <div className="employment-table">
        <Table data={data} columns={columns} />
        <div className="employment-table-buttons">
          <Button>
            <InlineSVG src={downloadIcon} width={20} />
            <span>שליחה</span>
          </Button>
          <Button>
            <InlineSVG src={sendIcon} width={20} style={{ stroke: "#434F68" }} />
            <span>שמירה</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Employment;
