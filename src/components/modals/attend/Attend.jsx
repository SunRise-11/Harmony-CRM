import React, { useState } from "react";
import PropTypes from "prop-types";

import Modal from "../basic/Basic";
import DatePicker from "../../pickers/datePicker/DatePicker";
import TimePicker from "../../pickers/timePicker/TimePicker";
import CheckBox from "../../checkBox/CheckBox";
import ToggleSelector from "../../toggleSelector/ToggleSelector";
import UploadDoc from "../../uploads/uploadDoc/UploadDoc";
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
            <div>
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
              </div>
            </div>
            {isVacation && (
              <div>
                <Label title="אורך החופשה" required={true} visible={true} />
                <ToggleSelector
                  options={["חצי יום", "יום"]}
                  flag={true}
                  visible={true}
                />
              </div>
            )}
          </div>
          <div className="attend-sickness">
            <div>
              <Label title="מחלה" required={true} />
              <div
                className="attend-sickness-checkbox"
                style={{ width: "100%" }}
              >
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
              </div>
            </div>
            {isSickness && (
              <UploadDoc title="אישור מחלה" label="העלאת מסמך" visible={true} />
            )}
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
