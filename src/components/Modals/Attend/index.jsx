import React, { useState } from "react";
import PropTypes from "prop-types";

import Modal from "../Basic";
import DatePicker from "../../Pickers/DatePicker";
import TimePicker from "../../Pickers/TimePicker";
import ToggleSelector from "../../ToggleSelector";
import UploadDoc from "../../Uploads/UploadDoc";
import Label from "../../Labels/Label";

import { Radio } from "antd";
import createIcon from "../../../assets/icons/master/create.svg";

const AttendModal = ({ visible, onCancel }) => {
  const [isVacation, setVacation] = useState(false);
  const [isSickness, setSickness] = useState(false);

  const onChangeVacation = (e) => {
    setVacation(e.target.value);
  };

  const onChangeSickness = (e) => {
    setSickness(e.target.value);
  };

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
              <div className="attend-vacation-radioGroup">
                <Radio.Group onChange={onChangeVacation} value={isVacation}>
                  <Radio value={false}>לא</Radio>
                  <Radio value={true}>כן</Radio>
                </Radio.Group>
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
                className="attend-sickness-radioGroup"
              >
                <Radio.Group onChange={onChangeSickness} value={isSickness}>
                  <Radio value={false}>לא</Radio>
                  <Radio value={true}>כן</Radio>
                </Radio.Group>
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
