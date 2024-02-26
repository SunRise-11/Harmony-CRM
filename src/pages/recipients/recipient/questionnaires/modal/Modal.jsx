import ReactModal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import InlineSVG from "react-inlinesvg";
import closeImg from "../../../../../assets/icons/close.svg";
import { Radio, Space } from "antd";
import sendSVG from "../../../../../assets/icons/send.svg";
import Button from "../../../../../components/button/Button";

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

const Modal = ({ visible, onCancel }) => {
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
      padding: "0px",
    },

    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
  };

  const [value, setValue] = useState(1);
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
                width: "320px",
                maxWidth: "320px",
                padding: "0px",
              }}
            >
              <button className="basic-modal-cancel-btn" onClick={onCancel}>
                <InlineSVG src={closeImg} />
              </button>
              <div className="document-modal-board">
                <Radio.Group
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                  style={{ width: "100%" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      padding: "0px",
                      paddingTop: "10px",
                      justifyContent: "center",
                    }}
                  >
                    <Radio value={1}>ציר מוטיבציה</Radio>
                    <Radio value={2}>פרואקטיביות</Radio>
                    <Radio value={3}>אמונה ביכולת</Radio>
                    <Radio value={4}>שאלון 4</Radio>
                    <Radio value={5}>שאלון 5</Radio>
                    <Radio value={6}>דוח ארועים</Radio>
                  </div>
                </Radio.Group>
              </div>
              <div className="document-modal-footer">
                <Button
                  label="שליחת טופס"
                  icon={sendSVG}
                  onClick={() => onCancel()}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ReactModal>
  );
};

export default Modal;
