import React from "react";
import PropTypes from "prop-types";
import InlineSVG from "react-inlinesvg";

const ModalTitle = ({ icon, title }) => {
  return (
    <div className="modal-title">
      <InlineSVG src={icon} className="modal-title-svg" />
      <div className="modal-title-value">{title}</div>
    </div>
  );
};

ModalTitle.propTypes = {
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};

export default ModalTitle;
