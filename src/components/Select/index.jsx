import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactSelect from "react-select";
import { components } from "react-select";
import InlineSVG from "react-inlinesvg";
import { useSelector } from "react-redux";

import downIcon from "../../assets/icons/chevrons/down.svg";

const Select = ({
  value,
  placeholder,
  options,
  icon,
  onChange,
  menuPlacement,
  menuPosition,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [isHover, setHover] = useState(false);
  const direction = useSelector((state) => state.app.direction);

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <InlineSVG
          style={{ cursor: "pointer" }}
          src={downIcon}
          style={
            isOpen
              ? { transform: "rotate(0deg)" }
              : { transform: "rotate(-90deg)" }
          }
        />
      </components.DropdownIndicator>
    );
  };

  const handleMenuOpen = () => {
    setOpen(true);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };

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
        menuPlacement={menuPlacement}
        menuPosition={menuPosition}
        onChange={onChange}
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuClose}
        components={{ DropdownIndicator }}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "white",
            borderColor: "#B9B9B9",
            borderWidth: "2px",
            borderRadius: "10px",
            // paddingTop: "px",
            paddingBottom: "2px",
            paddingRight: `${icon && direction === "rtl" ? "30px" : "0px"}`,
            paddingLeft: `${icon && direction === "ltr" ? "30px" : "0px"}`,
          }),
          indicatorSeparator: (base) => ({
            ...base,
            width: "0px",
          }),
          indicatorContainer: (base) => ({
            ...base,
            transition: "",
          }),
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      <div className="select-icon">
        <InlineSVG
          src={icon}
          className="select-icon-svg"
          style={{
            stroke: isHover && "#0075FF",
          }}
        />
      </div>
    </div>
  );
};

Select.propTypes = {
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.any),
  icon: PropTypes.any,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  options: [],
  onChange: () => {},
};

export default Select;
