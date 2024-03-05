import React, { useState } from "react";
import InlineSVG from "react-inlinesvg";
import ReactModal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import closeIcon from "../../../../../assets/icons/master/close.svg";
import addEventSVG from "../../../../../assets/icons/addevent.svg";
import avatarImg1 from "../../../../../assets/images/avatar1.png";
import Button from "../../../../../components/button/Button";
import Item from "../../../../../components/profiles/basic/item/Item";
import CheckBox from "../../../../../components/checkBox/CheckBox";
import addImg from "../../../../../assets/icons/add.svg";
import geometricsSVG from "../../../../../assets/icons/geometrics.svg";
import { useSelector } from "react-redux";
import { Input } from "antd";

const { TextArea } = Input;
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
  const [checked, setChecked] = useState(false);
  const [zoomMeeting, setZoomMeeting] = useState(false);
  const [reminderType, setReminderType] = useState(0);
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
                padding: "30px 50px",
                width: "80vw",
                maxWidth: "800px",
                minWidth: "600px",
              }}
            >
              <button className="basic-modal-cancel-btn" onClick={onCancel}>
                <InlineSVG src={closeIcon} />
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
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                      }}
                    >
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
                            checked={!checked}
                            onChange={() => setChecked(false)}
                          />
                          <CheckBox
                            title="פיזית"
                            checked={checked}
                            onChange={() => setChecked(true)}
                          />
                        </div>
                      </div>
                      {checked && (
                        <div
                          className="profiles-item"
                          style={{ width: "calc(100% - 242px)" }}
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
                                    src={geometricsSVG}
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
                            <CheckBox
                              title="הודעה"
                              checked={reminderType === 0}
                              onChange={() => setReminderType(0)}
                            />
                            <CheckBox
                              title="דוא”ל"
                              checked={reminderType === 1}
                              onChange={() => setReminderType(1)}
                            />
                            <CheckBox
                              title="WhatsApp"
                              checked={reminderType === 2}
                              onChange={() => setReminderType(2)}
                            />
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
                    {/* <Item type="input" text="הערות" width="100%" /> */}
                    <div className="profiles-item">
                      <div className="profiles-item-name">
                        <span>הערות</span>
                      </div>
                      <div>
                        <TextArea placeholder="הקלד פרטים..." />
                      </div>
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ReactModal>
  );
};

export default CreateModal;
