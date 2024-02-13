import React, { useState } from "react";
import PropTypes from "prop-types";
import { DatePicker as AntdDatePicker } from "antd";
import InlineSVG from "react-inlinesvg";
import { ConfigProvider } from "antd";

import planImg from "../../../assets/icons/plan.svg";

const DatePicker = ({ pl, pr, py }) => {
  const [isHover, setHover] = useState(false);

  return (
    <div className="picker">
      <ConfigProvider direction="rtl">
        <AntdDatePicker
          style={{
            paddingLeft: `${pl}px`,
            paddingRight: `${pr}px`,
            paddingTop: `${py}px`,
            paddingBottom: `${py}px`,
          }}
          className="picker-main"
          placeholder="23/12/2023"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          suffixIcon={
            <InlineSVG
              src={planImg}
              className={`${isHover && "stroke-[#0075FF]"}`}
            />
          }
        />
      </ConfigProvider>
    </div>
  );
};

DatePicker.propTypes = {
  pl: PropTypes.number,
  pr: PropTypes.number,
  py: PropTypes.number,
};

DatePicker.defaultProps = {
  pl: 10,
  pr: 15,
  py: 10,
};

export default DatePicker;
