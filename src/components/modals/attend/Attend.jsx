import React, { useState } from "react";
import PropTypes from "prop-types";

import Modal from "../basic/Basic";
import DatePicker from "../../pickers/DatePicker";
import TimePicker from "../../pickers/TimePicker";
import CheckBox from "../../common/checkbox/CheckBox";
import ToggleSelector from "../../common/toggleselector/ToggleSelector";
import UploadDoc from "../../uploads/UploadDoc";
import Label from "../../labels/label/Label";

import reportImg from "../../../assets/icons/report.svg";

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
        <div className="attend">
          <div className="attend-time">
            <div>
              <Label title="תאריך" required={true} />
              <DatePicker />
            </div>
            <div>
              <Label title="שעת התחלה" />
              <TimePicker />
            </div>
            <div>
              <Label title="שעת סיום" />
              <TimePicker />
            </div>
          </div>
          <div className="attend-vacation">
            <Label title="חופשה" required={true} />
            <div className="attend-vacation-checkbox">
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
          <div className="attend-sickness">
            <Label title="מחלה" required={true} />
            <div className="attend-sickness-checkbox">
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
