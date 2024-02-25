import React, { useState } from "react";
import InlineSVG from "react-inlinesvg";
import ReactModal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import closeImg from "../../../assets/icons/close.svg";
import taskSVG from "../../../assets/icons/task.svg";
import Button from "../../../components/button/Button";
import Item from "../../../components/profiles/basic/item/Item";
import CheckBox from "../../../components/checkBox/CheckBox";
import addImg from "../../../assets/icons/add.svg";
import ReactSelect from "react-select";
import userSVG from "../../../assets/icons/user.svg";

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
  const [isHover, setHover] = useState(false);
  const options = [];
  return (
    <ReactModal
      isOpen={visible}
      style={Styles}
      className="daily-planner-create-modal"
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
                <InlineSVG src={closeImg} />
              </button>
              <div className="recipient-daily-planner-create">
                <span className="modal-title">
                  <InlineSVG src={taskSVG} className="modal-title-svg" />
                  <div className="modal-title-value">אירוע חדש</div>
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
                  <Item type="input" width="100%" required text="נושא אירוע" />
                  <div className="profiles-item" style={{ width: "100%" }}>
                    <div className="profiles-item-name">מקבל שירות</div>
                    <div className="select">
                      <ReactSelect
                        className="select-main"
                        isRtl={true}
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
                            paddingRight: "90px",
                          }),
                          indicatorSeparator: (base) => ({
                            ...base,
                            width: "0px",
                          }),
                        }}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                      />
                      <InlineSVG
                        src={userSVG}
                        className="select-svg"
                        style={{
                          stroke: isHover && "#0075FF",
                        }}
                      />
                      <span
                        style={{
                          position: "absolute",
                          marginRight: "45px",
                          marginTop: "3px",
                        }}
                      >
                        חיפוש או בחירת מקבל שירות
                      </span>
                    </div>
                  </div>
                  <Item type="input" width="100%" text="מיקום" />
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
                      width="calc(25% - 13px)"
                      required
                      text="תאריך"
                    />
                    <Item
                      type="time-picker"
                      width="calc(25% - 13px)"
                      text="שעת התחלה"
                    />
                    <Item
                      type="time-picker"
                      width="calc(25% - 13px)"
                      text="שעת סיום"
                    />
                    <div style={{ marginTop: "31px" }}>
                      <CheckBox title="כל היום" />
                    </div>
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
              <div className="basic-modal-footer" style={{ marginTop: "20px" }}>
                <Button onClick={onCancel} label="שמירה" />
                <Button onClick={onCancel} icon={closeImg} label="ביטול" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ReactModal>
  );
};

export default CreateModal;
