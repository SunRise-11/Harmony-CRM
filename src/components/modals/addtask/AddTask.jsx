import React from "react";
import PropTypes from "prop-types";

import Modal from "../basic/Basic";
import Select from "../../common/select/Select";
import Input from "../../common/input/Input";
import DatePicker from "../../pickers/DatePicker";
import ToggleSelector from "../../common/toggleselector/ToggleSelector";
import UploadFile from "../../uploads/UploadFile";
import Label from "../../labels/label/Label";
import taskImg from "../../../assets/icons/task.svg";
import userImg from "../../../assets/icons/user.svg";

const AddTask = ({ visible, onCancel }) => {
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
            <div className="w-half">
              <Label title="מקבל שירות" />
              <Select placeholder="בחירת מקבל שירות" icon={userImg} />
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
