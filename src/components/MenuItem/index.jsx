import React from "react";
import PropTypes from "prop-types";
import InlineSVG from "react-inlinesvg";

import leftIcon from "../../assets/icons/chevrons/left.svg";
import rightIcon from "../../assets/icons/chevrons/right.svg";

import hexagonIcon from "../../assets/icons/master/hexagon.svg";
import { useSelector } from "react-redux";

const colors = {
  original: {
    backgroundColor: "#5FBCFF",
    color: "#0075FF",
  },
  suggested: {
    backgroundColor: "#70c6dd",
    color: "#70C6DD",
  },
  monday: {
    backgroundColor: "#01c776",
    color: "#78E2B8",
  },
  dynamics: {
    backgroundColor: "#3594dd",
    color: "#0CBBFF",
  },
};

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
  const theme = useSelector((state) => state.app.theme);
  const direction = useSelector((state) => state.app.direction);
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
                  backgroundColor: colors[theme].backgroundColor,
                  color: "white",
                }
              : {
                  color: "#434F68",
                }
            : isSelect
            ? hasSubMenu
              ? {
                  backgroundColor: colors[theme].backgroundColor + "44",
                  color: colors[theme].color,
                  borderTop:
                    subMenuSelected && `1px ${colors[theme].color} solid`,
                }
              : {
                  color: "#FFFFFF",
                  backgroundColor: colors[theme].backgroundColor,
                  borderLeft: `3px ${colors[theme].color} solid`,
                }
            : {}
        }
      >
        <div className="menu-item-container">
          <InlineSVG
            width={isSubMenu ? 8 : 24}
            height={isSubMenu ? 8 : 24}
            src={isSubMenu ? hexagonIcon : icon}
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
                      stroke: colors[theme].color,
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
            <InlineSVG src={direction === "rtl" ? leftIcon : rightIcon} />
          ) : (
            <InlineSVG
              src={direction === "rtl" ? leftIcon : rightIcon}
              className="menu-item-svg"
            />
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
