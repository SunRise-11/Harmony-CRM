import React, { useState } from "react";
import InlineSVG from "react-inlinesvg";
import ReactModal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import closeImg from "../../../../../../../assets/icons/close.svg";
import ModalTitle from "../../../../../../../components/labels/modalTitle/ModalTitle";
import questionSVG from "../../../../../../../assets/icons/question.svg";
import Button from "../../../../../../../components/button/Button";
import Item from "../../../../../../../components/profiles/basic/item/Item";

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

const NewQuestionnaire = ({ visible, onCancel }) => {
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
                <ModalTitle icon={questionSVG} title="הוספת שאלון" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    marginTop: "20px",
                    width: "400px",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      gap: "20px",
                    }}
                  >
                    <Item
                      type="dropdown"
                      width="calc(50% - 10px)"
                      required
                      text="סוג אירוע"
                    />
                    <Item
                      type="date-picker"
                      width="calc(50% - 10px)"
                      required
                      text="תאריך"
                    />
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      gap: "20px",
                    }}
                  >
                    <Item
                      type="dropdown"
                      width="calc(50% - 10px)"
                      required
                      text="מיקום"
                    />
                    <Item
                      type="dropdown"
                      width="calc(50% - 10px)"
                      required
                      text="פרטים"
                    />
                  </div>
                </div>
                <div
                  className="basic-modal-footer"
                  style={{ marginTop: "20px" }}
                >
                  <Button onClick={onCancel} label="שמירה" />
                  <Button onClick={onCancel} icon={closeImg} label="ביטול" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ReactModal>
  );
};

export default NewQuestionnaire;
