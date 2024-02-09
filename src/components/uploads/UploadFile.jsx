import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Upload } from "antd";
import InlineSVG from "react-inlinesvg";

import UploadFileImg from "../../assets/icons/uploadFile.svg";

const UploadFile = ({ label, visible }) => {
  const [isHover, setHover] = useState(false);

  return (
    <>
      {visible && (
        <div className="upload">
          <Upload className="real-upload">
            <Button
              className="button"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              icon={
                <InlineSVG
                  src={UploadFileImg}
                  className={`${isHover && "stroke-[#0075FF]"}`}
                />
              }
            >
              <div className="label">{label}</div>
            </Button>
          </Upload>
        </div>
      )}
    </>
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
