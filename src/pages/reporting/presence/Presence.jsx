import { Button, ConfigProvider, Segmented } from "antd";
import InlineSVG from "react-inlinesvg";
import reportSVG from "../../../assets/icons/report.svg";
import planSVG from "../../../assets/icons/plan.svg";
import trashSVG from "../../../assets/icons/trash.svg";
import editSVG from "../../../assets/icons/pencil.svg";
import checkSVG from "../../../assets/icons/check.svg";
import downloadSVG from "../../../assets/icons/download.svg";

import Table from "../../../components/table/Table";

const columns = [
  {
    title: "תאריך",
    key: "date",
    dataIndex: "date",
    sorter: true,
    width: "120px",
  },
  {
    title: "שעת התחלה",
    key: "beginTime",
    dataIndex: "beginTime",
    sorter: true,
  },
  {
    title: "שעת סיום",
    key: "endTime",
    dataIndex: "endTime",
    sorter: true,
  },
  {
    title: "חופש",
    key: "freedom",
    dataIndex: "freedom",
    sorter: true,
    width: "70px",
  },
  {
    title: "מחלה",
    key: "disease",
    dataIndex: "disease",
    sorter: true,
    width: "80px",
    render: () => (
      <InlineSVG
        style={{ stroke: "#A5DD00", margin: "auto", width: "100%" }}
        src={checkSVG}
      />
    ),
  },
  {
    title: "אישור מחלה",
    key: "approval",
    dataIndex: "approval",
    sorter: true,
    render: () => <InlineSVG src={downloadSVG} />,
  },
  {
    title: "פעולות",
    key: "operations",
    dataIndex: "operations",
    sorter: true,
    width: "140px",
    render: () => (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <InlineSVG src={editSVG} />
        <InlineSVG src={trashSVG} />
      </div>
    ),
  },
];

const data = [
  {
    date: "12/12/2023",
    beginTime: "10:00",
    endTime: "11:00",
    freedom: "0.5",
    key: "1",
  },
  {
    date: "12/12/2023",
    beginTime: "10:00",
    endTime: "11:00",
    freedom: "0.5",
    key: "2",
  },
  {
    date: "12/12/2023",
    beginTime: "10:00",
    endTime: "11:00",
    freedom: "0.5",
    key: "3",
  },
  {
    date: "12/12/2023",
    beginTime: "10:00",
    endTime: "11:00",
    freedom: "0.5",
    key: "4",
  },
];
const Presence = () => {
  return (
    <ConfigProvider direction="rtl">
      <div className="presence">
        <div className="presence-title">דיווח נוכחות</div>
        <div className="presence-board">
          <div className="presence-navbar">
            <div className="presence-navbar-others">
              <Segmented
                className="presence-navbar-toggle"
                options={["בשבוע האחרון", "בחודש אחרון", "בשנה האחרונה"]}
              />
              <Button>
                <InlineSVG src={planSVG} width={20} />
                <span>טווח תאריכים</span>
              </Button>
            </div>
            <Button>
              <InlineSVG src={reportSVG} width={20} />
              <span>דיווח חדש</span>
            </Button>
          </div>
          <div className="presence-table">
            <Table data={data} columns={columns} />
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Presence;
