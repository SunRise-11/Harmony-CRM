import { Button } from "antd";
import InlineSVG from "react-inlinesvg";
import createSVG from "../../../../assets/icons/create2.svg";
import Table from "../../../../components/table/Table";
import editSVG from "../../../../assets/icons/pencil.svg";
import trashSVG from "../../../../assets/icons/trash.svg";
import checkSVG from "../../../../assets/icons/check.svg";

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
          src={checkSVG}
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
        <InlineSVG src={editSVG} width={20} />
        <InlineSVG src={trashSVG} width={20} />
      </div>
    ),
  },
];

const Stuides = () => {
  return (
    <div className="recipient-studies">
      <div className="recipient-studies-navbar">
        <span className="recipient-studies-navbar-title"></span>
        <Button>
          <InlineSVG src={createSVG} width={20} />
          <span>הוספת רשומה</span>
        </Button>
      </div>
      <div className="recipient-studies-table">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Stuides;
