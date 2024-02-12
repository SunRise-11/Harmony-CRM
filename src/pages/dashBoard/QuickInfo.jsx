import React, { useState } from "react";
import Button from "../../components/button/Button";
import AddUserModal from "../../components/modals/addUser/AddUser";
import AttendModal from "../../components/modals/attend/Attend";
import PropTypes from "prop-types";

import picture from "../../assets/images/picture.png";
import addUserImg from "../../assets/icons/addUser.svg";
import taskImg from "../../assets/icons/task.svg";
import existReportImg from "../../assets/icons/existReport.svg";

const QuickInfo = ({ flag }) => {
  const [isAddVisible, setAddVisible] = useState(false);
  const [isReportVisible, setReportVisible] = useState(false);

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
          <Button icon={taskImg} label="משימות" paddingY={15} />
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
    </>
  );
};

QuickInfo.propTypes = {
  flag: PropTypes.bool,
};

export default QuickInfo;
