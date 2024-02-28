import { Button, ConfigProvider, Segmented, DatePicker } from "antd";
import InlineSVG from "react-inlinesvg";
import planSVG from "../../../../assets/icons/plan.svg";
import Table from "../../../../components/table/Table";
import Select from "../../../../components/select/Select";
import { useState } from "react";
import { useSelector } from "react-redux";

const { RangePicker } = DatePicker;

const data = [
  {
    key: 1,
    date: "12/12/2023",
    eventType: "פגישה פיזית",
    activity: "הערכה מקצועית",
    location: "תל אביב",
  },
  {
    key: 2,
    date: "03/11/2023",
    eventType: "דוח חודשי",
    activity: "השלמת פערים",
    location: "אינטרנט",
  },
  {
    key: 3,
    date: "24/10/2023",
    eventType: "שיחה טלפונית",
    activity: "בניית קורות חיים",
    location: "טלפון",
  },
  {
    key: 4,
    date: "02/09/2023",
    eventType: "אירוע חריג",
    activity: "אשפוז",
    location: "תל אביב",
  },
];
const columns = [
  {
    title: "תאריך",
    key: "date",
    dataIndex: "date",
    sorter: true,
    width: 140,
  },
  {
    title: "סוג אירוע",
    key: "eventType",
    dataIndex: "eventType",
    sorter: true,
    width: 120,
  },
  {
    title: "פעילות",
    key: "activity",
    dataIndex: "activity",
    sorter: true,
  },
  {
    title: "מיקום",
    key: "location",
    dataIndex: "location",
    sorter: true,
    width: 140,
  },
  {
    title: "פרטים",
    key: "details",
    dataIndex: "details",
    sorter: true,
  },
];

const Events = () => {
  const [open, setOpen] = useState(false);
  const direction = useSelector((state) => state.app.direction);
  return (
    <div className="recipient-events">
      <div className="recipient-events-navbar">
        <span className="recipient-events-navbar-title"></span>
        <div style={{ width: "240px" }}>
          <Select placeholder="סוג אירוע" />
        </div>
        <div style={{ width: "240px" }}>
          <Select placeholder="בחירת פעילות" />
        </div>
        <ConfigProvider direction={direction}>
          <Segmented
            className="recipient-events-navbar-toggle"
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
      <div className="recipient-events-table">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Events;
