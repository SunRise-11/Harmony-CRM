import React, { useState } from "react";
import PropTypes from "prop-types";
import InlineSVG from "react-inlinesvg";
import { Button as AntdButton } from "antd";

const Button = ({ icon, label, paddingX, paddingY, onClick }) => {
  const [isHover, setHover] = useState(false);

  return (
    <AntdButton
      className="button"
      style={{
        padding: `${paddingY}px ${paddingX}px`,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <InlineSVG
        src={icon}
        style={{
          stroke: isHover && "#0075FF",
        }}
      />
      <div className="button-label">{label}</div>
    </AntdButton>
  );
};

Button.propTypes = {
  icon: PropTypes.any,
  label: PropTypes.string.isRequired,
  paddingX: PropTypes.number,
  paddingY: PropTypes.number,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  icon: null,
  paddingX: 20,
  paddingY: 10,
};

export default Button;
