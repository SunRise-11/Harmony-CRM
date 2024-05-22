import React, { useState, forwardRef } from "react";

import Basic from "../Basic";
import bagIcon from "../../../../assets/icons/master/bag.svg";
import { Radio } from "antd";

const Working = forwardRef(({ selected }, ref) => {
  const [value, setValue] = useState(0);
  return (
    <Basic
      title="עבודה"
      icon={bagIcon}
      selected={selected}
      ref={ref}
      content={
        <>
          <div className="profiles-item">
            <div className="profiles-item-name">
              <span>עובד</span>
              <span style={{ color: "red" }}>*</span>
            </div>
            <div>
              <Radio.Group
                onChange={(e) => setValue(e.target.value)}
                value={value}
                style={{ display: "flex", gap: "40px" }}
              >
                <Radio value={0}>לא</Radio>
                <Radio value={1}>כן</Radio>
              </Radio.Group>
            </div>
          </div>
          {/* <Item type="input" text="" */}
        </>
      }
    />
  );
});

export default Working;
