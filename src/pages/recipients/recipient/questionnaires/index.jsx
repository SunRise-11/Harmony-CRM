import { Button } from "antd";
import InlineSVG from "react-inlinesvg";
import downloadSVG from "../../../../assets/icons/download.svg";
import Table from "../../../../components/table/Table";
import sendSVG from "../../../../assets/icons/send.svg";
import ColorLabel from "../../../../components/labels/colorLabel/ColorLabel";

import Modal from "./modal/Modal";
import { useState } from "react";
const data = [
  {
    key: 1,
    questionnaire: "ציר מוטיבציה",
    shippingDate: "12/12/2023",
    linkSent: "לחץ להעתקה",
    sendingChannel: "דוא”ל / WhatsApp",
    status: {
      text: "טרם הושלם",
      color: "#FFAB48",
    },
    endDate: "",
    results: "",
  },
  {
    key: 2,
    questionnaire: "פרואקטיביות",
    shippingDate: "12/12/2023",
    linkSent: "לחץ להעתקה",
    sendingChannel: "דוא”ל / SMS",
    status: {
      text: "לא נפתח",
      color: "#FF7979",
    },
    endDate: "",
    results: "",
  },
  {
    key: 3,
    questionnaire: "אמונה ביכולת",
    shippingDate: "12/12/2023",
    linkSent: "לחץ להעתקה",
    sendingChannel: "דוא”ל / WhatsApp",
    status: {
      text: "הושלם",
      color: "#8AD341",
    },
    endDate: "12/12/2023",
    results: "צפה בתוצאות",
  },
  {
    key: 4,
    questionnaire: "ציר מוטיבציה",
    shippingDate: "12/12/2023",
    linkSent: "לחץ להעתקה",
    sendingChannel: "דוא”ל / SMS / WhatsApp",
    status: {
      text: "טרם הושלם",
      color: "#8AD341",
    },
    endDate: "12/12/2023",
    results: "צפה בתוצאות",
  },
];
const columns = [
  {
    title: "שם שאלון",
    key: "questionnaire",
    dataIndex: "questionnaire",
    sorter: true,
  },
  {
    title: "תאריך שליחה",
    key: "shippingDate",
    dataIndex: "shippingDate",
    sorter: true,
    width: 140,
  },
  {
    title: "לינק שנשלח",
    key: "linkSent",
    dataIndex: "linkSent",
    sorter: true,
    render: (data) => (
      <span style={{ color: "#0075FF", textDecoration: "underline" }}>
        {data}
      </span>
    ),
  },
  {
    title: "ערוץ שליחה",
    key: "sendingChannel",
    dataIndex: "sendingChannel",
    sorter: true,
  },
  {
    title: "סטטוס",
    key: "status",
    dataIndex: "status",
    sorter: true,
    render: (data) => <ColorLabel color={data.color} text={data.text} flag />,
  },
  {
    title: "תאריך סיום",
    key: "endDate",
    dataIndex: "endDate",
    sorter: true,
    width: 140,
  },
  {
    title: "תוצאות",
    key: "results",
    dataIndex: "results",
    sorter: true,
    width: 140,
    render: (data) => (
      <span style={{ color: "#0075FF", textDecoration: "underline" }}>
        {data}
      </span>
    ),
  },
  {
    title: "פעולות",
    key: "download",
    dataIndex: "download",
    sorter: true,
    width: 140,
    render: () => (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <InlineSVG src={downloadSVG} width={20} />
      </div>
    ),
  },
];

const Employment = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="recipient-questionnaires">
      <div className="recipient-questionnaires-navbar">
        <span className="recipient-questionnaires-navbar-title"></span>
        <Button onClick={() => setShowModal(true)}>
          <InlineSVG src={sendSVG} width={20} stroke="#434f68" />
          <span>שליחת שאלון</span>
        </Button>
      </div>
      <div className="recipient-questionnaires-table">
        <Table columns={columns} data={data} />
      </div>
      <Modal visible={showModal} onCancel={() => setShowModal(false)} />
    </div>
  );
};

export default Employment;
