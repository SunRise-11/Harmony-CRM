import React, { useState } from "react";
import InlineSVG from "react-inlinesvg";
import ReactModal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import closeImg from "../../../../../../assets/icons/close.svg";
import ModalTitle from "../../../../../../components/labels/modalTitle/ModalTitle";
import recoverySVG from "../../../../../../assets/icons/recovery.svg";

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

const QuestionnaireHistory = ({ visible, onCancel }) => {
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
              }}
            >
              <button className="basic-modal-cancel-btn" onClick={onCancel}>
                <InlineSVG src={closeImg} />
              </button>
              <div>
                <ModalTitle icon={recoverySVG} title="היסטורית שאלונים" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ReactModal>
  );
};

export default QuestionnaireHistory;
