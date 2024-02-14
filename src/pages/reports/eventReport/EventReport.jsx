import { Button, ConfigProvider, Segmented } from "antd";
import InlineSVG from "react-inlinesvg";
import pdfSvg from "../../../assets/icons/pdf.svg";
import excelSvg from "../../../assets/icons/excel.svg";
import Dropdown from "../../../components/dropdown/Dropdown";
import DatePicker from "../../../components/pickers/datePicker/DatePicker";
import AvatarImg2 from "../../../assets/images/avatar2.png";
import AvatarImg3 from "../../../assets/images/avatar3.png";
import Table from "../../../components/table/Table";

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
  return (
    <ConfigProvider direction="rtl">
      <div className="event-report">
        <div className="event-report-title">דו”ח אירועים</div>
        <div className="event-report-navbar">
          <div className="event-report-navbar-others">
            <Dropdown text="חיפוש / בחירת מקבל שירות" />
            <Dropdown text="בחירת פעילות" />
            <Dropdown text="סוג אירוע" />
            <Segmented
              className="event-report-navbar-toggle"
              options={["הכל", "שנה אחרונה", "3 שנים אחרונות"]}
            />
            <DatePicker text="טווח תאריכים" />
          </div>
          <div className="event-report-navbar-buttons">
            <Button>
              <InlineSVG src={excelSvg} />
              <span>הורדה ל-Excel</span>
            </Button>
            <Button>
              <InlineSVG src={pdfSvg} />
              <span>הורדה ל-PDF</span>
            </Button>
          </div>
        </div>
        <div className="event-report-table">
          <Table data={data} columns={columns} />
        </div>
      </div>
    </ConfigProvider>
  );
};

export default EventReport;
