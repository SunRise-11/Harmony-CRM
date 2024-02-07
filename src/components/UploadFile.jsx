import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Upload } from "antd";
import InlineSVG from "react-inlinesvg";

import UploadFileImg from "../assets/icons/uploadFile.svg";

const UploadFile = ({ label, visible }) => {
  const [isHover, setHover] = useState(false);

  return (
    <div className="w-full">
      {visible && (
        <div className="w-full flex flex-col items-start">
          <Upload className="w-full flex justify-start items-center">
            <Button
              className="w-full h-11 pl-5 py-[15px] pr-[15px] flex justify-start items-center
                                        rounded-md shadow border border-zinc-400"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              icon={
                <InlineSVG
                  src={UploadFileImg}
                  className={`${isHover && "stroke-[#0075FF]"}`}
                />
              }
            >
              <div className="w-full text-right text-[15px] font-medium font-['Afek 1.5 AAA']">
                {label}
              </div>
            </Button>
          </Upload>
        </div>
      )}
    </div>
  );
};

UploadFile.propTypes = {
  label: PropTypes.string.isRequired,
  visible: PropTypes.bool,
};

UploadFile.defaultProps = {
  visible: true,
};

export default UploadFile;
