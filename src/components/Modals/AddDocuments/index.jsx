import ReactModal from "react-modal";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Radio } from "antd";
import { useState } from "react";
import InlineSVG from "react-inlinesvg";

import closeIcon from "../../../assets/icons/master/close.svg";
import sendIcon from "../../../assets/icons/master/send.svg";

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
      padding: "0px",
    },

    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
  };

  const [value, setValue] = useState(1);
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
                width: "320px",
                maxWidth: "320px",
                padding: "0px",
              }}
            >
              <button className="basic-modal-cancel-btn" onClick={onCancel}>
                <InlineSVG src={closeIcon} />
              </button>
              <div className="document-modal-board">
                <Radio.Group
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                  style={{ width: "100%", alignContent: "center" }}
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
                    <Radio value={1}>טופס ויתור סודיות</Radio>
                    <Radio value={2}>טופס השלמת פרטים</Radio>
                    <Radio value={3}>טופס העדפות תעסוקה</Radio>
                  </div>
                </Radio.Group>
              </div>
              <div className="document-modal-footer">
                <Button
                  onClick={() => onCancel()}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: "20px",
                    alignItems: "center",
                    paddingBottom: "0px",
                  }}
                >
                  <InlineSVG
                    src={sendIcon}
                    width={20}
                    height={20}
                    style={{ stroke: "#434F68" }}
                  />
                  <span>שליחת טופס</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ReactModal>
  );
};

export default Modal;
