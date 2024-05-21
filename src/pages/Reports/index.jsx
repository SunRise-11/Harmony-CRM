import { Button, ConfigProvider, Segmented, DatePicker } from "antd";
import InlineSVG from "react-inlinesvg";
import { useSelector } from "react-redux";
import he_IL from "antd/locale/he_IL";

import pdfIcon from "../../assets/icons/document/pdf2.svg";
import excelIcon from "../../assets/icons/document/excel.svg";

import Select from "../../components/Select";
import AvatarImg2 from "../../assets/avatars/avatar2.png";
import AvatarImg3 from "../../assets/avatars/avatar3.png";
import Table from "../../components/Table";
import useViewportWidth from "../../hooks/useViewportWidth";

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
  const toggleCollapse = useSelector((state) => state.app.toggleCollapsed);
  const viewportWidth = useViewportWidth();
  return (
    <div className="event-report">
      <div className="event-report-title">דו”ח אירועים</div>
      <div className="event-report-navbar">
        <div className="event-report-navbar-others">
          <div
            style={{
              width: "200px",
              position: "relative",
              zIndex: 5,
            }}
          >
            <Select placeholder="חיפוש / בחירת מקבל שירות" />
          </div>
          <div style={{ width: "200px", position: "relative", zIndex: 3 }}>
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
                text="טווח תאריכים"
                getPopupContainer={(trigger) => trigger.parentNode}
              />
            </div>
          </ConfigProvider>
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
