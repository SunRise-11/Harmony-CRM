import { Button, ConfigProvider, Segmented, DatePicker } from "antd";
import { useSelector } from "react-redux";
import { useState } from "react";
import InlineSVG from "react-inlinesvg";

import createIcon from "../../../assets/icons/master/create.svg";
import calendarIcon from "../../../assets/icons/master/calendar.svg";
import downloadIcon from "../../../assets/icons/master/download.svg";
import avatarImg1 from "../../../assets/avatars/avatar1.png";
import Table from "../../../components/Table";
import ExpenseModal from "../../../components/Modals/CreateExpense";

const { RangePicker } = DatePicker;

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
      <InlineSVG src={downloadIcon} style={{ margin: "auto", width: "100%" }} />
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
  const [open, setOpen] = useState(false);
  const direction = useSelector((state) => state.app.direction);

  return (
    <div className="expense">
      <div className="expense-title">דיווח הוצאות</div>
      <div className="expense-board">
        <div className="expense-navbar">
          <div className="expense-navbar-others">
            <ConfigProvider direction={direction}>
              <Segmented
                className="expense-navbar-toggle"
                options={["בשבוע האחרון", "בחודש אחרון", "בשנה האחרונה"]}
              />
            </ConfigProvider>
            {!open && (
              <Button
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <InlineSVG src={calendarIcon} width={20} />
                <span>טווח תאריכים</span>
              </Button>
            )}
            {open && <RangePicker style={{ height: "44px" }} />}
          </div>
          <Button onClick={() => setShowModal(true)}>
            <InlineSVG src={createIcon} width={20} />
            <span>דיווח חדש</span>
          </Button>
        </div>
        <div className="expense-table">
          <Table data={data} columns={columns} />
        </div>
      </div>
      <ExpenseModal visible={showModal} onCancel={() => setShowModal(false)} />
    </div>
  );
};

export default Expense;
