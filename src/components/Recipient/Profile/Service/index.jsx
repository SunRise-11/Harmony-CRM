import { useState } from "react";

import Basic from "../Basic";
import userIcon from "../../../../assets/icons/master/user.svg";
import Item from "../Basic/Item";

const Service = ({ selected }) => {
  const [currentChildrenNumbers, setCurrentChildrenNumbers] = useState(-1);
  const childrenNumbers = [
    {
      label: "1",
      value: 0,
    },
    {
      label: "2",
      value: 1,
    },
    {
      label: "3",
      value: 2,
    },
    {
      label: "4",
      value: 3,
    },
    {
      label: "5",
      value: 4,
    },
    {
      label: "6",
      value: 5,
    },
    {
      label: "7",
      value: 6,
    },
    {
      label: "8+",
      value: 7,
    },
  ];

  const from = [
    { label: "מאיפה הגיע", value: 0 },
    { label: "דיור", value: 1 },
    { label: "תעסוקה", value: 2 },
    { label: "חונכות", value: 3 },
    { label: "השכלה", value: 4 },
  ];

  const [fromSelected, setFromSelected] = useState("");
  return (
    <Basic
      title="פרטי מקבל שירות"
      icon={userIcon}
      selected={selected}
      content={
        <>
          <Item type="input" width="200px" required text="שם פרטי"/>
          <Item type="input" width="400px" required text="שם משפחה" />
          <Item type="input" width="200px" required text="תעודת זהות" />
          <Item type="date-picker" width="180px" required text="תאריך לידה" style={{position:'relative', zIndex:6}} />
          <Item type="disabled" width="200px" text="גיל מחושב" />
          <Item
            type="dropdown"
            width="200px"
            required
            text="מספר ילדים"
            options={childrenNumbers}
            selected={childrenNumbers[currentChildrenNumbers]}
            onChange={(value) => setCurrentChildrenNumbers(value)}
            style={{position: 'relative', zIndex: 5}}
          />
          <Item
            type="dropdown"
            width="180px"
            required
            text="מאיפה הגיע"
            options={from}
            selected={from[fromSelected]}
            onChange={(value) => setFromSelected(value)}
          />
          <Item
            type="date-picker"
            width="200px"
            required
            text="תאריך סיום שירות"
            style={{position:'relative', zIndex:1}}
            placement='bottomLeft'
          />
        </>
      }
    />
  );
};

export default Service;
