import React, { useState } from "react";
import Button from "../../components/common/Button";
import AddUserModal from "../../components/modals/AddUser";
import AttendModal from "../../components/modals/Attend";
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
          <div style={{ marginRight: "50px" }}>
            <div className="quick-info-text1">782</div>
            <div className="quick-info-text2">מקבלי שירות רשומים במערכת</div>
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
