import React, { useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import InlineSVG from "react-inlinesvg";
import { TimePicker as AntdTimePicker } from "antd";

import downImg from "../assets/icons/down.svg";
const TimePicker = ({ pl, pr, py }) => {
  return (
    <div className="w-full h-11 flex flex-col justify-center items-start">
      <AntdTimePicker
        style={{
          paddingLeft: `${pl}px`,
          paddingRight: `${pr}px`,
          paddingTop: `${py}px`,
          paddingBottom: `${py}px`,
        }}
        className="w-full rounded-[10px] border-2"
        format={"HH:mm"}
        defaultValue={dayjs("12:08", "HH:MM")}
        suffixIcon={<InlineSVG src={downImg} />}
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
