import Basic from "../basic/Basic";
import detailSVG from "../../../assets/icons/detail.svg";
import Item from "../basic/item/Item";
import CheckBox from "../../checkBox/CheckBox";
import { useState } from "react";

const Detail = ({ selected }) => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  return (
    <Basic
      title="פרטים נוספים"
      icon={detailSVG}
      selected={selected}
      content={
        <>
          <div
            className="profiles-item"
            style={{ width: "200px", borderLeft: "1px solid #CED8DB" }}
          >
            <div className="profiles-item-name">
              <span>שירות צבאי</span>
            </div>
            <div style={{ display: "flex", gap: "60px" }}>
              <CheckBox
                title="לא"
                checked={!checked1}
                onChange={() => setChecked1(false)}
              />
              <CheckBox
                title="כן"
                checked={checked1}
                onChange={() => setChecked1(true)}
              />
            </div>
          </div>
          <div
            className="profiles-item"
            style={{ width: "200px", borderLeft: "1px solid #CED8DB" }}
          >
            <div className="profiles-item-name">
              <span>רישום פלילי</span>
              <span style={{ color: "red" }}>*</span>
            </div>
            <div style={{ display: "flex", gap: "60px" }}>
              <CheckBox
                title="לא"
                checked={!checked2}
                onChange={() => setChecked2(false)}
              />
              <CheckBox
                title="כן"
                checked={checked2}
                onChange={() => setChecked2(true)}
              />
            </div>
          </div>
          <div className="profiles-item">
            <div className="profiles-item-name">
              <span>מדד תאוצה</span>
            </div>
            <div style={{ display: "flex", gap: "60px" }}>
              <CheckBox
                title="לא"
                checked={!checked3}
                onChange={() => setChecked3(false)}
              />
              <CheckBox
                title="כן"
                checked={checked3}
                onChange={() => setChecked3(true)}
              />
            </div>
          </div>
          <Item type="input" width="640px" text="הערות" />
          <Item type="dropdown" width="200px" text="רישיון נהיגה" />
          <Item type="dropdown" width="200px" text="קופת חולים" />
          <Item type="dropdown" width="200px" text="פסיכיאטר" />
        </>
      }
    />
  );
};

export default Detail;
