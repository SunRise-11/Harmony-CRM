import React from "react";
import PropTypes from "prop-types";
import InlineSVG from "react-inlinesvg";
import ReactModal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

import ModalTitle from "../../Labels/ModalTitle";
import Button from "../../Button";
import closeIcon from "../../../assets/icons/master/close.svg";
import addUserIcon from "../../../assets/icons/master/user-plus.svg";
import checkIcon from "../../../assets/icons/master/check.svg";

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

const Modal = ({
  px,
  py,
  margin,
  icon,
  title,
  content,
  flag,
  visible,
  onCancel,
}) => {
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
                paddingTop: `${py}px`,
                paddingRight: `${px}px`,
                paddingBottom: `${py}px`,
                paddingLeft: `${px}px`,
              }}
            >
              <button className="basic-modal-cancel-btn" onClick={onCancel}>
                <InlineSVG src={closeIcon} />
              </button>
              <div>
                <ModalTitle icon={icon} title={title} />
                {content}
                <div
                  className="basic-modal-footer"
                  style={{ marginTop: margin }}
                >
                  <Button
                    onClick={onCancel}
                    icon={flag ? addUserIcon : checkIcon}
                    label="שמירה"
                  />
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

Modal.propTypes = {
  content: PropTypes.any.isRequired,
  px: PropTypes.number,
  py: PropTypes.number,
  margin: PropTypes.number,
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  flag: PropTypes.bool,
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func,
};

Modal.defaultProps = {
  margin: 20,
  flag: false,
  // px: 100,
  // py: 50,
};

export default Modal;
