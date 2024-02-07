import React from "react";
import PropTypes from "prop-types";
import InlineSVG from "react-inlinesvg";

const ModalTitle = ({ icon, title }) => {
  return (
    <div className="h-[34px] pb-2.5 border-b border-amber-500 justify-start items-center gap-x-[5px] inline-flex">
      <InlineSVG src={icon} className=" stroke-[#FF8A00]" />
      <div className="text-amber-500 text-lg font-medium font-['Afek 1.5 AAA']">
        {title}
      </div>
    </div>
  );
};

ModalTitle.propTypes = {
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};

export default ModalTitle;
