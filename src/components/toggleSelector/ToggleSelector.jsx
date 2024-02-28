import React from "react";
import PropTypes from "prop-types";
import { Segmented, ConfigProvider } from "antd";
import { useSelector } from "react-redux";

const ToggleSelector = ({ visible, options }) => {
  const direction = useSelector((state) => state.app.direction);
  return (
    <div className="toggle-selector">
      <ConfigProvider direction={direction}>
        {visible && (
          <Segmented className="toggle-selector" options={options}></Segmented>
        )}
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
