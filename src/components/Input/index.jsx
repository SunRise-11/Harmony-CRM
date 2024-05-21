import React from "react";
import PropTypes from "prop-types";
import { Input as AntdInput } from "antd";
import useViewportWidth from "../../hooks/useViewportWidth";
import { useSelector } from "react-redux";

const Input = ({ placeholder }) => {
  const viewPortWidth = useViewportWidth();
  const toggleCollapse = useSelector((state) => state.app.toggleCollapsed);

  return (
    <div className="input">
      <AntdInput
        allowClear
        type="text"
        placeholder={placeholder}
        className="input-main"
        style={{
          paddingBottom: "0px",
          position: "relative",
          caretColor:
            viewPortWidth < 1236 && !toggleCollapse ? "transparent" : "black",
        }}
        size="middle"
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
