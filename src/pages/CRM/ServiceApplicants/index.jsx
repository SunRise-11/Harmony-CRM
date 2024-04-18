import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Table, ConfigProvider } from "antd";
import InlineSVG from "react-inlinesvg";

import createIcon from "../../../assets/icons/master/create.svg";
import NewRecordModal from "../../../components/CRM/NewRecord";
import Drawer from "../../../components/CRM/Drawer";

const columns = [
  {
    title: "פרטים אישיים",
    key: "personalInformation",
    dataIndex: "personalInformation",
    children: [
      {
        title: "שם פרטי",
        key: "firstName",
        dataIndex: ["personalInformation", "firstName"],
        sorter: true,
      },
      {
        title: "שם משפחה",
        key: "lastName",
        dataIndex: ["personalInformation", "lastName"],
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
      firstName: "משה",
      lastName: "ישראלי",
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
      firstName: "משה",
      lastName: "ישראלי",
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

const ServiceApplicants = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const direction = useSelector((state) => state.app.direction);
  return (
    <div className="service-applicants">
      <div className="service-applicants-navbar">
        <span className="service-applicants-navbar-title">
          מבקשי שירות פוטנציאליים
        </span>
        <Button onClick={() => setShowModal(true)}>
          <InlineSVG src={createIcon} width={20} />
          <span>הוספת רשומה</span>
        </Button>
      </div>
      <div className="service-applicants-table">
        <div className="table">
          <ConfigProvider direction={direction}>
            <Table
              dataSource={data}
              columns={columns}
              pagination={{ position: ["none", "none"] }}
              bordered={true}
              scroll={{ x: "300px" }}
              onRow={(record, rowIndex) => {
                return {
                  onClick: () => setShowDrawer(true),
                };
              }}
            />
          </ConfigProvider>
        </div>
      </div>
      <NewRecordModal
        visible={showModal}
        onCancel={() => setShowModal(false)}
      />
      <Drawer open={showDrawer} onClose={() => setShowDrawer(false)} />
    </div>
  );
};

export default ServiceApplicants;
