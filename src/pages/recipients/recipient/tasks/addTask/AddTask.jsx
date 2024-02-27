import React from "react";
import PropTypes from "prop-types";

import Modal from "../../../../../components/modals/basic/Basic";
import Select from "../../../../../components/select/Select";
import Input from "../../../../../components/input/Input";
import DatePicker from "../../../../../components/pickers/datePicker/DatePicker";
import ToggleSelector from "../../../../../components/toggleSelector/ToggleSelector";
import UploadFile from "../../../../../components/uploads/uploadFile/UploadFile";
import Label from "../../../../../components/labels/label/Label";
import CheckBox from "../../../../../components/checkBox/CheckBox";

import taskImg from "../../../../../assets/icons/task.svg";
import userImg from "../../../../../assets/icons/user.svg";
import InlineSVG from "react-inlinesvg";
import { useState } from "react";

const AddTask = ({ visible, onCancel }) => {
  const [checked, setChecked] = useState(false);
  return (
    <Modal
      px={50}
      py={25}
      visible={visible}
      onCancel={onCancel}
      icon={taskImg}
      title="משימה חדשה"
      content={
        <div className="add-task">
          <div className="add-task-info">
            <div
              style={{
                display: "flex",
                gap: "40px",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "calc(40% - 10px)", paddingRight: "10px" }}>
                <Label title="מקבל שירות" />
                <div className="add-task-user">
                  <InlineSVG
                    src={userImg}
                    stroke="#0075ff"
                    style={{ marginRight: "10px" }}
                  />
                  <span>שמוליק גוטמן</span>
                </div>
              </div>
              <div style={{ width: "calc(60% - 10px)" }}>
                <Label title="פתיחת משימה ל:" />
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    gap: "20px",
                    marginTop: "7px",
                  }}
                >
                  <CheckBox
                    title="מקבל השירות"
                    checked={!checked}
                    onChange={() => setChecked(false)}
                  />
                  <CheckBox
                    title="עצמי"
                    checked={checked}
                    onChange={() => setChecked(true)}
                  />
                </div>
              </div>
            </div>
            <div>
              <Label title="שם משימה" required={true} />
              <Input />
            </div>
            <div>
              <Label title="תיאור" required={true} />
              <Input />
            </div>
          </div>
          <div className="add-task-date">
            <div className="col-2">
              <Label title="תאריך" />
              <DatePicker />
            </div>
            <div className="col-1">
              <Label title="תזכורת" />
              <Select placeholder="יום לפני" />
            </div>
          </div>
          <div className="add-task-state">
            <div>
              <Label title="סטטוס" />
              <ToggleSelector
                flag={false}
                visible={true}
                options={["טרם התחיל", "בתהליך", "הסתיים"]}
              />
            </div>
            <div className="add-task-upload">
              <Label title="צירוף קבצים" />
              <UploadFile label="העלאת קבצים" />
            </div>
          </div>
        </div>
      }
    />
  );
};

AddTask.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func,
};

export default AddTask;
