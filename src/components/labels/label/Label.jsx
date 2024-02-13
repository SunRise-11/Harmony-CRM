import React from "react";
import Proptypes from "prop-types";

const Label = ({ title, required, visible }) => {
  return (
    <div>
      {visible && (
        <div className="label">
          <div className="label-title">{title}</div>
          <div
            className="label-require"
            style={{ display: required ? "inline-block" : "none" }}
          >
            *
          </div>
        </div>
      )}
    </div>
  );
};

Label.propTypes = {
  visible: Proptypes.bool,
  title: Proptypes.string.isRequired,
  required: Proptypes.bool,
};

Label.defaultProps = {
  visible: true,
  required: false,
};

export default Label;
