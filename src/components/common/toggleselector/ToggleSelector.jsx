import React, { useState } from "react";
import PropTypes from "prop-types";
import { Segmented } from "antd";
import { ConfigProvider } from "antd";

const ToggleSelector = ({ visible, options, flag }) => {
  return (
    <div className="toggle-selector">
      <ConfigProvider direction="rtl">
        <div>
          {visible && (
            <Segmented
              className={`${flag ? "toggle1" : "toggle2"} toggle-selector`}
              options={options}
            ></Segmented>
          )}
        </div>
      </ConfigProvider>
    </div>
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
