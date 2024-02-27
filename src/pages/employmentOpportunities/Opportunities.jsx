import { Button, ConfigProvider, Segmented, InputNumber } from "antd";
import InlineSVG from "react-inlinesvg";
import reportSVG from "../../assets/icons/report.svg";
import Dropdown from "../../components/dropdown/Dropdown";
import Table from "../../components/table/Table";
import Modal from "../../components/modals/basic/Basic";
import Item from "../../components/profiles/basic/item/Item";
import jobSVG from "../../assets/icons/job.svg";
import { useState } from "react";

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
  const [showModal, setShowModal] = useState(false);
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
          <Button
            className="opportunities-navbar-button"
            onClick={() => setShowModal(true)}
          >
            <InlineSVG src={reportSVG} width={20} />
            <span>הוספת רשומה</span>
          </Button>
        </div>
        <div className="opportunities-table">
          <Table data={data} columns={columns} />
        </div>
      </div>
      <Modal
        visible={showModal}
        onCancel={() => setShowModal(false)}
        icon={jobSVG}
        title="רשומת לימודים חדשה"
        flag={false}
        content={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
              gap: "20px",
              width: "fit-content",
              minWidth: "400px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "20px",
                width: "100%",
              }}
            >
              <Item
                type="dropdown"
                width="calc(50% - 10px)"
                required
                text="מוסד לימודים"
              />
              <Item
                type="dropdown"
                width="calc(50% - 10px)"
                required
                text="סוג תעודה"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <Item
                type="dropdown"
                width="calc(50% - 10px)"
                required
                text="עיסוק"
              />
              <div
                className="profiles-item"
                style={{ width: "calc(50% - 10px)" }}
              >
                <div className="profiles-item-name">
                  <span>היקף המשרה</span>
                  <span style={{ color: "red" }}>*</span>
                </div>
                <div className="input">
                  <InputNumber
                    className="input-main"
                    formatter={(value) => `${value}%`}
                    parser={(value) => value.replace("%", "")}
                    defaultValue={100}
                    min={0}
                    max={100}
                  />
                </div>
              </div>
            </div>
            <Item type="input" width="100%" text="תיאור" />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "20px",
                width: "100%",
              }}
            >
              <Item
                type="input"
                width="calc(50% - 10px)"
                text="תאריך התחלה"
                required
              />
              <Item type="input" width="calc(50% - 10px)" text="תאריך סיום" />
            </div>
          </div>
        }
      />
    </ConfigProvider>
  );
};

export default Opportunities;
