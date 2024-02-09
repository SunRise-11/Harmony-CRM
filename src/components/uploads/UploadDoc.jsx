import React, { useState } from "react";
import PropTypes from "prop-types";
import InlineSVG from "react-inlinesvg";
import { Button, Upload } from "antd";

import Label from "../labels/Label";
import UploadDocImg from "../../assets/icons/uploadDoc.svg";

const UploadDoc = ({ title, label, visible }) => {
  const [isHover, setHover] = useState(false);

  return (
    <>
      {visible && (
        <div className="upload">
          <Label title={title} />
          <Upload className="upload-main">
            <Button
              className="upload-main-button"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              icon={
                <InlineSVG
                  src={UploadDocImg}
                  className={`${isHover && "stroke-[#0075FF]"}`}
                />
              }
            >
              <div className="upload-main-label">{label}</div>
            </Button>
          </Upload>
        </div>
      )}
    </>
  );
};

UploadDoc.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  visible: PropTypes.bool,
};

export default UploadDoc;
