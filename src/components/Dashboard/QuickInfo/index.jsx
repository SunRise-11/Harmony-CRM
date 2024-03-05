import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import Button from "../../Button";
import AddUserModal from "../../Modals/AddUser";
import AttendModal from "../../Modals/Attend";
import AddTask from "../../Modals/AddTask";

import originalPicture from "../../../assets/images/picture-original.png";
import suggestedPicture from "../../../assets/images/picture-suggested.png";
import mondayPicture from "../../../assets/images/picture-monday.png";
import dynamicsPicture from "../../../assets/images/picture-dynamics.png";

import addUserIcon from "../../../assets/icons/master/user-plus.svg";
import clipboardCheckIcon from "../../../assets/icons/master/clipboard-check.svg";
import fileUserIcon from "../../../assets/icons/master/file-user.svg";

const QuickInfo = ({ flag }) => {
  const [isAddVisible, setAddVisible] = useState(false);
  const [isReportVisible, setReportVisible] = useState(false);
  const [isTaskVisible, setIsTaskVisible] = useState(false);
  const picture = {
    original: originalPicture,
    suggested: suggestedPicture,
    monday: mondayPicture,
    dynamics: dynamicsPicture,
  };

  const theme = useSelector((state) => state.app.theme);
  return (
    <>
      <div className="quick-info">
        <img src={picture[theme]} />
        {flag && (
          <div className="quick-info-text">
            <div className="text1">782</div>
            <div className="text2">מקבלי שירות רשומים במערכת</div>
          </div>
        )}
        <div className="quick-info-buttons">
          <Button
            icon={addUserIcon}
            label="הוספת מקבל שירות"
            paddingY={15}
            onClick={() => setAddVisible(true)}
          />
          <Button
            icon={clipboardCheckIcon}
            label="משימה חדשה"
            paddingY={15}
            onClick={() => setIsTaskVisible(true)}
          />
          <Button
            icon={fileUserIcon}
            label="דיווח נוכחות"
            paddingY={15}
            onClick={() => setReportVisible(true)}
          />
        </div>
      </div>
      <AddUserModal
        onCancel={() => setAddVisible(false)}
        visible={isAddVisible}
      />
      <AttendModal
        onCancel={() => setReportVisible(false)}
        visible={isReportVisible}
      />
      <AddTask
        visible={isTaskVisible}
        onCancel={() => setIsTaskVisible(false)}
      />
    </>
  );
};

QuickInfo.propTypes = {
  flag: PropTypes.bool,
};

export default QuickInfo;
