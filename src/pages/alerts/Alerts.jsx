import planSVG from "../../assets/icons/plan.svg";
import { Button, Tabs } from "antd";
import InlineSVG from "react-inlinesvg";
import Table from "../../components/table/Table";
import Dropdown from "../../components/dropdown/Dropdown";
import Select from "../../components/select/Select";
import AvatarImg1 from "../../assets/images/avatar1.png";
import AvatarImg2 from "../../assets/images/avatar2.png";

const columns = [
  {
    title: "תאריך",
    key: "date",
    dataIndex: "date",
    sorter: true,
    width: 100,
  },
  {
    title: "שעה",
    key: "hour",
    dataIndex: "hour",
    sorter: true,
    width: 60,
  },
  {
    title: "סוג התרעה",
    key: "alertType",
    dataIndex: "alertType",
    sorter: true,
  },
  {
    title: "התראה",
    key: "warning",
    dataIndex: "warning",
    sorter: true,
  },
  {
    title: "מקבל שירות",
    key: "receivesService",
    dataIndex: "receivesService",
    sorter: true,
    render: (service) => (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src={service.avatar} />
        <span>{service.name}</span>
      </div>
    ),
  },
];
const data = [
  {
    key: "1",
    date: "24/05/2023",
    hour: "09:00",
    alertType: "תאריך יעד למשימה",
    warning: "תאריך היעד למשימה “יצירת קורות חיים” מסתיים בעוד יום",
    receivesService: {
      name: "יוסי כהן",
      avatar: AvatarImg1,
    },
  },
  {
    key: "2",
    date: "18/05/2023",
    hour: "14:22",
    alertType: "עדכון רשומה בטבלה",
    warning: "נוספה רשומת עבודה חדשה",
    receivesService: {
      name: "סניר גפני",
      avatar: AvatarImg2,
    },
  },
];

const Alerts = () => {
  return (
    <div className="alerts">
      <div className="alerts-navbar">
        <Dropdown text="בחר מקבל שירות" />
        <div style={{ width: "240px" }}>
          <Select
            placeholder="סוג התראה"
            options={[
              { label: "עדכון תוכנית שיקום", value: 0 },
              { label: "דוח סיום שירות", value: 1 },
              { label: "בקשה להערכה", value: 2 },
            ]}
          />
        </div>
        <Button>
          <InlineSVG src={planSVG} width={20} />
          <span>טווח תאריכים</span>
        </Button>
      </div>
      <div className="alerts-table">
        <Tabs
          // onChange={onChange}
          type="card"
          items={[
            {
              label: "הודעות שנקראו",
              key: 1,
              children: <Table data={data} columns={columns} checkbox={true} />,
            },
            {
              label: "הודעות שלא נקראו",
              key: 2,
              children: <Table data={data} columns={columns} />,
            },
          ]}
        ></Tabs>
      </div>
    </div>
  );
};

export default Alerts;
