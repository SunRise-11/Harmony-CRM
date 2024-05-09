import { useState } from "react";

import routeIcon from "../../../../assets/icons/master/route.svg";

import Basic from "../Basic";
import Item from "../Basic/Item";

const Plan = ({ selected }) => {
  const options = [
    { label: "מחוז צפון", value: 0 },
    { label: "מחוז חיפה 1", value: 1 },
    { label: "מחוז חיפה 2", value: 2 },
    { label: "מחוז מרכז צפון ", value: 3 },
    { label: "מחוז תל אביב 1", value: 4 },
    { label: "מחוז תל אביב 2", value: 5 },
    { label: "מחוז מרכז דרום ", value: 6 },
    { label: "מחוז דרום צפוני", value: 7 },
    { label: "מחוז דרום דרומי", value: 8 },
  ];
  const [currentSelected, setCurrentSelected] = useState(-1);
  const options1 = [
    { label: "תעסוקה נתמכת", value: 0 },
    { label: "מפעל מוגן", value: 1 },
    { label: "מועדון תעסוקתי", value: 2 },
    { label: "דיור מוגן", value: 3 },
    { label: "דיור מוגן כוללני", value: 4 },
    { label: "חונכות", value: 5 },
    { label: "השכלה אקדמאית", value: 6 },
  ];
  const [currentSelected1, setCurrentSelected1] = useState(-1);
  return (
    <Basic
      title="תוכניות"
      icon={routeIcon}
      selected={selected}
      content={
        <>
          <Item
            type="dropdown"
            width="200px"
            required
            text="מחוז"
            options={options}
            selected={options[currentSelected]}
            onChange={(value) => setCurrentSelected(value)}
            style={{position:'', zIndex: 2}}
          />
          <Item type="date-picker" width="200px" required text="תאריך קליטה" />
          <Item type="date-picker" width="200px" required text="תאריך הארכה" />
          <Item
            type="dropdown"
            width="200px"
            required
            text="סוג אישור"
            options={options1}
            selected={options1[currentSelected1]}
            onChange={(value) => setCurrentSelected1(value)}
            style={{position:'', zIndex: 1}}
          />
          <Item type="disabled" width="200px" text="תאריך סיום" />
          <Item type="input" width="200px" required text="חודשי אישור" />
          <Item type="disabled" width="200px" text="מספר החלטה" />
        </>
      }
    />
  );
};

export default Plan;
