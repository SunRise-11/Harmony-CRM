import {
  Button,
  ConfigProvider,
  Input,
  Segmented,
  Tabs,
  DatePicker,
} from "antd";
import InlineSVG from "react-inlinesvg";
import planSVG from "../../../../assets/icons/plan.svg";
import Table from "../../../../components/table/Table";
import addEventSVG from "../../../../assets/icons/addevent.svg";
import searchSVG from "../../../../assets/icons/search.svg";
import trashSVG from "../../../../assets/icons/trash.svg";
import editSVG from "../../../../assets/icons/pencil.svg";
import { useState } from "react";
import CreateModal from "./createModal/CreateModal";
import { useSelector } from "react-redux";
const { RangePicker } = DatePicker;

const data = [
  {
    key: 1,
    date: "24/05/2023",
    beginningTime: "09:00",
    endTime: "10:00",
    topic: "עדכון פרטים בקורות חיים",
    place: "אונליין",
  },
  {
    key: 2,
    date: "18/05/2023",
    beginningTime: "14:22",
    endTime: "17:30",
    topic: "שאלון מוטיבציה",
    place: "אונליין",
  },
  {
    key: 3,
    date: "06/05/2023",
    beginningTime: "13:46",
    endTime: "16:11",
    topic: "אישורי מחלה",
    place: "אונליין",
  },
  {
    key: 4,
    date: "28/04/2023",
    beginningTime: "15:32",
    endTime: "15:42",
    topic: "הזדמנות תעסוקה",
    place: "פיזי",
  },
  {
    key: 5,
    date: "20/04/2023",
    beginningTime: "12:24",
    endTime: "12:45",
    topic: "דיווח חוסרים",
    place: "פיזי",
  },
  {
    key: 6,
    date: "11/04/2023",
    beginningTime: "16:00",
    endTime: "17:00",
    topic: "שעות עבודה",
    place: "פיזי",
  },
];
const columns = [
  {
    title: "תאריך",
    key: "date",
    dataIndex: "date",
    sorter: true,
    width: 100,
  },
  {
    title: "שעת התחלה",
    key: "beginningTime",
    dataIndex: "beginningTime",
    sorter: true,
    width: 120,
  },
  {
    title: "שעת סיום",
    key: "endTime",
    dataIndex: "endTime",
    sorter: true,
    width: 136,
  },
  {
    title: "נושא",
    key: "topic",
    dataIndex: "topic",
    sorter: true,
  },
  {
    title: "מקום",
    key: "place",
    dataIndex: "place",
    sorter: true,
  },
  {
    title: "פעולות",
    key: "operations",
    dataIndex: "operations",
    width: 140,
    sorter: true,
    render: () => (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <InlineSVG src={editSVG} width={20} />
        <InlineSVG src={trashSVG} width={20} />
      </div>
    ),
  },
];

const DailyPlanner = () => {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const direction = useSelector((state) => state.app.direction);
  return (
    <div className="recipient-daily-planner">
      <div className="recipient-daily-planner-navbar">
        <div>
          <Input
            placeholder="חיפוש..."
            suffix={<InlineSVG src={searchSVG} />}
            style={{
              borderRadius: "30px",
              borderColor: "transparent",
              width: "320px",
            }}
          />
          <ConfigProvider direction={direction}>
            <Segmented
              className="recipient-daily-planner-navbar-toggle"
              options={["אתמול", "בשבוע האחרון", "בחודש האחרון"]}
            />
          </ConfigProvider>
          {!open && (
            <Button
              onClick={() => {
                setOpen(!open);
              }}
            >
              <InlineSVG src={planSVG} width={20} />
              <span>טווח תאריכים</span>
            </Button>
          )}
          {open && <RangePicker style={{ height: "44px" }} />}
        </div>
        <Button onClick={() => setShowModal(true)}>
          <InlineSVG src={addEventSVG} width={20} />
          <span>הוסף פגישה</span>
        </Button>
      </div>
      <div className="recipient-daily-planner-table">
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              key: "1",
              label: "פגישות מתוכננות",
              children: <Table data={data} columns={columns} checkbox />,
            },
            {
              key: "2",
              label: "ארכיון פגישות",
              children: <Table data={data} columns={columns} checkbox />,
            },
            ,
          ]}
        />
      </div>
      <CreateModal visible={showModal} onCancel={() => setShowModal(false)} />
    </div>
  );
};

export default DailyPlanner;
