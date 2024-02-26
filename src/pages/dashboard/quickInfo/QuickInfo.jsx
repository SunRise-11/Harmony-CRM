import React, { useState } from "react";
import Button from "../../../components/button/Button";
import AddUserModal from "../../../components/modals/addUser/AddUser";
import AttendModal from "../../../components/modals/attend/Attend";
import PropTypes from "prop-types";

import picture from "../../../assets/images/picture.png";
import addUserImg from "../../../assets/icons/addUser.svg";
import taskImg from "../../../assets/icons/task.svg";
import existReportImg from "../../../assets/icons/existReport.svg";
import AddTask from "../../../components/modals/addTask/AddTask";

const QuickInfo = ({ flag }) => {
  const [isAddVisible, setAddVisible] = useState(false);
  const [isReportVisible, setReportVisible] = useState(false);
  const [isTaskVisible, setIsTaskVisible] = useState(false);

  return (
    <>
      <div className="quick-info">
        <img src={picture} />
        {flag && (
          <div className="quick-info-text">
            <div className="text1">782</div>
            <div className="text2">מקבלי שירות רשומים במערכת</div>
          </div>
        )}
        <div className="quick-info-buttons">
          <Button
            icon={addUserImg}
            label="הוספת מקבל שירות"
            paddingY={15}
            onClick={() => setAddVisible(true)}
          />
          <Button
            icon={taskImg}
            label="משימה חדשה"
            paddingY={15}
            onClick={() => setIsTaskVisible(true)}
          />
          <Button
            icon={existReportImg}
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
