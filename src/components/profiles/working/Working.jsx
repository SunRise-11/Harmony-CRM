import Basic from "../basic/Basic";
import jobSVG from "../../../assets/icons/job.svg";
import CheckBox from "../../checkBox/CheckBox";
import Item from "../basic/item/Item";
import { useState } from "react";

const Working = ({ selected }) => {
  const [checked, setChecked] = useState(false);
  return (
    <Basic
      title="עבודה"
      icon={jobSVG}
      selected={selected}
      content={
        <>
          <div className="profiles-item">
            <div className="profiles-item-name">
              <span>עובד</span>
              <span style={{ color: "red" }}>*</span>
            </div>
            <div style={{ display: "flex", gap: "60px" }}>
              <CheckBox
                title="לא"
                checked={!checked}
                onChange={() => setChecked(false)}
              />
              <CheckBox
                title="כן"
                checked={checked}
                onChange={() => setChecked(true)}
              />
            </div>
          </div>
          {/* <Item type="input" text="" */}
        </>
      }
    />
  );
};

export default Working;
