import React from "react";
import PropTypes from "prop-types";
import InlineSVG from "react-inlinesvg";

const TitleLabel = ({ icon, title }) => {
  return (
    <div className="title-label">
      <InlineSVG src={icon} style={{ stroke: "#13566C" }} />
      <div className="title-label-main">{title}</div>
    </div>
  );
};

TitleLabel.prototypes = {
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};

export default TitleLabel;
