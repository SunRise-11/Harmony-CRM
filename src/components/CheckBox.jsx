import React, { useState } from "react";
import PropTypes from "prop-types";
import { Checkbox } from "antd";

const CheckBox = ({ title, onChange, checked }) => {
  return (
    <div className="flex flex-row justify-start items-center gap-x-2.5">
      <Checkbox
        onChange={onChange}
        checked={checked}
        defaultChecked={checked}
      />
      <div className="text-right text-zinc-700 text-lg font-normal font-['Afek 1.5 AAA']">
        {title}
      </div>
    </div>
  );
};

CheckBox.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  checked: PropTypes.bool.isRequired,
};

export default CheckBox;
