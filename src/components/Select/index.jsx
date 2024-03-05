import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactSelect from "react-select";
import InlineSVG from "react-inlinesvg";
import { useSelector } from "react-redux";

const Select = ({ value, placeholder, options, icon }) => {
  const [isHover, setHover] = useState(false);
  const direction = useSelector((state) => state.app.direction);

  return (
    <div className="select">
      <ReactSelect
        className="select-main"
        isRtl={direction === "rtl"}
        isSearchable={true}
        isClearable={true}
        options={options}
        value={value}
        placeholder={placeholder}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "white",
            borderColor: "#B9B9B9",
            borderWidth: "2px",
            borderRadius: "10px",
            paddingTop: "3px",
            paddingBottom: "3px",
            paddingRight: `${icon && direction === "rtl" ? "30px" : "0px"}`,
            paddingLeft: `${icon && direction === "ltr" ? "30px" : "0px"}`,
          }),
          indicatorSeparator: (base) => ({
            ...base,
            width: "0px",
          }),
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      <InlineSVG
        src={icon}
        className="select-svg"
        style={{
          stroke: isHover && "#0075FF",
        }}
      />
    </div>
  );
};

Select.propTypes = {
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.any),
  icon: PropTypes.any,
};

Select.defaultProps = {
  options: [],
};

export default Select;
