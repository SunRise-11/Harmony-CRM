import { Button, ConfigProvider, Segmented, DatePicker } from "antd";
import InlineSVG from "react-inlinesvg";
import { useSelector } from "react-redux";
import { useState } from "react";

import createIcon from "../../../assets/icons/master/create.svg";
import calendarIcon from "../../../assets/icons/master/calendar.svg";
import trashIcon from "../../../assets/icons/master/trash.svg";
import editIcon from "../../../assets/icons/master/edit.svg";
import checkIcon from "../../../assets/icons/master/check.svg";
import downloadIcon from "../../../assets/icons/master/download.svg";
import Table from "../../../components/Table";
import AttendModal from "../../../components/Modals/Attend";

const { RangePicker } = DatePicker;

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
        src={checkIcon}
      />
    ),
  },
  {
    title: "אישור מחלה",
    key: "approval",
    dataIndex: "approval",
    sorter: true,
    render: () => <InlineSVG src={downloadIcon} />,
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
        <InlineSVG src={editIcon} />
        <InlineSVG src={trashIcon} />
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
  const [showModal, setShowModal] = useState(false);
  const direction = useSelector((state) => state.app.direction);
  const [open, setOpen] = useState(false);
  return (
    <div className="presence">
      <div className="presence-title">דיווח נוכחות</div>
      <div className="presence-board">
        <div className="presence-navbar">
          <div className="presence-navbar-others">
            <ConfigProvider direction={direction}>
              <Segmented
                className="presence-navbar-toggle"
                options={["בשבוע האחרון", "בחודש אחרון", "בשנה האחרונה"]}
              />
            </ConfigProvider>
            {!open && (
              <Button
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <InlineSVG src={calendarIcon} width={20} />
                <span>טווח תאריכים</span>
              </Button>
            )}
            {open && <RangePicker style={{ height: "44px" }} />}
          </div>
          <Button onClick={() => setShowModal(true)}>
            <InlineSVG src={createIcon} width={20} />
            <span>דיווח חדש</span>
          </Button>
        </div>
        <div className="presence-table">
          <Table data={data} columns={columns} />
        </div>
      </div>
      <AttendModal visible={showModal} onCancel={() => setShowModal(false)} />
    </div>
  );
};

export default Presence;
