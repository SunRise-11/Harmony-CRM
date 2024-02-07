import React from "react";
import PropTypes from "prop-types";
import { Input as AntdInput } from "antd";
import InlineSVG from "react-inlinesvg";

const Input = ({ placeholder }) => {
  return (
    <div className="w-full flex flex-col justify-center items-start">
      <AntdInput
        allowClear
        type="text"
        placeholder={placeholder}
        className="w-full h-11 pl-2.5 pr-[15px] py-[3px] bg-white rounded-[10px] border-2 border-zinc-400 hover:border-[#5FBBFF]"
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
