import React, { useState } from "react";
import InlineSVG from "react-inlinesvg";
import ReactModal from "react-modal";
import { Input } from "antd";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

import closeIcon from "../../../assets/icons/master/close.svg";
import calendarPlusIcon from "../../../assets/icons/master/calendar-plus.svg";
import locationIcon from "../../../assets/icons/master/location.svg";

import ModalTitle from "../../Labels/ModalTitle";
import Button from "../../Button";
import DatePicker from "../../Pickers/DatePicker";
import CheckBox from "../../CheckBox";

ReactModal.setAppElement("#root");
const { TextArea } = Input;
const modalVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const NewEvent = ({ visible, onCancel }) => {
  const direction = useSelector((state) => state.app.direction);
  const [checked, setChecked] = useState(false);
  const Styles = {
    content: {
      direction,
      background: "#ffffff",
      borderRadius: "10px",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "end",
      inset: "0",
      maxWidth: "80vw",
    },

    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
  };
  return (
    <ReactModal
      isOpen={visible}
      style={Styles}
      className={direction === "ltr" ? "direction-modal-ltr" : ""}
    >
      <AnimatePresence>
        {visible && (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.7 }}
          >
            <div
              className="basic-modal"
              style={{
                padding: "50px 50px",
                width: "80vw",
                maxWidth: "500px",
              }}
            >
              <button className="basic-modal-cancel-btn" onClick={onCancel}>
                <InlineSVG src={closeIcon} />
              </button>
                <ModalTitle icon={calendarPlusIcon} title="אירוע חדש" />
                <div className=
                "recipient-home-new-event">

                  <div className="profiles-item">
                    <div className="profiles-item-name">
                      <span>תאריך</span>
                      <span style={{ color: "red" }}>*</span>
                    </div>
                    <div style={{ width: "200px" }}>
                      <DatePicker />
                    </div>
                  </div>
                  <div className="profiles-item">
                    <div className="profiles-item-name">
                      <span>סוג פגישה</span>
                      <span style={{ color: "red" }}>*</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "30px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "20px",
                        }}
                      >
                        <CheckBox
                          title="אונליין"
                          checked={!checked}
                          onChange={() => setChecked(false)}
                        />
                        <CheckBox
                          title="פיזית"
                          checked={checked}
                          onChange={() => setChecked(true)}
                        />
                      </div>
                      {checked && (
                        <div
                          className="profiles-item"
                          style={{
                            width: "calc(100% - 210px)",
                            marginTop: "-25px",
                          }}
                        >
                          <div className="profiles-item-name">
                            <span>מיקום</span>
                            <span style={{ color: "red" }}>*</span>
                          </div>
                          <div>
                            <div className="input">
                              <Input
                                type="text"
                                placeholder="חפש או הקלד"
                                prefix={
                                  <InlineSVG
                                    src={locationIcon}
                                    stroke="#999"
                                  />
                                }
                                className="input-main"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="profiles-item">
                    <div className="profiles-item-name">
                      <span>פרטים</span>
                    </div>
                    <div>
                      <TextArea placeholder="הקלד פרטים..." />
                    </div>
                  </div>
                </div>
                <div
                  className="basic-modal-footer"
                  style={{ marginTop: "20px" }}
                >
                  <Button onClick={onCancel} label="שמירה" />
                  <Button onClick={onCancel} icon={closeIcon} label="ביטול" />
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ReactModal>
  );
};

export default NewEvent;
