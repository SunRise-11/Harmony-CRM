import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactSelect from "react-select";
import InlineSVG from "react-inlinesvg";

const Select = ({ placeholder, options, icon }) => {
  const [isHover, setHover] = useState(false);

  return (
    <div className="select">
      <ReactSelect
        className="select-main"
        isRtl={true}
        isSearchable={true}
        isClearable={true}
        options={options}
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
            paddingLeft: "10px",
            paddingRight: `${icon ? "30px" : "0px"}`,
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
        style={{
          stroke: isHover && "#0075FF",
        }}
        className="select-svg"
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
