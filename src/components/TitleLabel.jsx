import React from "react";
import PropTypes from "prop-types";
import InlineSVG from "react-inlinesvg";

const TitleLabel = ({ icon, title }) => {
  return (
    <div className="flex items-center justify-start gap-x-[5px]">
      <InlineSVG src={icon} className="stroke-[#4A9ECD]" />
      <div className=" text-[#4A9ECD] text-lg font-normal font-['Afek 1.5 AAA']">
        {title}
      </div>
    </div>
  );
};

TitleLabel.prototypes = {
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};

export default TitleLabel;
