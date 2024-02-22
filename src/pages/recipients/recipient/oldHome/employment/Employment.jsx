import InlineSVG from "react-inlinesvg";
import Table from "../../../../../components/table/Table";
import jobSVG from "../../../../../assets/icons/job.svg";

const data = [
  {
    employerName: "בנק מיזרחי טפחות",
    role: "כספר",
    positionScope: "מלאה",
    firstDate: "10/01/2023",
    endDate: "נוכחית",
    employmentDuration: "10 חודשים",
  },
  {
    employerName: "רשות המיסים",
    role: "מענה לפניות",
    positionScope: "שעתי",
    firstDate: "08/07/2022",
    endDate: "08/12/2022",
    employmentDuration: "6 חודשים",
  },
  {
    employerName: "קופת חולים מכבי",
    role: "שירות לקוחות",
    positionScope: "50%",
    firstDate: "2/11/2021",
    endDate: "7/06/2022",
    employmentDuration: "7 חודשים",
  },
];
const columns = [
  {
    title: "שם מעסיק",
    key: "employerName",
    dataIndex: "employerName",
    sorter: true,
    width: "100%",
  },
  {
    title: "תפקיד",
    key: "role",
    dataIndex: "role",
    sorter: true,
    width: 120,
  },
  {
    title: "היקף משרה",
    key: "positionScope",
    dataIndex: "positionScope",
    sorter: true,
    width: "auto",
  },
  {
    title: "תאריך תחילה",
    key: "firstDate",
    dataIndex: "firstDate",
    sorter: true,
    width: "96px",
  },
  {
    title: "תאריך סיום",
    key: "endDate",
    dataIndex: "endDate",
    sorter: true,
    width: "95px",
    render: (data) => {
      if (data === "נוכחית")
        return <span style={{ color: "#3AC10A" }}>נוכחית</span>;
      return data;
    },
  },
  {
    title: "משך תעסוקה",
    key: "employmentDuration",
    dataIndex: "employmentDuration",
    sorter: true,
    width: "90px",
  },
];

const Employment = () => {
  return (
    <div className="recipient-employment">
      <div className="recipient-employment-title">
        <InlineSVG src={jobSVG} style={{ stroke: "#13566C" }} />
        <span>תעסוקה</span>
      </div>
      <Table data={data} columns={columns} />
    </div>
  );
};

export default Employment;
