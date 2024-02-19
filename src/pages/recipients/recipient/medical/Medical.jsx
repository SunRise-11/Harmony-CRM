import { Button } from "antd";
import InlineSVG from "react-inlinesvg";
import uploadSVG from "../../../../assets/icons/uploadDoc.svg";
import Table from "../../../../components/table/Table";
import eyeSVG from "../../../../assets/icons/eye.svg";
import downloadSVG from "../../../../assets/icons/download.svg";
import trashSVG from "../../../../assets/icons/trash.svg";

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
        <InlineSVG src={eyeSVG} width={20} />
        <InlineSVG src={downloadSVG} width={20} />
        <InlineSVG src={trashSVG} width={20} />
      </div>
    ),
  },
];

const Medical = () => {
  return (
    <div className="recipient-medical">
      <div className="recipient-medical-navbar">
        <span className="recipient-medical-navbar-title"></span>
        <Button>
          <InlineSVG src={uploadSVG} width={20} />
          <span>העלאת מסמך</span>
        </Button>
      </div>
      <div className="recipient-medical-table">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Medical;
