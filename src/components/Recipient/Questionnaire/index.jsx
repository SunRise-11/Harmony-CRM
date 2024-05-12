import { useState } from "react";
import { Button } from "antd";
import InlineSVG from "react-inlinesvg";

import downloadIcon from "../../../assets/icons/master/download.svg";
import sendIcon from "../../../assets/icons/master/send.svg";

import Table from "../../../components/Table";
import ColorLabel from "../../../components/Labels/ColorLabel";
import Modal from "../../../components/Modals/AddQuestionnaire";
import { useDispatch } from "react-redux";
import { setToggleCollapsed } from "../../../redux/store";
import useViewportWidth from "../../../hooks/useViewportWidth";

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
        <InlineSVG src={downloadIcon} width={20} />
      </div>
    ),
  },
];

const Employment = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const viewportWidth = useViewportWidth();
  return (
    <div className="recipient-questionnaires">
      <div className="recipient-questionnaires-navbar">
        <span className="recipient-questionnaires-navbar-title"></span>
        <Button
          onClick={() =>
            setShowModal(true) || viewportWidth < 932
              ? dispatch(setToggleCollapsed(true))
              : {}
          }
        >
          <InlineSVG src={sendIcon} width={20} height={20} stroke="#434f68" />
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
