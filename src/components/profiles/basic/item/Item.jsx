import PropTypes from "prop-types";
import Input from "../../../input/Input";
import Select from "../../../select/Select";
import DatePicker from "../../../pickers/datePicker/DatePicker";
import TimePicker from "../../../pickers/timePicker/TimePicker";
import CheckBox from "../../../checkBox/CheckBox";
import { useState } from "react";

const Item = ({ type, width, required, text }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="profiles-item" style={{ width }}>
      <div className="profiles-item-name">
        <span>{text}</span>
        {required && <span style={{ color: "red" }}>*</span>}
      </div>
      <div>
        {type === "input" && <Input placeholder="הקלד..." />}
        {type === "dropdown" && <Select placeholder="בחר..." />}
        {type === "disabled" && (
          <div
            style={{
              backgroundColor: "#E5E9EE",
              height: "44px",
              borderRadius: "10px",
            }}
          ></div>
        )}
        {type === "date-picker" && <DatePicker py={7.5} />}
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
};

Item.defaultProps = {
  require: true,
  width: "auto",
};
export default Item;
