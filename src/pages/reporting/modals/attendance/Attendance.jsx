import React, { useState } from "react";
import InlineSVG from "react-inlinesvg";
import ReactModal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import closeImg from "../../../../assets/icons/close.svg";
import reportSVG from "../../../../assets/icons/report.svg";
import Button from "../../../../components/button/Button";
import Item from "../../../../components/profiles/basic/item/Item";
import ModalTitle from "../../../../components/labels/modalTitle/ModalTitle";
import { useSelector } from "react-redux";

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

const Attendance = ({ visible, onCancel }) => {
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
                <InlineSVG src={closeImg} />
              </button>
              <div className="recipient-daily-planner-create">
                <ModalTitle title="טופס דיווח נוכחות" icon={reportSVG} />
                <div
                  style={{
                    marginTop: "25px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                    margin: "50px 0px",
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
                  <Item type="checkbox" text="חופשה" required />
                  <Item type="checkbox" text="מחלה" required />
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

export default Attendance;
