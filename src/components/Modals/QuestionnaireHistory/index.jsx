import React from "react";
import InlineSVG from "react-inlinesvg";
import { useSelector } from "react-redux";
import ReactModal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";

import closeIcon from "../../../assets/icons/master/close.svg";
import historyIcon from "../../../assets/icons/master/history.svg";

import ModalTitle from "../../Labels/ModalTitle";
import Table from "../../Table";

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

const columns = [
  {
    key: "date",
    title: "תאריך",
    dataIndex: "date",
    sorter: true,
  },
  {
    key: "questionnaire",
    title: "שאלון",
    dataIndex: "questionnaire",
    sorter: true,
  },
];

const data = [
  {
    key: 1,
    questionnaire: "מוטיבציה",
    date: "12/12/2023",
  },
  {
    key: 2,
    questionnaire: "מוטיבציה",
    date: "03/11/2023",
  },
];

const QuestionnaireHistory = ({ visible, onCancel }) => {
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
                <ModalTitle icon={historyIcon} title="היסטורית שאלונים" />
                <div style={{ marginTop: "10px" }}>
                  <Table columns={columns} data={data} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ReactModal>
  );
};

export default QuestionnaireHistory;
