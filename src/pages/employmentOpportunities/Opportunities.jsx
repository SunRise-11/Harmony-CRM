import { Button, ConfigProvider, Segmented } from "antd";
import InlineSVG from "react-inlinesvg";
import reportSVG from "../../assets/icons/report.svg";
import Dropdown from "../../components/dropdown/Dropdown";
import downloadSVG from "../../assets/icons/download.svg";
import avatarImg1 from "../../assets/images/avatar1.png";

import Table from "../../components/table/Table";

const columns = [
  {
    title: "שם מעסיק ",
    key: "employer",
    dataIndex: "employer",
    sorter: true,
    width: "200px",
  },
  {
    title: "תאריך פרסום",
    key: "publishedDate",
    dataIndex: "publishedDate",
    sorter: true,
    width: "140px",
  },
  {
    title: "תחום עיסוק",
    key: "businessLine",
    dataIndex: "businessLine",
    sorter: true,
    width: "180px",
  },
  {
    title: "עיסוק",
    key: "occupation",
    dataIndex: "occupation",
    sorter: true,
    width: "180px",
  },
  {
    title: "תיאור תפקיד",
    key: "jobDescription",
    dataIndex: "jobDescription",
    sorter: true,
  },
  {
    title: "איש קשר",
    key: "contact",
    dataIndex: "contact",
    sorter: true,
  },
  {
    title: "היקף משרה",
    key: "positionScore",
    dataIndex: "positionScore",
    sorter: true,
    width: "200px",
  },
];

const data = [
  {
    key: "1",
    employer: "היקף משרה",
    publishedDate: "12/12/2023",
    businessLine: "כלכלה",
    occupation: "כספר",
    jobDescription: "בדיקת מסמכי הלוואות",
    contact: "שמעון כהן",
    positionScore: "100%",
    children: [
      {
        key: "11",
        employer: "היקף משרה",
        publishedDate: "12/12/2023",
        businessLine: "כלכלה",
        occupation: "כספר",
        jobDescription: "בדיקת מסמכי הלוואות",
        contact: "שמעון כהן",
        positionScore: "100%",
      },
      {
        key: "12",
        employer: "היקף משרה",
        publishedDate: "12/12/2023",
        businessLine: "כלכלה",
        occupation: "כספר",
        jobDescription: "בדיקת מסמכי הלוואות",
        contact: "שמעון כהן",
        positionScore: "30%",
      },
    ],
  },
  {
    key: "2",
    employer: "רשות המיסים",
    publishedDate: "12/12/2023",
    businessLine: "כלכלה",
    occupation: "פקיד קבלה",
    jobDescription: "בדיקת מסמכי הלוואות",
    contact: "שמעון כהן",
    positionScore: "100%",
  },
];
const Opportunities = () => {
  return (
    <ConfigProvider direction="rtl">
      <div className="opportunities">
        <div className="opportunities-navbar">
          <div className="opportunities-navbar-others">
            <Dropdown text="ישוב" />
            <Segmented
              className="opportunities-navbar-toggle"
              options={["אתמול", "בשבוע האחרון", "בחודש האחרון"]}
            />
          </div>
          <Button className="opportunities-navbar-button">
            <InlineSVG src={reportSVG} width={20} />
            <span>הוספת רשומה</span>
          </Button>
        </div>
        <div className="opportunities-table">
          <Table data={data} columns={columns} />
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Opportunities;
