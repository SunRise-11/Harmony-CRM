import React, { useState } from "react";
import PropTypes from "prop-types";
import InlineSVG from "react-inlinesvg";
import { Button as AntdButton } from "antd";

const Button = ({ icon, label, paddingX, paddingY, onClick }) => {
  const [isHover, setHover] = useState(false);

  return (
    <AntdButton
      className={`bg-white h-full rounded-[10px] shadow text-slate-600
                        border-2 hover:border-[#5FBCFF] hover:text-[#5FBCFF] inline-flex gap-x-[10px] justify-center items-center transition-all`}
      style={{
        padding: `${paddingY}px  ${paddingX}px`,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <InlineSVG src={icon} className={`${isHover && "stroke-[#0075FF]"}`} />
      <div className="text-right text-[15px] font-medium font-['Afek 1.5 AAA']">
        {label}
      </div>
    </AntdButton>
  );
};

Button.propTypes = {
  icon: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  paddingX: PropTypes.number,
  paddingY: PropTypes.number,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  paddingX: 20,
  paddingY: 10,
};

export default Button;
