import React, { useState } from "react";
import PropTypes from "prop-types";

import Modal from "./Basic";
import DatePicker from "../DatePicker";
import TimePicker from "../TimePicker";
import CheckBox from "../CheckBox";
import ToggleSelector from "../ToggleSelector";
import UploadDoc from "../UploadDoc";
import Label from "../Label";

import reportImg from "../../assets/icons/report.svg";

const AttendModal = ({ visible, onCancel }) => {
  const [isVacation, setVacation] = useState(false);
  const [isSickness, setSickness] = useState(false);

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      icon={reportImg}
      title="טופס דיווח נוכחות"
      flag={false}
      content={
        <div className="flex flex-col gap-y-5 py-[30px] mt-5 border-b border-gray-300">
          <div className="grid grid-cols-3 justify-start items-center gap-x-5">
            <div className="col-span-1">
              <Label title="תאריך" required={true} />
              <DatePicker />
            </div>
            <div className="col-span-1">
              <Label title="שעת התחלה" />
              <TimePicker />
            </div>
            <div className="col-span-1">
              <Label title="שעת סיום" />
              <TimePicker />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start pb-[15px]">
            <Label title="חופשה" required={true} />
            <div className="flex flex-row items-center gap-x-[60px]">
              <CheckBox
                title="לא"
                checked={!isVacation}
                onChange={() => setVacation(false)}
              />
              <CheckBox
                title="כן"
                checked={isVacation}
                onChange={() => setVacation(true)}
              />
              <div>
                <Label
                  title="אורך החופשה"
                  required={true}
                  visible={isVacation}
                />
                <ToggleSelector
                  visible={isVacation}
                  options={["חצי יום", "יום"]}
                  flag={true}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start pb-[15px]">
            <Label title="מחלה" required={true} />
            <div className="w-full flex flex-row items-center gap-x-[60px]">
              <CheckBox
                title="לא"
                checked={!isSickness}
                onChange={() => setSickness(false)}
              />
              <CheckBox
                title="כן"
                checked={isSickness}
                onChange={() => setSickness(true)}
              />
              <UploadDoc
                visible={isSickness}
                title="אישור מחלה"
                label="העלאת מסמך"
              />
            </div>
          </div>
        </div>
      }
    />
  );
};

AttendModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func,
};

export default AttendModal;
