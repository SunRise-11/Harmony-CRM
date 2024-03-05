import { Button, ConfigProvider, Segmented, DatePicker } from "antd";
import InlineSVG from "react-inlinesvg";
import { useSelector } from "react-redux";

import pdfIcon from "../../assets/icons/document/pdf2.svg";
import excelIcon from "../../assets/icons/document/excel.svg";

import Select from "../../components/Select";
import AvatarImg2 from "../../assets/avatars/avatar2.png";
import AvatarImg3 from "../../assets/avatars/avatar3.png";
import Table from "../../components/Table";

const { RangePicker } = DatePicker;

const columns = [
  {
    key: "service",
    dataIndex: "service",
    title: "מקבל שירות",
    sorter: true,
    render: (service) => (
      <div className="event-report-table-service">
        <img src={service.avatar} />
        <span>{service.name}</span>
      </div>
    ),
  },
  {
    key: "date",
    dataIndex: "date",
    title: "תאריך",
    width: 140,
    sorter: true,
  },
  {
    key: "eventType",
    dataIndex: "eventType",
    title: "סוג אירוע",
    width: 120,
    sorter: true,
  },
  {
    key: "activity",
    dataIndex: "activity",
    title: "פעילות",
    sorter: true,
  },
  {
    key: "made",
    dataIndex: "made",
    title: "נוצר ע”י",
    sorter: true,
  },
];

const data = [
  {
    made: "חיים חומייני",
    activity: "הערכה מקצועית",
    eventType: "פגישה פיזית",
    date: "12/12/2023",
    key: "1",
    service: {
      name: "יוסי כהן",
      avatar: AvatarImg2,
    },
  },
  {
    made: "רונית רינתי",
    activity: "אישפוז",
    eventType: "אירוע חריג",
    date: "12/12/2023",
    key: "2",
    service: {
      name: "יואל קמינסקי",
      avatar: AvatarImg3,
    },
  },
];
const EventReport = () => {
  const direction = useSelector((state) => state.app.direction);
  return (
    <div className="event-report">
      <div className="event-report-title">דו”ח אירועים</div>
      <div className="event-report-navbar">
        <div className="event-report-navbar-others">
          <div style={{ width: "200px" }}>
            <Select placeholder="חיפוש / בחירת מקבל שירות" />
          </div>
          <div style={{ width: "200px" }}>
            <Select placeholder="בחירת פעילות" />
          </div>
          <div style={{ width: "200px" }}>
            <Select placeholder="סוג אירוע" />
          </div>
          <ConfigProvider direction={direction}>
            <Segmented
              className="event-report-navbar-toggle"
              options={["הכל", "שנה אחרונה", "3 שנים אחרונות"]}
            />
          </ConfigProvider>
          <RangePicker text="טווח תאריכים" style={{ height: "44px" }} />
        </div>
        <div className="event-report-navbar-buttons">
          <Button>
            <InlineSVG src={excelIcon} />
            <span>הורדה ל-Excel</span>
          </Button>
          <Button>
            <InlineSVG src={pdfIcon} />
            <span>הורדה ל-PDF</span>
          </Button>
        </div>
      </div>
      <div className="event-report-table">
        <Table data={data} columns={columns} />
      </div>
    </div>
  );
};

export default EventReport;
