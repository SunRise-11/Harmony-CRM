import React, { useState } from "react";
import { Input } from "antd";
import InlineSVG from "react-inlinesvg";
import { motion, AnimatePresence } from "framer-motion";

import GPTImg from "../../../assets/icons/gpt.svg";
import DownImg from "../../../assets/icons/down.svg";
import HandUpImg from "../../../assets/icons/handUp.svg";
import HandDownImg from "../../../assets/icons/handDown.svg";
import SendImg from "../../../assets/icons/send.svg";
import GPTGreenImg from "../../../assets/icons/gpt-green.svg";
import CloseImg from "../../../assets/icons/close.svg";
import { useSelector } from "react-redux";

const ChatGPT = () => {
  const [isClick, setClick] = useState(false);
  const direction = useSelector((state) => state.app.direction);

  const modalVariants = {
    hidden: {
      x: direction === "rtl" ? "-100%" : "100%",
    },
    visible: {
      x: 0,
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        exit="hidden"
        variants={modalVariants}
        animate={isClick ? "visible" : "hidden"}
        transition={{ duration: 0.7 }}
        style={{
          zIndex: 102,
          position: "fixed",
          top: "calc(50% - 367px)",
          left: direction === "rtl" ? "0px" : "initial",
          right: direction === "ltr" ? "0px" : "initial",
        }}
      >
        <div className="chat-gpt">
          {direction === "ltr" && (
            <div className="chat-gpt-button-area">
              <button onClick={() => setClick(!isClick)}>
                <InlineSVG
                  width={20}
                  height={20}
                  src={isClick ? CloseImg : DownImg}
                  style={{ stroke: "white" }}
                />
              </button>
              <div className="chat-gpt-button-area-svg">
                <InlineSVG src={GPTImg} />
              </div>
              <div className="chat-gpt-button-area-text">ChatGPT</div>
            </div>
          )}
          <div className="chat-gpt-board">
            <div className="chat-gpt-board-title">
              ChatGPT
              <InlineSVG
                src={GPTGreenImg}
                className="chat-gpt-board-title-icon"
              />
            </div>
            <div className="chat-gpt-board-history-user">
              <div className="chat-gpt-board-history-user-icon">
                <div className="chat-gpt-board-history-user-icon-main">Y</div>
              </div>
              <div className="chat-gpt-board-history-text">
                תוכל לעזור לי להבין מה העקרונות לבניית תקציב אישי ?
              </div>
              <div className="chat-gpt-board-history-buttons">
                <button>
                  <InlineSVG src={HandDownImg} />
                </button>
                <button>
                  <InlineSVG src={HandUpImg} />
                </button>
              </div>
            </div>
            <div className="chat-gpt-board-history-gpt">
              <div className="chat-gpt-board-history-gpt-icon">
                <InlineSVG src={GPTImg} />
              </div>
              <div className="chat-gpt-board-history-text">
                כמובן, אשמח לעזור לך להבין את העקרונות הבסיסיים לבניית תקציב
                אישי.
                <br />
                1. תיעוד ההוצאות וההכנסות
                <br />
                2. קביעת מטרות
                <br />
                3. תכנון והקצאת תקציב
                <br />
                4. חיסכון והשקעה
              </div>
              <div className="chat-gpt-board-history-buttons">
                <button>
                  <InlineSVG src={HandDownImg} />
                </button>
                <button>
                  <InlineSVG src={HandUpImg} />
                </button>
              </div>
            </div>
            <div className="chat-gpt-board-history-user">
              <div className="chat-gpt-board-history-user-icon">
                <div className="chat-gpt-board-history-user-icon-main">Y</div>
              </div>
              <div className="chat-gpt-board-history-text">
                תוכל לפרט סעיף של קביעת מטרות?
              </div>
              <div className="chat-gpt-board-history-buttons">
                <button>
                  <InlineSVG src={HandDownImg} />
                </button>
                <button>
                  <InlineSVG src={HandUpImg} />
                </button>
              </div>
            </div>
            <div className="chat-gpt-board-history-gpt">
              <div className="chat-gpt-board-history-gpt-icon">
                <InlineSVG src={GPTImg} />
              </div>
              <div className="chat-gpt-board-history-text">
                בוודאי, קביעת מטרות היא חלק חשוב מאוד
                <br />
                בתהליך בניית התקציב האישי. הנה כמה פרטים וטיפים על קביעת מטרות
                פיננסיות:
              </div>
              <div className="chat-gpt-board-history-buttons">
                <button>
                  <InlineSVG src={HandDownImg} />
                </button>
                <button>
                  <InlineSVG src={HandUpImg} />
                </button>
              </div>
            </div>
          </div>
          <div className="chat-gpt-footer">
            <div className="chat-gpt-footer-input">
              <Input
                className="chat-gpt-footer-input-main"
                prefix={<InlineSVG src={SendImg} />}
              />
            </div>
            <div className="chat-gpt-footer-info">
              <div className="chat-gpt-footer-info-area">
                <a className="chat-gpt-footer-info-area-version">
                  ChatGPT Jan 30 Version
                </a>
                <span>
                  . Free Research Preview. Our goal is to make AI systems more
                  natural and safe to interact with. Your feedback will help us
                  improve.
                </span>
              </div>
            </div>
          </div>
          {direction === "rtl" && (
            <div className="chat-gpt-button-area">
              <button onClick={() => setClick(!isClick)}>
                <InlineSVG
                  width={20}
                  height={20}
                  src={isClick ? CloseImg : DownImg}
                  style={{ stroke: "white" }}
                />
              </button>
              <div className="chat-gpt-button-area-svg">
                <InlineSVG src={GPTImg} />
              </div>
              <div className="chat-gpt-button-area-text">ChatGPT</div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChatGPT;
