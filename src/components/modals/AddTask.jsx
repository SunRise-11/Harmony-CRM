import React from "react";
import PropTypes from "prop-types";

import Modal from "./Basic";
import Select from "../Select";
import Input from "../Input";
import DatePicker from "../DatePicker";
import ToggleSelector from "../ToggleSelector";
import UploadFile from "../UploadFile";
import Label from "../Label";

import taskImg from "../../assets/icons/task.svg";
import userImg from "../../assets/icons/user.svg";

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
        <div className="addtask">
          <div className="task">
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
          <div className="date">
            <div className="col-2">
              <Label title="תאריך" />
              <DatePicker />
            </div>
            <div className="col-1">
              <Label title="תזכורת" />
              <Select placeholder="יום לפני" />
            </div>
          </div>
          <div className="state">
            <div>
              <Label title="סטטוס" />
              <ToggleSelector
                flag={false}
                visible={true}
                options={["טרם התחיל", "בתהליך", "הסתיים"]}
              />
            </div>
            <div className="mr-24">
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
