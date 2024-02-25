import { Button, ConfigProvider, Segmented } from "antd";
import InlineSVG from "react-inlinesvg";
import reportSVG from "../../../assets/icons/report.svg";
import planSVG from "../../../assets/icons/plan.svg";
import downloadSVG from "../../../assets/icons/download.svg";
import avatarImg1 from "../../../assets/images/avatar1.png";

import Table from "../../../components/table/Table";
import ExpenseModal from "../modals/expense/Expense";
import { useState } from "react";

const columns = [
  {
    title: "תאריך",
    key: "date",
    dataIndex: "date",
    sorter: true,
    width: "120px",
  },
  {
    title: "סוג הוצאה",
    key: "expenditure",
    dataIndex: "expenditure",
    sorter: true,
  },
  {
    title: "שם מקבל שירות",
    key: "service",
    dataIndex: "service",
    sorter: true,
    render: (service) => (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src={service.avatar} />
        <span>{service.name}</span>
      </div>
    ),
  },
  {
    title: "ק”מ",
    key: "km",
    dataIndex: "km",
    sorter: true,
  },
  {
    title: "סכום",
    key: "sum",
    dataIndex: "sum",
    sorter: true,
  },
  {
    title: "חשבונית",
    key: "operations",
    dataIndex: "operations",
    sorter: true,
    width: "100px",
    render: () => (
      <InlineSVG src={downloadSVG} style={{ margin: "auto", width: "100%" }} />
    ),
  },
];

const data = [
  {
    date: "12/12/2023",
    expenditure: "תאריך",
    service: {
      name: "שמוליק גוטמן",
      avatar: avatarImg1,
    },
    km: "23 ק”מ",
    sum: "32.00 ₪",
    key: "1",
  },
  {
    date: "12/12/2023",
    expenditure: "תאריך",
    service: {
      name: "שמוליק גוטמן",
      avatar: avatarImg1,
    },
    km: "23 ק”מ",
    sum: "32.00 ₪",
    key: "2",
  },
  {
    date: "12/12/2023",
    expenditure: "תאריך",
    service: {
      name: "שמוליק גוטמן",
      avatar: avatarImg1,
    },
    km: "23 ק”מ",
    sum: "32.00 ₪",
    key: "3",
  },
  {
    date: "12/12/2023",
    expenditure: "תאריך",
    service: {
      name: "שמוליק גוטמן",
      avatar: avatarImg1,
    },
    km: "23 ק”מ",
    sum: "32.00 ₪",
    key: "4",
  },
];
const Expense = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ConfigProvider direction="rtl">
      <div className="expense">
        <div className="expense-title">דיווח הוצאות</div>
        <div className="expense-board">
          <div className="expense-navbar">
            <div className="expense-navbar-others">
              <Segmented
                className="expense-navbar-toggle"
                options={["בשבוע האחרון", "בחודש אחרון", "בשנה האחרונה"]}
              />
              <Button>
                <InlineSVG src={planSVG} width={20} />
                <span>טווח תאריכים</span>
              </Button>
            </div>
            <Button onClick={() => setShowModal(true)}>
              <InlineSVG src={reportSVG} width={20} />
              <span>דיווח חדש</span>
            </Button>
          </div>
          <div className="expense-table">
            <Table data={data} columns={columns} />
          </div>
        </div>
        <ExpenseModal
          visible={showModal}
          onCancel={() => setShowModal(false)}
        />
      </div>
    </ConfigProvider>
  );
};

export default Expense;
