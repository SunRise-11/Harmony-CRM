import React, { useState } from "react";
import InlineSVG from "react-inlinesvg";
import ReactModal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import closeImg from "../../../../assets/icons/close.svg";
import uploadSVG from "../../../../assets/icons/uploadDoc.svg";
import Button from "../../../../components/button/Button";
import Item from "../../../../components/profiles/basic/item/Item";
import reportSVG from "../../../../assets/icons/report.svg";
import ModalTitle from "../../../../components/labels/modalTitle/ModalTitle";
import ReactSelect from "react-select";
import userSVG from "../../../../assets/icons/user.svg";
import addUserSVG from "../../../../assets/icons/addUser.svg";
import { ConfigProvider, Segmented, Upload } from "antd";

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

const Expense = ({ visible, onCancel }) => {
  const [isHover, setHover] = useState(false);
  const [currentSelected, setCurrentSelected] = useState("");
  const options = [];
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
                padding: "30px 50px",
                width: "80vw",
                maxWidth: "700px",
                minWidth: "500px",
              }}
            >
              <button className="basic-modal-cancel-btn" onClick={onCancel}>
                <InlineSVG src={closeImg} />
              </button>
              <div className="recipient-daily-planner-create">
                <ModalTitle title="טופס דיווח נוכחות" icon={reportSVG} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "25px",
                    margin: "30px 0px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "20px",
                    }}
                  >
                    <Item
                      type="date-picker"
                      text="תאריך"
                      required
                      width="calc(50% - 10px)"
                    />
                    <div
                      className="profiles-item"
                      style={{ width: "calc(50% - 10px)" }}
                    >
                      <div className="profiles-item-name">
                        <span>סוג הוצאה</span>
                        <span style={{ color: "red" }}>*</span>
                      </div>
                      <ConfigProvider direction="rtl">
                        <Segmented
                          className="expense-modal-toggle"
                          options={["כיבוד", "משרדי", "נסיעות", "נסיעות - ק”מ"]}
                          onChange={(e) => setCurrentSelected(e)}
                        />
                      </ConfigProvider>
                    </div>
                  </div>
                  {currentSelected === "נסיעות - ק”מ" && (
                    <Item type="input" text="ק”מ" width="240px" required />
                  )}
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
                            backgroundColor:
                              currentSelected === "משרדי"
                                ? "#E5E9EE"
                                : "transparent",
                            color:
                              currentSelected === "משרדי"
                                ? "#808285"
                                : "#464648",
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
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "20px",
                    }}
                  >
                    <Item text="סכום" type="input" required width="200px" />
                    <div
                      className="profiles-item"
                      style={{ width: "calc(100% - 220px)" }}
                    >
                      <div className="profiles-item-name">חשבוניות</div>
                      <Upload className="expense-modal-upload">
                        <Button label="העלאת מסמכים" icon={uploadSVG} />
                      </Upload>
                    </div>
                  </div>
                  <Item text="הערות" type="input" />
                </div>
                <div
                  className="basic-modal-footer"
                  style={{ marginTop: "20px" }}
                >
                  <Button onClick={onCancel} label="שמירה" icon={addUserSVG} />
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

export default Expense;
