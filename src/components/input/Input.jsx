import React from "react";
import PropTypes from "prop-types";
import { Input as AntdInput } from "antd";

const Input = ({ placeholder }) => {
  return (
    <div className="input">
      <AntdInput
        allowClear
        type="text"
        placeholder={placeholder}
        className="input-main"
      />
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

Input.defaultProps = {
  placeholder: "הקלד...",
};

export default Input;
