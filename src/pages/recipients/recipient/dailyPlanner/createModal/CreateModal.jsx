import React, { useState } from "react";
import InlineSVG from "react-inlinesvg";
import ReactModal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import closeImg from "../../../../../assets/icons/close.svg";
import addEventSVG from "../../../../../assets/icons/addevent.svg";
import avatarImg1 from "../../../../../assets/images/avatar1.png";
import Button from "../../../../../components/button/Button";
import Item from "../../../../../components/profiles/basic/item/Item";
import CheckBox from "../../../../../components/checkBox/CheckBox";
import { Button as AntdButton } from "antd";
import addImg from "../../../../../assets/icons/add.svg";

ReactModal.setAppElement("#root");

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

const CreateModal = ({ visible, onCancel }) => {
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
  const [checked, setChecked] = useState(false);
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
                padding: "30px 50px",
                width: "80vw",
                maxWidth: "800px",
                minWidth: "600px",
              }}
            >
              <button className="basic-modal-cancel-btn" onClick={onCancel}>
                <InlineSVG src={closeImg} />
              </button>
              <div className="recipient-daily-planner-create">
                <div style={{ display: "flex", gap: "10px" }}>
                  <span className="modal-title">
                    <InlineSVG src={addEventSVG} className="modal-title-svg" />
                    <div className="modal-title-value">פגישה חדשה עבור:</div>
                  </span>
                  <span className="recipient-daily-planner-create-title">
                    <img src={avatarImg1} width={32} height={32} />
                    <span>יואל קמינסקי</span>
                  </span>
                </div>
                <div
                  style={{
                    marginTop: "25px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "25px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                      paddingBottom: "25px",
                      borderBottom: "1px solid #CED8DB",
                    }}
                  >
                    <Item type="input" width="100%" required text="נושא" />
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
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "15px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        gap: "20px",
                        width: "100%",
                        flexWrap: "wrap",
                      }}
                    >
                      <Item
                        type="date-picker"
                        width="calc(33% - 13px)"
                        required
                        text="תאריך"
                      />
                      <Item
                        type="time-picker"
                        width="calc(33% - 13px)"
                        text="שעת התחלה"
                      />
                      <Item
                        type="time-picker"
                        width="calc(33% - 13px)"
                        text="שעת סיום"
                      />
                    </div>
                    <CheckBox title="פגישת זום" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        borderBottom: "1px solid #CED8DB",
                        paddingBottom: "15px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          gap: "40px",
                        }}
                      >
                        <Item type="dropdown" text="תזכורת" width="200px" />
                        <div
                          className="profiles-item"
                          style={{
                            width: "calc(100% - 260px)",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}
                        >
                          <div className="profiles-item-name">
                            <span>סוג תזכורת</span>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              gap: "10px",
                              flexWrap: "wrap",
                            }}
                          >
                            <CheckBox title="הודעה" />
                            <CheckBox title="דוא”ל" />
                            <CheckBox title="WhatsApp" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="main-task-step-add"
                        style={{ paddingRight: "10px" }}
                      >
                        <button onClick={() => setVisible(true)}>
                          <InlineSVG src={addImg} />
                        </button>
                        <div>משימה חדשה</div>
                      </div>
                    </div>
                    <Item type="input" text="הערות" width="100%" />
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

export default CreateModal;
