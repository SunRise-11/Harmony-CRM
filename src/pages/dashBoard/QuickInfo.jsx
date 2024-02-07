import React, { useState } from "react";
import Button from "../../components/Button";
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
      <div className="max-w-[1318px] h-24 pl-5 pr-[50px] py-5 bg-[#B3E3E3] rounded-[5px] shadow justify-start items-center flex">
        <img src={picture} />
        {flag && (
          <div className="mr-[50px]">
            <div class="text-right text-gray-700 text-6xl font-extrabold font-['Lato']">
              782
            </div>
            <div class="text-right text-gray-700 text-sm font-normal font-['Afek 1.5 AAA']">
              מקבלי שירות רשומים במערכת
            </div>
          </div>
        )}
        <div className="flex justify-start items-center gap-x-5 mr-auto">
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
