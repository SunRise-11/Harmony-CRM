import React, { useState } from "react";
import InlineSVG from "react-inlinesvg";
import ReactModal from "react-modal";
import { Input } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import closeImg from "../../../../../../../assets/icons/close.svg";
import ModalTitle from "../../../../../../../components/labels/modalTitle/ModalTitle";
import addEventSVG from "../../../../../../../assets/icons/addevent.svg";
import Button from "../../../../../../../components/button/Button";
import DatePicker from "../../../../../../../components/pickers/datePicker/DatePicker";
import CheckBox from "../../../../../../../components/checkBox/CheckBox";
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
  const [checked, setChecked] = useState(true);
  const Styles = {
    content: {
      direction: "rtl",
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
    <ReactModal isOpen={visible} style={Styles}>
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
                <InlineSVG src={closeImg} />
              </button>
              <div>
                <ModalTitle icon={addEventSVG} title="אירוע חדש" />
                <div className="recipient-home-new-event">
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
                        gap: "61px",
                      }}
                    >
                      <CheckBox
                        title="אונליין"
                        checked={checked}
                        onChange={() => setChecked(true)}
                      />
                      <CheckBox
                        title="פיזית"
                        checked={!checked}
                        onChange={() => setChecked(false)}
                      />
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
                  <Button onClick={onCancel} icon={closeImg} label="ביטול" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ReactModal>
  );
};

export default NewEvent;
