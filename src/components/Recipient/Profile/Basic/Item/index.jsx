import { useState } from "react";
import PropTypes from "prop-types";

import Input from "../../../../Input";
import Select from "../../../../Select";
import DatePicker from "../../../../Pickers/DatePicker";
import TimePicker from "../../../../Pickers/TimePicker";
import CheckBox from "../../../../CheckBox";

const Item = ({
  type,
  width,
  required,
  text,
  placeholder,
  options,
  selected,
  onChange,
  style,
  menuPlacement,
  menuPosition,
  placement
}) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="profiles-item" style={{ ...style, width }}>
      <div className="profiles-item-name">
        <span>{text}</span>
        {required && <span style={{ color: "red" }}>*</span>}
      </div>
      <div>
        {type === "input" && <Input placeholder={placeholder || "הקלד..."} />}
        {type === "dropdown" && (
          <Select
            placeholder={placeholder || "בחר..."}
            options={options}
            value={selected}
            onChange={(result) => onChange(result)}
            allowClear
            menuPlacement={menuPlacement}
            menuPosition={menuPosition}
          />
        )}
        {type === "disabled" && (
          <div
            style={{
              backgroundColor: "#E5E9EE",
              height: "44px",
              borderRadius: "10px",
            }}
          ></div>
        )}
        {type === "date-picker" && <DatePicker py={7.5} placement={placement}/>}
        {type === "time-picker" && <TimePicker py={7.5} />}
        {type === "checkbox" && (
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
        )}
      </div>
    </div>
  );
};

Item.propTypes = {
  type: PropTypes.string.isRequired,
  width: PropTypes.string,
  required: PropTypes.bool,
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  placement: PropTypes.string,
  options: PropTypes.array,
  number: PropTypes.number,
};

Item.defaultProps = {
  require: true,
  width: "auto",
  placeholder: "",
};
export default Item;
