import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import InlineSVG from "react-inlinesvg";
import { TimePicker as AntdTimePicker } from "antd";

import downIcon from "../../../assets/icons/chevrons/down.svg";

const TimePicker = ({ pl, pr, py }) => {
  return (
    <div className="picker">
      <AntdTimePicker
        style={{
          paddingLeft: `${pl}px`,
          paddingRight: `${pr}px`,
          paddingTop: `${py}px`,
          paddingBottom: `${py}px`,
        }}
        className="picker-main"
        format={"HH:mm"}
        defaultValue={dayjs("12:08", "HH:MM")}
        suffixIcon={<InlineSVG src={downIcon} />}
        allowClear={false}
      />
    </div>
  );
};

TimePicker.propTypes = {
  pl: PropTypes.number,
  pr: PropTypes.number,
  py: PropTypes.number,
};

TimePicker.defaultProps = {
  pl: 10,
  pr: 15,
  py: 10,
};

export default TimePicker;
