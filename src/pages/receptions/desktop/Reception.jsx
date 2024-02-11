import React from "react";
import InlineSVG from "react-inlinesvg";

import Table from "../../../components/table/Table";
import Info from "./info/Info";
import ColorLabel from "../../../components/labels/colorLabel/ColorLabel";

import AvatarImg2 from "../../../assets/images/avatar2.png"
import AvatarImg3 from "../../../assets/images/avatar3.png";
import AvatarImg7 from "../../../assets/images/avatar7.png";
import AvatarImg8 from "../../../assets/images/avatar8.png";
import AvatarImg9 from "../../../assets/images/avatar9.png";
import AvatarImg10 from "../../../assets/images/avatar10.png";
import AvatarImg11 from "../../../assets/images/avatar11.png";

import "./Reception.scss";

const columns = [
  {
    key: "area",
    dataIndex: "area",
    title: "אזור",
    width: "10%",
    sorter: true,
  },
  {
    key: "name",
    dataIndex: "name",
    title: "שם מקבל שירות",
    width: "15%",
    render: (name, record) => (
      <div className="name">
        <img src={record.icon} />
        <div>{name}</div>
      </div>
    ),
    sorter: true,
  },
  {
    key: "sex",
    dataIndex: "sex",
    title: "מין",
    width: "5%",
    sorter: true,
  },
  {
    key: "age",
    dataIndex: "age",
    title: "גיל",
    width: "5%",
    sorter: true,
  },
  {
    key: "issue",
    dataIndex: "issue",
    title: "יישוב",
    width: "10%",
    sorter: true,
  },
  {
    key: "phone",
    dataIndex: "phone",
    title: "טלפון",
    width: "10%",
    sorter: true,
    render: (phone) => <div className="phone">{phone}</div>,
  },
  {
    key: "state",
    dataIndex: "state",
    title: "סטטוס",
    width: "10%",
    sorter: true,
    render: (state, record) => (
      <ColorLabel text={state} color={record.color} flag={true} />
    ),
  },
  {
    key: "tempState",
    dataIndex: "tempState",
    title: "סטטוס זמני",
    width: "10%",
    sorter: true,
    render: (state, record) => (
      <ColorLabel text={state} color={record.tempColor} flag={false} />
    ),
  },
  {
    key: "note",
    dataIndex: "note",
    title: "הערות",
    width: "25%",
    sorter: true,
  },
];

const data = [
  {
    key: 1,
    area: "צפון",
    name: "שמוליק גוטמן",
    sex: "מין",
    age: "49",
    issue: "לוד",
    phone: "054-4638841",
    state: "עובד",
    tempState: "חופשה",
    note: "יוסי כהן",
    icon: AvatarImg3,
    color: "#8AD341",
    tempColor: "#5FBCFF",
    children: [
      {
        key: 11,
        area: "צפון",
        name: "שמוליק גוטמן",
        sex: "מין",
        age: "49",
        issue: "לוד",
        phone: "054-4638841",
        state: "עובד",
        tempState: "חופשה",
        note: "יוסי כהן",
        icon: AvatarImg2,
        color: "#8AD341",
        tempColor: "#5FBCFF",
      },
      {
        key: 12,
        area: "צפון",
        name: "שמוליק גוטמן",
        sex: "נקבה",
        age: "47",
        issue: "לוד",
        phone: "062-4537853",
        state: "עובד",
        tempState: "מחלה",
        note: "חולה מזה 3 ימים",
        icon: AvatarImg7,
        color: "#8AD341",
        tempColor: "#FF4D4D",
      },
      {
        key: 13,
        area: "צפון",
        name: "תמרה כהן",
        sex: "נקבה",
        age: "38",
        issue: "ירושלים",
        phone: "073-5248752",
        state: "לומד",
        tempState: "מחלה",
        note: "חולה מזה 3 ימים",
        icon: AvatarImg8,
        color: "#5FBCFF",
        tempColor: "#FF4D4D",
      },
      {
        key: 14,
        area: "צפון",
        name: "שמוליק גוטמן",
        sex: "זכר",
        age: "32",
        issue: "נהריה",
        phone: "073-5248752",
        state: "בחיפוש",
        tempState: "חופשה",
        note: "לא ברור",
        icon: AvatarImg9,
        color: "#FFAB48",
        tempColor: "#5FBCFF",
      },
    ],
  },
  {
    key: 2,
    area: "דרום",
    name: "אילנית שמואל",
    sex: "נקבה",
    age: "49",
    issue: "חיפה",
    phone: "054-4638841",
    state: "מובטל",
    tempState: "חו”ל",
    note: "ללא עבודה. בחו”ל לרגל ביקור הורים",
    icon: AvatarImg10,
    color: "#FF7979",
    tempColor: "#FC8F66",
  },
  {
    key: 3,
    area: "מרכז",
    name: "שמוליק גוטמן",
    sex: "זכר",
    age: "41",
    issue: "תל אביב",
    phone: "054-4638841",
    state: "בחיפוש",
    tempState: "חופשה",
    note: "בחופשה",
    icon: AvatarImg11,
    color: "#FFAB48",
    tempColor: "#5FBCFF",
  },
];

const Reception = () => {
  return (
    <div className="reception">
      <div>
        <Info />
      </div>
      <div className="service-table">
        <Table data={data} columns={columns} />
      </div>
    </div>
  );
};

export default Reception;
