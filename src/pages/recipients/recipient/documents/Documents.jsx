import { Button } from "antd";
import InlineSVG from "react-inlinesvg";
import uploadSVG from "../../../../assets/icons/uploadDoc.svg";
import Table from "../../../../components/table/Table";
import eyeSVG from "../../../../assets/icons/eye.svg";
import downloadSVG from "../../../../assets/icons/download.svg";
import trashSVG from "../../../../assets/icons/trash.svg";
import ColorLabel from "../../../../components/labels/colorLabel/ColorLabel";

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
        <InlineSVG src={eyeSVG} width={20} />
        <InlineSVG src={downloadSVG} width={20} />
        <InlineSVG src={trashSVG} width={20} />
      </div>
    ),
  },
];

const Documents = () => {
  return (
    <div className="recipient-documents">
      <div className="recipient-documents-navbar">
        <span className="recipient-documents-navbar-title"></span>
        <Button>
          <InlineSVG src={uploadSVG} width={20} />
          <span>העלאת מסמך</span>
        </Button>
        <Button>שליחת מסמך</Button>
        <Button>שליחת טופס דיגיטלי</Button>
      </div>
      <div className="recipient-documents-table">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Documents;
