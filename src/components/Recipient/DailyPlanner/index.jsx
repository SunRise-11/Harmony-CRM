import { useState } from "react";
import {
  Button,
  ConfigProvider,
  Input,
  Segmented,
  Tabs,
  DatePicker,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setToggleCollapsed } from "../../../redux/store";
import InlineSVG from "react-inlinesvg";
import he_IL from "antd/locale/he_IL";

import calendarIcon from "../../../assets/icons/master/calendar.svg";
import calendarPlusIcon from "../../../assets/icons/master/calendar-plus.svg";
import searchIcon from "../../../assets/icons/system/search.svg";
import trashIcon from "../../../assets/icons/master/trash.svg";
import editIcon from "../../../assets/icons/master/edit.svg";

import CreateModal from "../../Modals/AddDailyPlanner";
import Table from "../../Table";
import useViewportWidth from "../../../hooks/useViewportWidth";

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
        <InlineSVG src={editIcon} width={20} />
        <InlineSVG src={trashIcon} width={20} />
      </div>
    ),
  },
];

const DailyPlanner = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const direction = useSelector((state) => state.app.direction);
  const toggleCollapse = useSelector((state) => state.app.toggleCollapsed);
  const viewportWidth = useViewportWidth();
  return (
    <div className="recipient-daily-planner">
      <div className="recipient-daily-planner-navbar">
        <div>
          <Input
            placeholder="חיפוש..."
            suffix={<InlineSVG src={searchIcon} />}
            style={{
              borderRadius: "30px",
              borderColor: "transparent",
              width: "320px",
            }}
            allowClear
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
              <InlineSVG src={calendarIcon} width={20} />
              <span>טווח תאריכים</span>
            </Button>
          )}
          {open && (
            <ConfigProvider locale={he_IL}>
              <div
                className={
                  direction == "rtl"
                    ? "rangePickerCustomStyles-rtl"
                    : "rangePickerCustomStyles-ltr"
                }
              >
                <RangePicker
                  style={{
                    height: "44px",
                    caretColor:
                      viewportWidth < 1236 && !toggleCollapse
                        ? "transparent"
                        : "black",
                  }}
                  getPopupContainer={(trigger) => trigger.parentNode}
                />
              </div>
            </ConfigProvider>
          )}
        </div>
        <Button
          onClick={() =>
            setShowModal(true) || viewportWidth < 1430
              ? dispatch(setToggleCollapsed(true))
              : {}
          }
        >
          <InlineSVG src={calendarPlusIcon} width={20} />
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
