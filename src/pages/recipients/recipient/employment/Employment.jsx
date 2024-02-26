import { Button, Input } from "antd";
import InlineSVG from "react-inlinesvg";
import createSVG from "../../../../assets/icons/create2.svg";
import Table from "../../../../components/table/Table";
import editSVG from "../../../../assets/icons/pencil.svg";
import trashSVG from "../../../../assets/icons/trash.svg";
import { useState } from "react";
import jobSVG from "../../../../assets/icons/job.svg";
import Modal from "../../../../components/modals/basic/Basic";
import Item from "../../../../components/profiles/basic/item/Item";

const data = [
  {
    key: 1,
    employerName: "בנק מיזרחי טפחות",
    businessLine: "כלכלה",
    occupation: "כספר",
    jobDescription: "בדיקת מסמכי הלוואות",
    positionScope: "100%",
    startDate: "12/12/2023",
    endDate: "",
  },
  {
    key: 2,
    employerName: "רשות המיסים",
    businessLine: "מזכיר",
    occupation: "כספר",
    jobDescription: "מזכיר",
    positionScope: "60%",
    startDate: "01/03/2022",
    endDate: "07/02/2023",
  },
  {
    key: 3,
    employerName: "מכללת הצפון",
    businessLine: "הנדסה",
    occupation: "כספר",
    jobDescription: "הנדסאי בנין",
    positionScope: "25%",
    startDate: "03/05/2021",
    endDate: "23/01/2022",
  },
  {
    key: 4,
    employerName: "קופת חולים מכבי",
    businessLine: "אדמיניסטרציה",
    occupation: "כספר",
    jobDescription: "שירות לקוחות",
    positionScope: "50%",
    startDate: "17/02/2020",
    endDate: "11/06/2021",
  },
];
const columns = [
  {
    title: "שם מעסיק",
    key: "employerName",
    dataIndex: "employerName",
    sorter: true,
    width: 200,
  },
  {
    title: "תחום עיסוק",
    key: "businessLine",
    dataIndex: "businessLine",
    sorter: true,
    width: 180,
  },
  {
    title: "עיסוק",
    key: "occupation",
    dataIndex: "occupation",
    sorter: true,
    width: 180,
  },
  {
    title: "תיאור תפקיד",
    key: "jobDescription",
    dataIndex: "jobDescription",
    sorter: true,
  },
  {
    title: "היקף משרה",
    key: "positionScope",
    dataIndex: "positionScope",
    sorter: true,
    width: 100,
    render: (value) => (
      <span
        style={{
          color:
            value === "100%"
              ? "#00B031"
              : value === "60%" || value === "50%"
              ? "#FF6B00"
              : "#FF0303",
        }}
      >
        {value}
      </span>
    ),
  },
  {
    title: "תאריך התחלה",
    key: "startDate",
    dataIndex: "startDate",
    sorter: true,
    width: 100,
  },
  {
    title: "תאריך סיום",
    key: "endDate",
    dataIndex: "endDate",
    sorter: true,
    width: 100,
  },
  {
    title: "פעולות",
    key: "operations",
    dataIndex: "operations",
    sorter: true,
    width: 100,
    render: () => (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
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

const Employment = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="recipient-employment">
      <div className="recipient-employment-navbar">
        <span className="recipient-employment-navbar-title"></span>
        <Button onClick={() => setShowModal(true)}>
          <InlineSVG src={createSVG} width={20} />
          <span>הוספת רשומה</span>
        </Button>
      </div>
      <div className="recipient-employment-table">
        <Table columns={columns} data={data} />
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
                  <Input
                    placeholder="100%"
                    type="number"
                    className="input-main"
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
    </div>
  );
};

export default Employment;
