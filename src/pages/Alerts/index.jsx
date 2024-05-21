import { useState } from "react";
import { Button, Tabs, DatePicker, ConfigProvider } from "antd";
import InlineSVG from "react-inlinesvg";
import he_IL from "antd/locale/he_IL";

import calendarIcon from "../../assets/icons/master/calendar.svg";

import Table from "../../components/Table";
import Select from "../../components/Select";
import AvatarImg1 from "../../assets/avatars/avatar1.png";
import AvatarImg2 from "../../assets/avatars/avatar2.png";
import { useSelector } from "react-redux";
import useViewportWidth from "../../hooks/useViewportWidth";

const { RangePicker } = DatePicker;

const columns = [
  {
    title: "תאריך",
    key: "date",
    dataIndex: "date",
    sorter: true,
    width: 100,
  },
  {
    title: "שעה",
    key: "hour",
    dataIndex: "hour",
    sorter: true,
    width: 60,
  },
  {
    title: "סוג התרעה",
    key: "alertType",
    dataIndex: "alertType",
    sorter: true,
  },
  {
    title: "התראה",
    key: "warning",
    dataIndex: "warning",
    sorter: true,
  },
  {
    title: "מקבל שירות",
    key: "receivesService",
    dataIndex: "receivesService",
    sorter: true,
    render: (service) => (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src={service.avatar} />
        <span>{service.name}</span>
      </div>
    ),
  },
];
const data = [
  {
    key: "1",
    date: "24/05/2023",
    hour: "09:00",
    alertType: "תאריך יעד למשימה",
    warning: "תאריך היעד למשימה “יצירת קורות חיים” מסתיים בעוד יום",
    receivesService: {
      name: "יוסי כהן",
      avatar: AvatarImg1,
    },
  },
  {
    key: "2",
    date: "18/05/2023",
    hour: "14:22",
    alertType: "עדכון רשומה בטבלה",
    warning: "נוספה רשומת עבודה חדשה",
    receivesService: {
      name: "סניר גפני",
      avatar: AvatarImg2,
    },
  },
];

const Alerts = () => {
  const [open, setOpen] = useState(false);
  const direction = useSelector((state) => state.app.direction);
  const toggleCollapse = useSelector((state) => state.app.toggleCollapsed);
  const viewportWidth = useViewportWidth();
  return (
    <div className="alerts">
      <div className="alerts-navbar">
        <div style={{ width: "240px" }}>
          <Select placeholder="בחר מקבל שירות" />
        </div>
        <div style={{ width: "240px" }}>
          <Select
            placeholder="סוג התראה"
            options={[
              { label: "עדכון תוכנית שיקום", value: 0 },
              { label: "דוח סיום שירות", value: 1 },
              { label: "בקשה להערכה", value: 2 },
            ]}
          />
        </div>
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
                    viewportWidth < 900 && !toggleCollapse
                      ? "transparent"
                      : "black",
                }}
                getPopupContainer={(trigger) => trigger.parentNode}
              />
            </div>
          </ConfigProvider>
        )}
      </div>
      <div className="alerts-table">
        <Tabs
          // onChange={onChange}
          type="card"
          items={[
            {
              label: "הודעות שנקראו",
              key: 1,
              children: <Table data={data} columns={columns} checkbox />,
            },
            {
              label: "הודעות שלא נקראו",
              key: 2,
              children: <Table data={data} columns={columns} checkbox />,
            },
          ]}
        ></Tabs>
      </div>
    </div>
  );
};

export default Alerts;
