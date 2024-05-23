import React, { useState } from "react";
import InlineSVG from "react-inlinesvg";
import ReactModal from "react-modal";
import ReactSelect from "react-select";
import { motion, AnimatePresence } from "framer-motion";
import { Segmented, Upload, ConfigProvider, Button } from "antd";
import { useSelector } from "react-redux";

import closeIcon from "../../../assets/icons/master/close.svg";
import uploadFileIcon from "../../../assets/icons/master/upload-file.svg";
import createIcon from "../../../assets/icons/master/create.svg";
import userIcon from "../../../assets/icons/master/user.svg";
import userPlusIcon from "../../../assets/icons/master/user-plus.svg";

import Item from "../../Recipient/Profile/Basic/Item";
import ModalTitle from "../../Labels/ModalTitle";

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
                <InlineSVG src={closeIcon} />
              </button>
              <div className="recipient-daily-planner-create">
                <ModalTitle title="טופס דיווח נוכחות" icon={createIcon} />
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
                  </div>
                  <div
                    className="profiles-item"
                    // style={{ width: "calc(50% - 10px)" }}
                  >
                    <div className="profiles-item-name">
                      <span>סוג הוצאה</span>
                      <span style={{ color: "red" }}>*</span>
                    </div>
                    <ConfigProvider direction={direction}>
                      <Segmented
                        className="expense-modal-toggle"
                        options={["כיבוד", "משרדי", "נסיעות", "נסיעות - ק”מ"]}
                        onChange={(e) => setCurrentSelected(e)}
                      />
                    </ConfigProvider>
                  </div>
                  {currentSelected === "נסיעות - ק”מ" && (
                    <Item type="input" text="ק”מ" width="240px" required />
                  )}
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
                        placeholder="חיפוש או בחירת מקבל שירות"
                      />
                    </div>
                  </div>
                  <InlineSVG
                    src={userIcon}
                    className="select-svg"
                    style={{
                      stroke: isHover && "#0075FF",
                      marginBottom: "-10px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "20px",
                      marginTop: "-10px",
                    }}
                  >
                    <Item text="סכום" type="input" required width="200px" />
                    <div
                      className="profiles-item"
                      style={{ width: "calc(100% - 220px)" }}
                    >
                      <div className="profiles-item-name">חשבוניות</div>
                      <Upload className="expense-modal-upload">
                        <Button
                          label="העלאת מסמכים"
                          icon={<InlineSVG src={uploadFileIcon} />}
                          style={{
                            height: "5vh",
                            weight: "5vh",
                            justifyContent: "center",
                            alignItems: "center",
                            display: "inline-flex",
                          }}
                        />
                      </Upload>
                    </div>
                  </div>
                  <Item text="הערות" type="input" />
                </div>
                <div
                  className="basic-modal-footer"
                  style={{ marginTop: "20px" }}
                >
                  <Button
                    onClick={onCancel}
                    style={{
                      backgroundColor: "MediumSeaGreen",
                      display: "inline-flex",
                      gap: "5px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    type="primary"
                  >
                    <InlineSVG
                      src={userPlusIcon}
                      style={{ fill: "white", stroke: "white" }}
                    />
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ReactModal>
  );
};

export default Expense;
