import React, { useState } from "react";
import PropTypes from "prop-types";
import { Segmented } from "antd";
import { ConfigProvider } from "antd";

const ToggleSelector = ({ visible, options, flag }) => {
  return (
    <ConfigProvider direction="rtl">
      <div>
        {visible && (
          <Segmented
            className={`${
              flag ? "toggle1" : "toggle2"
            } shadow border border-zinc-400`}
            options={options}
          ></Segmented>
        )}
      </div>
    </ConfigProvider>
  );
};

ToggleSelector.propTypes = {
  visible: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  flag: PropTypes.bool,
};

ToggleSelector.defaultProps = {
  flag: 1,
  paddingX: 30,
  paddingY: 10,
};

export default ToggleSelector;
