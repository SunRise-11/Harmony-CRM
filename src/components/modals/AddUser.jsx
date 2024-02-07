import React from "react";
import PropTypes from "prop-types";

import Modal from "./Basic";
import Input from "../Input";
import Select from "../Select";
import Label from "../Label";
import addUserImg from "../../assets/icons/addUser.svg";

const AddUserModal = ({ visible, onCancel }) => {
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      icon={addUserImg}
      title="פרטי מקבל שירות חדש"
      flag={true}
      content={
        <div className="adduser">
          <div className="py-[30px] grid grid-cols-3 gap-x-5 justify-start items-center border-b border-gray-300">
            <div className="col-1">
              <Label title="שם פרטי" required={true} />
              <Input />
            </div>
            <div className="col-2">
              <Label title="שם משפחה" required={true} />
              <Input />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 pb-[30px] border-b border-gray-300">
            <div className="col-1">
              <Label title="טלפון נייד" required={true} />
              <Input />
            </div>
            <div className="col-1">
              <Label title="טלפון בבית" />
              <Input />
            </div>
            <div className="col-1">
              <Label title="טלפון נוסף" />
              <Input />
            </div>
            <div className="col-3">
              <Label title="דואר אלקטרוני" />
              <Input />
            </div>
          </div>
          <div className="w-full">
            <Label title="בחירת תוכנית" required={true} />
            <Select placeholder="בחר... תעסוקה נתמכת / מפעל מוגן / מועדון תעסוקתי..." />
          </div>
        </div>
      }
    />
  );
};

AddUserModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func,
};

export default AddUserModal;
