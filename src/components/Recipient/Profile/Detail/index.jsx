import { useState } from "react";
import { useSelector } from "react-redux";

import puzzleIcon from "../../../../assets/icons/master/puzzle.svg";

import Basic from "../Basic";
import Item from "../Basic/Item";
import CheckBox from "../../../CheckBox";
import { Radio } from 'antd';

import style from './index.scss';

const Detail = ({ selected }) => {
  const [checked1, setChecked1] = useState(0);
  const [checked2, setChecked2] = useState(0);
  const [checked3, setChecked3] = useState(0);
  const direction = useSelector((state) => state.app.direction);
  const options = [
    { label: "אין רישיון", value: 0 },
    { label: "דרגה A לאופנועים", value: 1 },
    { label: "דרגה B לרכב עד 3.5 טון ועד 8 נוסעים", value: 2 },
    { label: "דרגה C לרכב משא עד 12 טון", value: 3 },
    { label: "דרגה D להסעת נוסעים (מוניות ואוטובוסים)", value: 4 },
  ];
  const [currentSelected, setCurrentSelected] = useState(-1);
  const options1 = [
    { label: "קופת חולים כללית", value: 0 },
    { label: "קופת חולים מאוחדת", value: 1 },
    { label: "קופת חולים מכבי", value: 2 },
    { label: "קופת חולים לאומית", value: 3 },
  ];
  const [currentSelected1, setCurrentSelected1] = useState(-1);
  return (
    <Basic
      title="פרטים נוספים"
      icon={puzzleIcon}
      selected={selected}
      content={
        <>
          <div
            className="profiles-item"
            style={{
              width: "200px",
              borderLeft: direction === "rtl" ? "1px solid #CED8DB" : "",
              borderRight: direction === "ltr" ? "1px solid #CED8DB" : "",
            }}
          >
            <div className="profiles-item-name">
              <span>שירות צבאי</span>
            </div>
            <div>
              <Radio.Group
                onChange={e => setChecked1(e.target.value)}
                value={checked1}
                style={{display: 'flex', gap: '60px'}}
              >
                <Radio value={0}>לא</Radio>
                <Radio value={1}>כן</Radio>
              </Radio.Group>
            </div>
          </div>
          <div
            className="profiles-item"
            style={{
              width: "200px",
              borderLeft: direction === "rtl" ? "1px solid #CED8DB" : "",
              borderRight: direction === "ltr" ? "1px solid #CED8DB" : "",
            }}
          >
            <div className="profiles-item-name">
              <span>רישום פלילי</span>
              <span style={{ color: "red" }}>*</span>
            </div>
            <div>
              <Radio.Group
                onChange={e => setChecked2(e.target.value)}
                value={checked2}
                style={{display: 'flex', gap: '60px'}}
              >
                <Radio value={0}>לא</Radio>
                <Radio value={1}>כן</Radio>
              </Radio.Group>
            </div>
          </div>
          <div className="profiles-item">
            <div className="profiles-item-name">
              <span>מדד תאוצה</span>
            </div>
            <div>
              <Radio.Group
                onChange={e => setChecked3(e.target.value)}
                value={checked3}
                style={{display: 'flex', gap: '60px'}}
              >
                <Radio value={0}>לא</Radio>
                <Radio value={1}>כן</Radio>
              </Radio.Group>
            </div>          
          </div>
          <Item type="input" width="640px" text="הערות" />
          <Item
            type="dropdown"
            width="200px"
            text="רישיון נהיגה"
            options={options}
            selected={options[currentSelected]}
            onChange={(value) => setCurrentSelected(value)}
            menuPlacement="top"
          />
          <Item
            type="dropdown"
            width="200px"
            text="קופת חולים"
            options={options1}
            selected={options1[currentSelected1]}
            onChange={(value) => setCurrentSelected1(value)}
            menuPlacement="top"
          />
          <Item type="dropdown" width="200px" text="פסיכיאטר" menuPlacement='top' />
        </>
      }
    />
  );
};

export default Detail;
