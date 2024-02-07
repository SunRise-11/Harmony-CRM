import React from "react";
import InlineSVG from "react-inlinesvg";
import PropTypes from "prop-types";

import clockImg from "../assets/icons/clock.svg";

const TimeLabel = ({ content, color }) => {
  return (
    <div
      className={`rounded-[5px] py-[3px] pl-2.5 pr-[5px] flex justify-between gap-x-[5px]`}
      style={{ backgroundColor: color }}
    >
      <InlineSVG src={clockImg} />
      <div className="text-white text-[11px] font-normal font-['Poppins'] leading-[17.60px] tracking-tight">
        {content}
      </div>
    </div>
  );
};

TimeLabel.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default TimeLabel;
