import { useState } from "react";
import { Button, Upload } from "antd";
import InlineSVG from "react-inlinesvg";

import uploadFileIcon from "../../../assets/icons/master/upload-file.svg";
import viewIcon from "../../../assets/icons/master/view.svg";
import downloadIcon from "../../../assets/icons/master/download.svg";
import trashIcon from "../../../assets/icons/master/trash.svg";

import Modal from "../../Modals/AddMedical";
import Table from "../../../components/Table";

const Medical = () => {
  const [showModal, setShowModal] = useState(false);

  const data = [
    {
      key: 1,
      documentType: "טופס",
      documentName: "המלצות רופא",
      updateDate: "12/12/2023",
    },
    {
      key: 2,
      documentType: "טופס",
      documentName: "המלצות רופא",
      updateDate: "12/12/2023",
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
      title: "תאריך עדכון",
      key: "updateDate",
      dataIndex: "updateDate",
      sorter: true,
      width: 140,
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
          <span
            className="recipient-medical-table-see"
            onClick={() => setShowModal(true)}
          >
            <InlineSVG src={viewIcon} width={20} />
          </span>
          <InlineSVG src={downloadIcon} width={20} />
          <InlineSVG src={trashIcon} width={20} />
        </div>
      ),
    },
  ];

  return (
    <div className="recipient-medical">
      <div className="recipient-medical-navbar">
        <span className="recipient-medical-navbar-title"></span>
        <Upload>
          <Button>
            <InlineSVG src={uploadFileIcon} width={20} />
            <span>העלאת מסמך</span>
          </Button>
        </Upload>
      </div>
      <div className="recipient-medical-table">
        <Table columns={columns} data={data} />
      </div>
      <Modal visible={showModal} onCancel={() => setShowModal(false)} />
    </div>
  );
};

export default Medical;
