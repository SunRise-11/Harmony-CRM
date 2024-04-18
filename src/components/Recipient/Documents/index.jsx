import { useState } from "react";
import { Button, Upload } from "antd";
import InlineSVG from "react-inlinesvg";

import uploadFileIcon from "../../../assets/icons/master/upload-file.svg";
import viewIcon from "../../../assets/icons/master/view.svg";
import downloadIcon from "../../../assets/icons/master/download.svg";
import trashIcon from "../../../assets/icons/master/trash.svg";

import Table from "../../Table";
import ColorLabel from "../../Labels/ColorLabel";
import Modal from "../../Modals/AddDocuments";

const data = [
  {
    key: 1,
    documentType: "טופס",
    documentName: "ויתור סודיות",
    shippingDate: "12/12/2023",
    revision: "12/12/2023",
    status: {
      text: "טרם הושלם",
      color: "#FFAB48",
    },
  },
  {
    key: 2,
    documentType: "טופס",
    documentName: "המלצות רופא",
    shippingDate: "12/12/2023",
    revision: "12/12/2023",
    status: {
      text: "הושלם",
      color: "#8AD341",
    },
  },
];
const columns = [
  {
    title: "סוג מסמך",
    key: "documentType",
    dataIndex: "documentType",
    sorter: true,
    width: 120,
  },
  {
    title: "שם מסמך",
    key: "documentName",
    dataIndex: "documentName",
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
    title: "תאריך השלמה/ עדכון",
    key: "revision",
    dataIndex: "revision",
    sorter: true,
    width: 140,
  },
  {
    title: "סטטוס",
    key: "status",
    dataIndex: "status",
    sorter: true,
    width: 136,
    render: (status) => (
      <ColorLabel color={status.color} text={status.text} flag={true} />
    ),
  },
  {
    title: "פעולות",
    key: "operations",
    dataIndex: "operations",
    sorter: true,
    width: 129,
    render: () => (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <InlineSVG src={viewIcon} width={20} />
        <InlineSVG src={downloadIcon} width={20} />
        <InlineSVG src={trashIcon} width={20} />
      </div>
    ),
  },
];

const Documents = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="recipient-documents">
      <div className="recipient-documents-navbar">
        <span className="recipient-documents-navbar-title"></span>
        <Upload>
          <Button>
            <InlineSVG src={uploadFileIcon} width={20} />
            <span>העלאת מסמך</span>
          </Button>
        </Upload>
        <Upload>
          <Button>שליחת מסמך</Button>
        </Upload>
        <Button onClick={() => setShowModal(true)}>שליחת טופס דיגיטלי</Button>
      </div>
      <div className="recipient-documents-table">
        <Table columns={columns} data={data} />
      </div>
      <Modal visible={showModal} onCancel={() => setShowModal(false)} />
    </div>
  );
};

export default Documents;
