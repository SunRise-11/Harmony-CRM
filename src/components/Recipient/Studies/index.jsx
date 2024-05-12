import { useState } from "react";
import { Button } from "antd";
import InlineSVG from "react-inlinesvg";

import filePlusIcon from "../../../assets/icons/master/file-plus.svg";
import Table from "../../../components/Table";
import Modal from "../../../components/Modals/Basic";
import Item from "../Profile/Basic/Item";
import CheckBox from "../../../components/CheckBox";

import editIcon from "../../../assets/icons/master/edit.svg";
import trashIcon from "../../../assets/icons/master/trash.svg";
import checkIcon from "../../../assets/icons/master/check.svg";
import educationIcon from "../../../assets/icons/master/education.svg";
import { useDispatch } from "react-redux";
import { setToggleCollapsed } from "../../../redux/store";
import useViewportWidth from "../../../hooks/useViewportWidth";

const data = [
  {
    key: 1,
    academicInstitution: "אורט בראודה",
    diploma: "הנדסאי מכונות",
    receivedCertificate: true,
    startDate: "12/12/2023",
    endDate: "12/12/2023",
  },
  {
    key: 2,
    academicInstitution: "אורט בראודה",
    diploma: "הנדסאי מכונות",
    receivedCertificate: true,
    startDate: "12/12/2023",
    endDate: "12/12/2023",
  },
  {
    key: 3,
    academicInstitution: "אורט בראודה",
    diploma: "הנדסאי מכונות",
    receivedCertificate: false,
    startDate: "12/12/2023",
    endDate: "12/12/2023",
  },
  {
    key: 4,
    academicInstitution: "אורט בראודה",
    diploma: "הנדסאי מכונות",
    receivedCertificate: true,
    startDate: "12/12/2023",
    endDate: "12/12/2023",
  },
];
const columns = [
  {
    title: "מוסד לימודים",
    key: "academicInstitution",
    dataIndex: "academicInstitution",
    sorter: true,
  },
  {
    title: "תעודה",
    key: "diploma",
    dataIndex: "diploma",
    sorter: true,
  },
  {
    title: "קיבל תעודה",
    key: "receivedCertificate",
    dataIndex: "receivedCertificate",
    sorter: true,
    width: 120,
    render: (data) =>
      data && (
        <InlineSVG
          src={checkIcon}
          style={{
            stroke: "#9BD661",
            width: "100%",
            margin: "auto",
          }}
        />
      ),
  },
  {
    title: "תאריך התחלה",
    key: "startDate",
    dataIndex: "startDate",
    sorter: true,
    width: 140,
  },
  {
    title: "תאריך סיום",
    key: "endDate",
    dataIndex: "endDate",
    sorter: true,
    width: 140,
  },
  {
    title: "פעולות",
    key: "operations",
    dataIndex: "operations",
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
        <InlineSVG src={editIcon} width={20} />
        <InlineSVG src={trashIcon} width={20} />
      </div>
    ),
  },
];

const Stuides = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const viewportWidth = useViewportWidth();
  return (
    <div className="recipient-studies">
      <div className="recipient-studies-navbar">
        <span className="recipient-studies-navbar-title"></span>
        <Button
          onClick={() =>
            setShowModal(true) || viewportWidth < 1080
              ? dispatch(setToggleCollapsed(true))
              : {}
          }
        >
          <InlineSVG src={filePlusIcon} width={20} />
          <span>הוספת רשומה</span>
        </Button>
      </div>
      <div className="recipient-studies-table">
        <Table columns={columns} data={data} />
      </div>
      <Modal
        visible={showModal}
        onCancel={() => setShowModal(false)}
        icon={educationIcon}
        title="רשומת לימודים חדשה"
        flag={false}
        content={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "20px",
                width: "100%",
                padding: "25px 0px",
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
                type="date-picker"
                width="300"
                required
                text="תאריך התחלה"
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
                type="date-picker"
                width="300"
                text="תאריך סיום"
                style={{ paddingTop: "25px" }}
              />
            </div>
            <div style={{ padding: "20px 0px" }}>
              <CheckBox
                title="קיבל תעודה"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Stuides;
