import React from "react";
import ReactModal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import Basic from "../../modals/basic/Basic";

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

const Modal = ({ title, icon, content, visible, onCancel }) => {
  return (
    <ReactModal isOpen={visible} onCancel={onCancel}>
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
              className="profiles-basic"
              style={{ borderColor: selected ? "#FFB400" : "transparent" }}
            >
              <div className="profiles-basic-title">
                <InlineSVG src={icon} width={24} height={24} stroke="#FF8A00" />
                <span>{title}</span>
              </div>
              <div className="profiles-basic-board">{content}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ReactModal>
  );
};

export default Modal;
