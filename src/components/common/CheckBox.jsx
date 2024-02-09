import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "antd";

const CheckBox = ({ title, onChange, checked }) => {
  return (
    <div className="checkbox">
      <Checkbox
        onChange={onChange}
        checked={checked}
        defaultChecked={checked}
      />
      <div className="checkbox-title">{title}</div>
    </div>
  );
};

CheckBox.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  checked: PropTypes.bool.isRequired,
};

export default CheckBox;
