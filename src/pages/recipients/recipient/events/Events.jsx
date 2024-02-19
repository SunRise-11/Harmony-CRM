import { Button, ConfigProvider, Segmented } from "antd";
import InlineSVG from "react-inlinesvg";
import planSVG from "../../../../assets/icons/plan.svg";
import Table from "../../../../components/table/Table";
import eyeSVG from "../../../../assets/icons/eye.svg";
import downloadSVG from "../../../../assets/icons/download.svg";
import trashSVG from "../../../../assets/icons/trash.svg";
import ColorLabel from "../../../../components/labels/colorLabel/ColorLabel";
import Dropdown from "../../../../components/dropdown/Dropdown";

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
  return (
    <div className="events">
      <div className="events-navbar">
        <span className="events-navbar-title"></span>
        <Dropdown text="סוג אירוע" />
        <Dropdown text="בחירת פעילות" />
        <ConfigProvider direction="rtl">
          <Segmented
            className="events-navbar-toggle"
            options={["אתמול", "בשבוע האחרון", "בחודש האחרון"]}
          />
        </ConfigProvider>
        <Button>
          <InlineSVG src={planSVG} width={20} />
          <span>טווח תאריכים</span>
        </Button>
      </div>
      <div className="events-table">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Events;
