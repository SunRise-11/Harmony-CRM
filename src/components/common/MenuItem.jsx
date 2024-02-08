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
  subMenuSelected,
}) => {
  return (
    <div
      className={
        !subMenuSelected || (hasSubMenu && !isSelect)
          ? "sub-menu-unselected"
          : "sub-menu-selected"
      }
    >
      <div
        className="menu-item"
        onClick={onClick}
        style={
          isSubMenu
            ? isSelect
              ? {
                  backgroundColor: "#5FBCFF",
                  color: "white",
                }
              : {
                  color: "#434F68",
                }
            : isSelect
            ? hasSubMenu
              ? {
                  backgroundColor: "#BBE3FF",
                  color: "#0075FF",
                  borderTop: subMenuSelected && "1px #0075FF solid",
                }
              : {
                  color: "#FFFFFF",
                  backgroundColor: "#5FBCFF",
                  borderLeft: "3px #0096EB solid",
                }
            : {}
        }
      >
        <div className="menu-item-container">
          <InlineSVG
            src={isSubMenu ? subMenuImg : icon}
            style={
              isSubMenu
                ? isSelect
                  ? {
                      stroke: "white",
                    }
                  : {
                      stroke: "#434F68",
                    }
                : isSelect
                ? hasSubMenu
                  ? {
                      stroke: "#0075FF",
                    }
                  : {
                      stroke: "#FFFFFF",
                    }
                : {}
            }
          />
          <div className="menu-item-title">{title}</div>
        </div>

        {hasSubMenu &&
          (!isSelect ? (
            <InlineSVG src={leftImg} />
          ) : (
            <InlineSVG src={leftImg} className="menu-item-svg" />
          ))}
      </div>
      {isSelect && subMenus.map((subMenuItem) => subMenuItem)}
    </div>
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
  subMenuSelected: PropTypes.bool,
};

MenuItem.defaultProps = {
  hasSubMenu: false,
  isSubMenu: false,
  subMenus: [],
  icon: null,
  subMenuSelected: false,
};

export default MenuItem;
