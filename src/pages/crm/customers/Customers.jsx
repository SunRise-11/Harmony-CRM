import { Button } from "antd";
import InlineSVG from "react-inlinesvg";
import Table from "../../../components/table/Table";
import reportSVG from "../../../assets/icons/report.svg";
import { useState } from "react";
import NewRecordModal from "../newRecord/NewRecord";

const columns = [
  {
    title: "פרטים אישיים",
    key: "personalInformation",
    dataIndex: "personalInformation",
    children: [
      {
        title: "שם הארגון",
        key: "organizationName",
        dataIndex: ["personalInformation", "organizationName"],
        sorter: true,
      },
      {
        title: "טלפון",
        key: "phone",
        dataIndex: ["personalInformation", "phone"],
        sorter: true,
        render: (data) => (
          <div
            style={{
              color: "#0075FF",
              fontFamily: "Afek 1.5 AAA",
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: "18px",
              letterSpacing: "-0.01em",
              textAlign: "right",
              textDecoration: "underline",
            }}
          >
            {data}
          </div>
        ),
      },
      {
        title: "יישוב",
        key: "yishuv",
        dataIndex: ["personalInformation", "yishuv"],
        sorter: true,
      },
    ],
  },
  {
    title: "פרטי תוכנית",
    key: "programDetails",
    dataIndex: "programDetails",
    children: [
      {
        title: "תוכנית",
        key: "program",
        dataIndex: ["programDetails", "program"],
        sorter: true,
        fixed: "right",
      },
    ],
  },
  {
    title: "מקור פנייה",
    key: "appealSource",
    dataIndex: "appealSource",
    children: [
      {
        title: "תאריך פנייה",
        key: "applicationData",
        dataIndex: ["appealSource", "applicationData"],
        sorter: true,
      },
      {
        title: "סוג פניה",
        key: "faceType",
        dataIndex: ["appealSource", "faceType"],
        sorter: true,
      },
      {
        title: "מקור פניה",
        key: "faceSource",
        dataIndex: ["appealSource", "faceSource"],
        sorter: true,
      },
      {
        title: "איש קשר",
        key: "contact",
        dataIndex: ["appealSource", "contact"],
        sorter: true,
      },
      {
        title: "טלפון",
        key: "phone",
        dataIndex: ["appealSource", "phone"],
        sorter: true,
        render: (data) => (
          <div
            style={{
              color: "#0075FF",
              fontFamily: "Afek 1.5 AAA",
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: "18px",
              letterSpacing: "-0.01em",
              textAlign: "right",
            }}
          >
            {data}
          </div>
        ),
      },
      {
        title: "סטטוס",
        key: "status",
        dataIndex: ["appealSource", "status"],
        sorter: true,
        render: (data) => (
          <div
            style={{
              borderRadius: "6px",
              padding: "6px 10px",
              backgroundColor: "#8AD341",
              color: "white",
              fontFamily: "Afek 1.5 AAA",
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: "18px",
              letterSpacing: "-0.01em",
              textAlign: "right",
              textOverflow: "ellipsis",
              display: "inline-block",
            }}
          >
            {data}
          </div>
        ),
      },
    ],
  },
];

const data = [
  {
    key: "1",
    personalInformation: {
      organizationName: "משרד השיכון",
      phone: "054-550626",
      yishuv: "תל אביב",
    },
    programDetails: {
      program: "תעסוקה נתמכת",
    },
    appealSource: {
      applicationData: "12/05/2023",
      faceType: "שיווק דיגיטלי",
      faceSource: "פייסבוק",
      contact: "רכז סל שיקום",
      phone: "054-550626",
      status: "הוגשה בקשה",
    },
  },
  {
    key: "2",
    personalInformation: {
      organizationName: "חברת החשמל",
      phone: "054-550626",
      yishuv: "תל אביב",
    },
    programDetails: {
      program: "תעסוקה נתמכת",
    },
    appealSource: {
      applicationData: "12/05/2023",
      faceType: "שיווק דיגיטלי",
      faceSource: "פייסבוק",
      contact: "רכז סל שיקום",
      phone: "054-550626",
      status: "הוגשה בקשה",
    },
  },
];

const Customers = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="customers">
      <div className="customers-navbar">
        <span className="customers-navbar-title">לקוחות פוטנציאליים</span>
        <Button onClick={() => setShowModal(true)}>
          <InlineSVG src={reportSVG} width={20} />
          <span>טווח תאריכים</span>
        </Button>
      </div>
      <div className="customers-table">
        <Table columns={columns} data={data} />
      </div>
      <NewRecordModal
        visible={showModal}
        onCancel={() => setShowModal(false)}
      />
    </div>
  );
};

export default Customers;
