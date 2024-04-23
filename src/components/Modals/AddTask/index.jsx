import React from "react";
import PropTypes from "prop-types";

import Modal from "../Basic";
import Select from "../../Select";
import Input from "../../Input";
import DatePicker from "../../Pickers/DatePicker";
import ToggleSelector from "../../ToggleSelector";
import UploadFile from "../../Uploads/UploadFile";
import Label from "../../Labels/Label";

import clipboardCheckIcon from "../../../assets/icons/master/clipboard-check.svg";
import userIcon from "../../../assets/icons/master/user.svg";

const AddTask = ({ visible, onCancel }) => {
  return (
    <Modal
      px={50}
      py={25}
      visible={visible}
      onCancel={onCancel}
      icon={clipboardCheckIcon}
      title="משימה חדשה"
      content={
        <div className="add-task">
          <div className="add-task-info">
            <div className="add-task-info-name">
              <Label title="מקבל שירות" />
              <Select placeholder="בחירת מקבל שירות" icon={userIcon} />
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
            <div className="add-task-state-toggle">
              <Label className="label" title="סטטוס" />
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
