import { useState } from "react";

import Basic from "../Basic";
import bagIcon from "../../../../assets/icons/master/bag.svg";
import CheckBox from "../../../CheckBox";

const Working = ({ selected }) => {
  const [checked, setChecked] = useState(false);
  return (
    <Basic
      title="עבודה"
      icon={bagIcon}
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
