import ReactModal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import InlineSVG from "react-inlinesvg";
import { useSelector } from "react-redux";

import closeIcon from "../../../assets/icons/master/close.svg";
import trashIcon from "../../../assets/icons/master/trash.svg";
import editIcon from "../../../assets/icons/master/edit.svg";
import signInIcon from "../../../assets/icons/master/sign-in.svg";
import downloadIcon from "../../../assets/icons/master/download.svg";
import Button from "../../Button";
import articleImg from "../../../assets/images/article.png";

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
                // width: "1300px",
                // maxWidth: "max-content",
                padding: "20px",
              }}
            >
              <div className="medical-modal-board">
                <button className="basic-modal-cancel-btn" onClick={onCancel}>
                  <InlineSVG src={closeIcon} />
                </button>
                <img src={articleImg} />
              </div>
              <div className="medical-modal-footer">
                <div>
                  <Button
                    label="הורדה"
                    icon={downloadIcon}
                    onClick={() => onCancel()}
                  />
                  <Button
                    label="ייצוא"
                    icon={signInIcon}
                    onClick={() => onCancel()}
                  />
                </div>
                <div>
                  <Button
                    label="עריכה"
                    icon={editIcon}
                    onClick={() => onCancel()}
                  />
                  <Button
                    label="מחיקה"
                    icon={trashIcon}
                    onClick={() => onCancel()}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ReactModal>
  );
};

export default Modal;
