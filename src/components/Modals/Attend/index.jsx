import React, { useState } from "react";
import PropTypes from "prop-types";

import Modal from "../Basic";
import DatePicker from "../../Pickers/DatePicker";
import TimePicker from "../../Pickers/TimePicker";
import CheckBox from "../../CheckBox";
import ToggleSelector from "../../ToggleSelector";
import UploadDoc from "../../Uploads/UploadDoc";
import Label from "../../Labels/Label";

import createIcon from "../../../assets/icons/master/create.svg";

const AttendModal = ({ visible, onCancel }) => {
  const [isVacation, setVacation] = useState(false);
  const [isSickness, setSickness] = useState(false);

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      icon={createIcon}
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
