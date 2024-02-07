import React, { useState } from "react";
import PropTypes from "prop-types";
import InlineSVG from "react-inlinesvg";
import { Button, Upload } from "antd";

import Label from "./Label";
import UploadDocImg from "../assets/icons/uploadDoc.svg";

const UploadDoc = ({ title, label, visible }) => {
  const [isHover, setHover] = useState(false);

  return (
    <div className="w-full">
      {visible && (
        <div className="w-full flex flex-col items-start">
          <Label title={title} />
          <Upload className="w-full flex justify-start items-center">
            <Button
              className="w-full h-11 px-5 py-2.5 flex justify-start items-center
                                 rounded-[10px] border border-gray-300 shadow hover: stroke-[#0075FF]"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              icon={
                <InlineSVG
                  src={UploadDocImg}
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

UploadDoc.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  visible: PropTypes.bool,
};

export default UploadDoc;
