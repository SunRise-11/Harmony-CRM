import React from "react";
import PropTypes from "prop-types";
import InlineSVG from "react-inlinesvg";

import leftImg from "../assets/icons/left.svg";
import subMenuImg from "../assets/icons/subMenu.svg";

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
        className={`w-60 h-[54px] pl-2.5 pr-5 py-[15px] ${
          isSelect
            ? hasSubMenu
              ? "bg-[#E6F7FC]"
              : "bg-[#5FBCFF] border-l-2 border-[#0096EB]"
            : "hover:bg-[#D3EDF6]"
        } justify-between items-center inline-flex cursor-pointer`}
        onClick={onClick}
      >
        <div className="justify-end items-center gap-[15px] flex">
          <InlineSVG
            src={`${isSubMenu ? subMenuImg : icon}`}
            className={`${
              isSelect && (hasSubMenu ? "stroke-[#0075FF]" : "stroke-white")
            }`}
          />
          <div
            className={`${
              isSelect
                ? hasSubMenu
                  ? "text-[#0075FF] text-lg"
                  : isSubMenu
                  ? "text-white text-[15px]"
                  : "text-white text-lg"
                : isSubMenu
                ? "text-slate-600 text-[15px]"
                : "text-slate-600 text-lg"
            } text-right font-medium font-['Afek 1.5 AAA']`}
          >
            {title}
          </div>
        </div>

        {hasSubMenu &&
          (!isSelect ? (
            <InlineSVG src={leftImg} />
          ) : (
            <InlineSVG
              src={leftImg}
              className="duration-200 ease-in-out -rotate-90"
            />
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
