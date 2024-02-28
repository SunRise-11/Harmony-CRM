import { Button, ConfigProvider, Input } from "antd";
import InlineSVG from "react-inlinesvg";
import downloadSVG from "../../../assets/icons/downloadFile.svg";
import sendSVG from "../../../assets/icons/send.svg";
import trashSVG from "../../../assets/icons/trash.svg";
import editSVG from "../../../assets/icons/pencil.svg";
import avatarImg1 from "../../../assets/images/avatar1.png";
import { useState } from "react";
import Table from "../../../components/table/Table";

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
            <InlineSVG src={editSVG} />
          </span>
          <InlineSVG src={trashSVG} />
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
            <InlineSVG src={downloadSVG} width={20} />
            <span>שליחה</span>
          </Button>
          <Button>
            <InlineSVG src={sendSVG} width={20} style={{ stroke: "#434F68" }} />
            <span>שמירה</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Employment;
