import React from "react";
import PropTypes from "prop-types";
import InlineSVG from "react-inlinesvg";

import leftImg from "../../assets/icons/left.svg";
import subMenuImg from "../../assets/icons/subMenu.svg";

const MenuItem = ({
  hasSubMenu,
  isSubMenu,
  icon,
  title,
  subMenus,
  isSelect,
  onClick,
}) => {
  return (
    <>
      <div
        className="menu-item"
        style={
          isSelect
            ? hasSubMenu
              ? { backgroundColor: "#E6F7FC" }
              : {
                  backgroundColor: "#F7F7F7",
                  borderLeftWidth: "2px",
                  borderColor: "#0096Eb",
                }
            : { backgroundColor: "#D3EDE6" }
        }
        onClick={onClick}
      >
        <div>
          <InlineSVG
            src={isSubMenu ? subMenuImg : icon}
            style={{
              stroke: isSelect && (hasSubMenu ? "#0075FF" : "white"),
            }}
          />
          <div
            className="menu-item-title"
            style={
              isSelect
                ? hasSubMenu
                  ? {
                      color: "#0075FF",
                      fontWeight: "1.75rem",
                      fontSize: "1.125rem",
                    }
                  : isSubMenu
                  ? { color: "white", fontSize: "15px" }
                  : {
                      color: "white",
                      fontWeight: "1.75rem",
                      fontSize: "1.125rem",
                    }
                : isSubMenu
                ? { color: "#475569", fontSize: "15px" }
                : {
                    color: "#475569",
                    fontWeight: "1.75rem",
                    fontSize: "1.125rem",
                  }
            }
          >
            {title}
          </div>
        </div>

        {hasSubMenu &&
          (!isSelect ? (
            <InlineSVG src={leftImg} />
          ) : (
            <InlineSVG src={leftImg} className="menu-item-svg" />
          ))}
      </div>
      {isSelect && subMenus.map((subMenuItem) => subMenuItem)}
    </>
  );
};

MenuItem.propTypes = {
  hasSubMenu: PropTypes.bool,
  isSubMenu: PropTypes.bool,
  icon: PropTypes.any,
  title: PropTypes.string.isRequired,
  subMenus: PropTypes.arrayOf(PropTypes.any),
  isSelect: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

MenuItem.defaultProps = {
  hasSubMenu: false,
  isSubMenu: false,
  subMenus: [],
  icon: null,
};

export default MenuItem;
