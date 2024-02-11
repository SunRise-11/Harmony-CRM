import React from "react";
import PropTypes from "prop-types";

const ColorLabel = ({ color, text, flag }) => {
  return (
    <div
      className="ColorLabel"
      style={{
        backgroundColor: flag && color,
        color: flag ? "white" : color,
        borderColor: !flag && color,
      }}
    >
      {text}
    </div>
  );
};

ColorLabel.propTypes = {
  color: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
  flag: PropTypes.bool.isRequired
};

export default ColorLabel;
