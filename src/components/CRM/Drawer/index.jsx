import { Drawer } from "antd";
import { useSelector } from "react-redux";

import Button from "../../../components/Button";
import Table from "../../../components/Table";

import editIcon from "../../../assets/icons/master/edit.svg";
import filePlusIcon from "../../../assets/icons/master/file-plus.svg";

const items = [
  {
    title: "פרטים אישיים",
    button: {
      text: "עריכה",
      icon: editIcon,
    },
    columns: [
      {
        title: "שם פרטי",
        key: "firstName",
        dataIndex: "firstName",
        sorter: true,
      },
      {
        title: "שם משפחה",
        key: "lastName",
        dataIndex: "lastName",
        sorter: true,
      },
      {
        title: "טלפון",
        key: "phone",
        dataIndex: "phone",
        sorter: true,
        render: (data) => (
          <div
            style={{ textDecorationLine: "underline" }}
            className="crm-drawer-card-phone"
          >
            {data}
          </div>
        ),
      },
      {
        title: "יישוב",
        key: "yishuv",
        dataIndex: "yishuv",
        sorter: true,
      },
    ],
    data: [
      {
        key: 1,
        firstName: "משה",
        lastName: "ישראלי",
        phone: "054-550626",
        yishuv: "תל אביב",
      },
    ],
  },
  {
    title: "פרטי תוכנית",
    button: {
      text: "עריכה",
      icon: editIcon,
    },
    columns: [
      {
        title: "תוכנית",
        key: "program",
        dataIndex: "program",
        sorter: true,
      },
    ],
    data: [
      {
        key: 1,
        program: "תעסוקה נתמכת",
      },
    ],
  },
  {
    title: "מקור פנייה",
    button: {
      text: "עריכה",
      icon: editIcon,
    },
    columns: [
      {
        title: "תאריך פנייה",
        key: "applicationDate",
        dataIndex: "applicationDate",
        sorter: true,
      },
      {
        title: "סוג פניה",
        key: "faceType",
        dataIndex: "faceType",
        sorter: true,
      },
      {
        title: "מקור פניה",
        key: "sourceFaceType",
        dataIndex: "sourceFaceType",
        sorter: true,
      },
      {
        title: "איש קשר",
        key: "contact",
        dataIndex: "contact",
        sorter: true,
      },
      {
        title: "טלפון",
        key: "phone",
        dataIndex: "phone",
        sorter: true,
        render: (data) => <div className="crm-drawer-card-phone">{data}</div>,
      },
      {
        title: "סטטוס",
        key: "status",
        dataIndex: "status",
        sorter: true,
        render: (data) => <div className="crm-drawer-card-status">{data}</div>,
      },
    ],
    data: [
      {
        key: 1,
        applicationDate: "12/05/2023",
        faceType: "שיווק דיגיטלי",
        sourceFaceType: "פייסבוק",
        contact: "רכז סל שיקום",
        phone: "054-550626",
        status: "הוגשה בקשה",
      },
    ],
  },
];

const secondItem = {
  title: "אנשי קשר נוספים",
  button: {
    text: "רשומה חדשה",
    icon: filePlusIcon,
  },
  columns: [
    {
      title: "איש קשר",
      key: "contact",
      dataIndex: "contact",
      sorter: true,
    },
    {
      title: "טלפון",
      key: "phone",
      dataIndex: "phone",
      sorter: true,
      render: (data) => <div className="crm-drawer-card-phone">{data}</div>,
    },
    {
      title: "הערות",
      key: "remarks",
      dataIndex: "remarks",
      sorter: true,
    },
  ],
  data: [
    {
      key: 1,
      contact: "12/05/2023",
      phone: "054-550626",
      remarks: "שיווק דיגיטלי",
    },
  ],
};

const NewDrawer = ({ onClose, open }) => {
  const direction = useSelector((state) => state.app.direction);
  return (
    <Drawer
      title={<div className="crm-drawer-title">פרטים מלאים</div>}
      placement={direction === "rtl" ? "left" : "right"}
      closable={true}
      onClose={onClose}
      open={open}
      size="large"
      getContainer={false}
    >
      <div className="crm-drawer">
        <div className="crm-drawer-board">
          <div>
            {items.map((item, index) => (
              <div className="crm-drawer-card" key={index}>
                <div className="crm-drawer-card-title">{item.title}</div>
                <Table data={item.data} columns={item.columns} />
                <div>
                  <Button label={item.button.text} icon={item.button.icon} />
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="crm-drawer-card">
              <div className="crm-drawer-card-title">{secondItem.title}</div>
              <Table data={secondItem.data} columns={secondItem.columns} />
              <div>
                <Button
                  label={secondItem.button.text}
                  icon={secondItem.button.icon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default NewDrawer;
