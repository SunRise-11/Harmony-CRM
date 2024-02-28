import ReactModal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import InlineSVG from "react-inlinesvg";
import closeImg from "../../../../../assets/icons/close.svg";
import sendSVG from "../../../../../assets/icons/send.svg";
import trashSVG from "../../../../../assets/icons/trash.svg";
import editSVG from "../../../../../assets/icons/pencil.svg";
import nextSVG from "../../../../../assets/icons/signin.svg";
import downloadSVG from "../../../../../assets/icons/download.svg";
import Button from "../../../../../components/button/Button";
import articleImg from "../../../../../assets/images/article.png";
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
                // width: "1300px",
                // maxWidth: "max-content",
                padding: "20px",
              }}
            >
              <div className="medical-modal-board">
                <button className="basic-modal-cancel-btn" onClick={onCancel}>
                  <InlineSVG src={closeImg} />
                </button>
                <img src={articleImg} />
              </div>
              <div className="medical-modal-footer">
                <div>
                  <Button
                    label="הורדה"
                    icon={downloadSVG}
                    onClick={() => onCancel()}
                  />
                  <Button
                    label="ייצוא"
                    icon={nextSVG}
                    onClick={() => onCancel()}
                  />
                </div>
                <div>
                  <Button
                    label="עריכה"
                    icon={editSVG}
                    onClick={() => onCancel()}
                  />
                  <Button
                    label="מחיקה"
                    icon={trashSVG}
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
