import React, { useState } from "react";
import InlineSVG from "react-inlinesvg";
import ReactModal from "react-modal";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import ReactSelect from "react-select";

import closeIcon from "../../../assets/icons/master/close.svg";
import taskSVG from "../../../assets/icons/master/clipboard-check.svg";
import addIcon from "../../../assets/icons/add.svg";
import userIcon from "../../../assets/icons/master/user.svg";

import Item from "../../Recipient/Profile/Basic/Item";
import CheckBox from "../../CheckBox";
import { Button } from "antd";

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
  const direction = useSelector((state) => state.app.direction);
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
  const [isHover, setHover] = useState(false);
  const options = [];
  const [checked, setChecked] = useState(false);
  const [zoomMeeting, setZoomMeeting] = useState(false);
  const [reminderType, setReminderType] = useState([false, false, false]);
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
                overflow: "unset",
              }}
            >
              <button className="basic-modal-cancel-btn" onClick={onCancel}>
                <InlineSVG src={closeIcon} />
              </button>
              <div className="recipient-daily-planner-create">
                <div style={{ display: "flex", gap: "10px" }}>
                  <span className="modal-title">
                    <InlineSVG src={taskSVG} className="modal-title-svg" />
                    <div className="modal-title-value">אירוע חדש</div>
                  </span>
                </div>
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
                  <Item type="input" width="100%" required text="נושא אירוע" />
                  <div className="profiles-item" style={{ width: "100%" }}>
                    <div className="profiles-item-name">מקבל שירות</div>
                    <div className="select">
                      <ReactSelect
                        className="select-main"
                        isRtl={direction === "rtl"}
                        isSearchable={true}
                        isClearable={true}
                        options={options}
                        placeholder=""
                        isDisabled
                        styles={{
                          control: (baseStyles) => ({
                            ...baseStyles,
                            backgroundColor: "white",
                            borderColor: "#B9B9B9",
                            borderWidth: "2px",
                            borderRadius: "10px",
                            paddingTop: "3px",
                            paddingBottom: "3px",
                            // paddingRight: direction === "rtl" ? "90px" : "0px",
                            // paddingLeft: direction === "ltr" ? "90px" : "90px",
                            // backgroundColor: "red",
                          }),
                          indicatorSeparator: (base) => ({
                            ...base,
                            width: "0px",
                          }),
                        }}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        placeholder="חיפוש או בחירת מקבל שירות"
                      />
                      <br />
                    </div>
                  </div>
                  <div style={{ marginTop: "-15px" }}>
                    <InlineSVG
                      src={userIcon}
                      className="select-svg"
                      style={{
                        stroke: isHover && "#0075FF",
                      }}
                    />
                    <Item type="input" width="100%" text="מיקום" />
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
                      width="calc(25% + 13px)"
                      required
                      text="תאריך"
                    />
                    <Item
                      type="time-picker"
                      width="calc(20%)"
                      text="שעת התחלה"
                    />
                    <Item
                      type="time-picker"
                      width="calc(20% - 5px)"
                      text="שעת סיום"
                    />
                    <div style={{ marginTop: "31px" }}>
                      <CheckBox
                        title="כל היום"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                      />
                    </div>
                  </div>
                  <CheckBox
                    title="פגישת זום"
                    checked={zoomMeeting}
                    onChange={() => setZoomMeeting(!zoomMeeting)}
                  />
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
                          <span style={{ color: "red" }}>*</span>
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
                          <CheckBox
                            title="הודעה"
                            checked={reminderType[0]}
                            onChange={() => {
                              reminderType[0] = !reminderType[0];
                              setReminderType([...reminderType]);
                            }}
                          />
                          <CheckBox
                            title="דוא”ל"
                            checked={reminderType[1]}
                            onChange={() => {
                              reminderType[1] = !reminderType[1];
                              setReminderType([...reminderType]);
                            }}
                          />
                          <CheckBox
                            title="WhatsApp"
                            checked={reminderType[2]}
                            onChange={() => {
                              reminderType[2] = !reminderType[2];
                              setReminderType([...reminderType]);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="main-task-step-add"
                      style={
                        direction === "rtl"
                          ? { paddingRight: "10px" }
                          : { paddingLeft: "10px" }
                      }
                    >
                      <button>
                        <InlineSVG src={addIcon} />
                      </button>
                      <div>משימה חדשה</div>
                    </div>
                  </div>
                  <Item type="input" text="הערות" width="100%" />
                </div>
              </div>
              <div className="basic-modal-footer" style={{ marginTop: "20px" }}>
                <Button
                  onClick={onCancel}
                  style={{
                    backgroundColor: "MediumSeaGreen",
                    justifyContent: "center",
                  }}
                  type="primary"
                >
                  <div style={{ color: "white" }}>שמירה</div>
                </Button>
                <Button
                  onClick={onCancel}
                  style={{
                    backgroundColor: "#ff3333",
                    display: "inline-flex",
                    gap: "5px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <InlineSVG src={closeIcon} style={{ stroke: "white" }} />
                  <div style={{ color: "white" }}>ביטול</div>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ReactModal>
  );
};

export default CreateModal;
