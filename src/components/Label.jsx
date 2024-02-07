import React from "react";
import Proptypes from "prop-types";

const Label = ({ title, required, visible }) => {
  return (
    <div>
      {visible && (
        <div className="h-[30px] flex flex-row justify-start items-start gap-x-0.5">
          <div className="text-right text-zinc-700 text-[15px] font-medium font-['Afek 1.5 AAA']">
            {title}
          </div>
          <div
            className="text-red-400 text-2xl font-bold font-['Afek 1.5 AAA']"
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
