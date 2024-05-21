import React, { useState } from "react";
import InlineSVG from "react-inlinesvg";
import ReactModal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

import closeIcon from "../../../assets/icons/master/close.svg";
import addUserIcon from "../../../assets/icons/master/user-plus.svg";
import filePlusIcon from "../../../assets/icons/master/file-plus.svg";

import Item from "../../Recipient/Profile/Basic/Item";
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
                <InlineSVG src={closeIcon} />
              </button>
              <div>
                <div className="modal-title">
                  <InlineSVG
                    src={filePlusIcon}
                    className="modal-title-svg"
                    style={{
                      stroke: "#FF8A00",
                    }}
                  />
                  <div className="modal-title-value">הוספת רשומה חדשה</div>
                </div>
                <div className="crm-new-record">
                  <div>
                    <div>פרטי לקוח</div>
                    <div className="crm-new-record-column-div">
                      <Item type="input" required text="שם ארגון" />
                      <div className="crm-new-record-row-div">
                        <Item type="input" text="טלפון" width="230px" />
                        <Item
                          type="dropdown"
                          text="ישוב"
                          width="calc(100% - 250px)"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>פרטי תוכנית</div>
                    <Item type="dropdown" required text="תוכנית" />
                  </div>
                  <div>
                    <div>מקור פניה</div>
                    <div className="crm-new-record-column-div">
                      <div className="crm-new-record-row-div">
                        <Item
                          type="date-picker"
                          text="תאריך פניה"
                          required
                          width="230px"
                        />
                        <Item
                          type="dropdown"
                          text="מקור פניה"
                          required
                          width="calc(100% - 250px)"
                        />
                      </div>
                      <div className="crm-new-record-row-div">
                        <Item type="input" width="230px" text="טלפון" />
                        <Item
                          type="input"
                          width="calc(100% - 250px)"
                          text="איש קשר"
                        />
                      </div>
                    </div>
                  </div>
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
                      src={addUserIcon}
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

export default CreateModal;
