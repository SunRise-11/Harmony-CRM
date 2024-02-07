import React, { useState } from "react";
import { Input } from "antd";
import InlineSVG from "react-inlinesvg";
import { motion, AnimatePresence } from "framer-motion";

import GPTImg from "../assets/icons/gpt.svg";
import DownImg from "../assets/icons/down.svg";
import HandUpImg from "../assets/icons/handUp.svg";
import HandDownImg from "../assets/icons/handDown.svg";
import SendImg from "../assets/icons/send.svg";
import GPTGreenImg from "../assets/icons/gpt-green.svg";
import CloseImg from "../assets/icons/close.svg";

const modalVariants = {
  hidden: {
    x: "-465px",
  },
  visible: {
    x: 0,
  },
};

const ChatGPT = () => {
  const [isClick, setClick] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        exit="hidden"
        variants={modalVariants}
        animate={isClick ? "visible" : "hidden"}
        transition={{ duration: 0.7 }}
        style={{
          position: 'fixed',
          top: '64px',
          left: '0px',
        }}
      >
        <div>
          <div
            className="bg-white max-w-[467px] rounded-tr-lg rounded-br-lg
                    border-r-2 border-t-2 border-b-2 border-teal-600 flex-col justify-between items-center flex"
          >
            <div className="self-stretch flex-col justify-start items-center flex">
              <div className="self-stretch px-[6.40px] py-1.5 bg-white rounded-tr-lg border-b border-neutral-400 justify-center items-center gap-[6.55px] flex">
                <div className="text-black text-lg font-bold font-['Nunito Sans']">
                  ChatGPT
                </div>
                <InlineSVG src={GPTGreenImg} />
              </div>
              <div className="self-stretch p-6 rounded-tl-[10px] rounded-tr-[10px] justify-start items-start gap-6 flex">
                <div className="w-[30px] h-[30px] pb-px bg-purple-600 rounded-sm justify-center items-center flex">
                  <div className="grow shrink basis-0 h-[29px] text-center text-white text-base font-semibold font-['Segoe UI'] leading-7">
                    Y
                  </div>
                </div>
                <div className="grow shrink basis-0 text-right text-zinc-700 text-base font-normal font-['Segoe UI'] leading-7">
                  תוכל לעזור לי להבין מה העקרונות לבניית תקציב אישי ?
                </div>
                <div className="py-1.5 justify-start items-start gap-3 flex">
                  <button>
                    <InlineSVG src={HandDownImg} />
                  </button>
                  <button>
                    {" "}
                    <InlineSVG src={HandUpImg} />
                  </button>
                </div>
              </div>
              <div className="self-stretch p-6 bg-neutral-100 border border-gray-300 justify-start items-start gap-6 flex">
                <InlineSVG
                  src={GPTImg}
                  className="w-[30px] h-[30px] p-1 bg-teal-600 rounded-sm"
                />
                <div className="grow shrink basis-0 text-right">
                  <span className="text-zinc-700 text-base font-normal font-['Segoe UI'] leading-7">
                    כמובן, אשמח לעזור לך להבין את העקרונות הבסיסיים לבניית תקציב
                    אישי.
                    <br />
                  </span>
                  <span className="text-zinc-700 text-base font-normal font-['Segoe UI'] leading-7">
                    1. תיעוד ההוצאות וההכנסות
                    <br />
                    2. קביעת מטרות
                    <br />
                    3. תכנון והקצאת תקציב
                    <br />
                    4. חיסכון והשקעה
                  </span>
                </div>
                <div className="py-1.5 justify-start items-start gap-3 flex">
                  <button>
                    <InlineSVG src={HandDownImg} />
                  </button>
                  <button>
                    {" "}
                    <InlineSVG src={HandUpImg} />
                  </button>
                </div>
              </div>
              <div className="self-stretch p-6 rounded-tl-[10px] rounded-tr-[10px] justify-start items-start gap-6 flex">
                <div className="w-[30px] h-[30px] pb-px bg-purple-600 rounded-sm justify-center items-center flex">
                  <div className="grow shrink basis-0 h-[29px] text-center text-white text-base font-semibold font-['Segoe UI'] leading-7">
                    Y
                  </div>
                </div>
                <div className="grow shrink basis-0 text-right text-zinc-700 text-base font-normal font-['Segoe UI'] leading-7">
                  תוכל לפרט סעיף של קביעת מטרות?
                </div>
                <div className="py-1.5 justify-start items-start gap-3 flex">
                  <button>
                    <InlineSVG src={HandDownImg} />
                  </button>
                  <button>
                    {" "}
                    <InlineSVG src={HandUpImg} />
                  </button>
                </div>
              </div>
              <div className="self-stretch p-6 bg-neutral-100 border border-gray-300 justify-start items-start gap-6 flex">
                <InlineSVG
                  src={GPTImg}
                  className="w-[30px] h-[30px] p-1 bg-teal-600 rounded-sm"
                />
                <div className="grow shrink basis-0 text-right text-zinc-700 text-base font-normal font-['Segoe UI'] leading-7">
                  בוודאי, קביעת מטרות היא חלק חשוב מאוד
                  <br />
                  בתהליך בניית התקציב האישי. הנה כמה פרטים וטיפים על קביעת מטרות
                  פיננסיות:
                </div>
                <div className="py-1.5 justify-start items-start gap-3 flex">
                  <button>
                    <InlineSVG src={HandDownImg} />
                  </button>
                  <button>
                    {" "}
                    <InlineSVG src={HandUpImg} />
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-12 pb-2 flex-col justify-start items-start gap-1 flex">
              <div className="w-full px-6">
                <Input
                  className="h-[50px] px-[17px] pt-[19px] pb-[15px]
                             bg-white rounded-md shadow border border-gray-300"
                  prefix={<InlineSVG src={SendImg} />}
                />
              </div>
              <div className="self-stretch px-5 py-2 justify-start items-start gap-2 flex">
                <div className="grow shrink basis-0 opacity-70 text-center">
                  <a className="text-gray-700 text-xs font-normal font-['Segoe UI'] underline leading-none">
                    ChatGPT Jan 30 Version
                  </a>
                  <span className="text-gray-700 text-xs font-normal font-['Segoe UI'] leading-none">
                    . Free Research Preview. Our goal is to make AI systems more
                    natural and safe to interact with. Your feedback will help
                    us improve.
                  </span>
                </div>
              </div>
            </div>
            <div
              className="h-11 px-2.5 py-1.5 bg-teal-600 rounded-bl-lg rounded-br-lg absolute top-[400px] -right-[166px]
                border-b border-neutral-400 flex flex-row justify-start items-center gap-[6.55px] origin-top-left -rotate-90"
            >
              <button
                className="p-1.5 flex justify-start items-start gap-2.5 rounded-[30px]  hover:bg-slate-300"
                onClick={() => setClick(!isClick)}
              >
                <InlineSVG
                  width={20}
                  height={20}
                  src={isClick ? CloseImg : DownImg}
                  className=" stroke-white"
                />
              </button>
              <div className="py-1.5">
                <InlineSVG src={GPTImg} />
              </div>
              <div className="py-1.5 text-white text-lg font-bold font-['Nunito Sans']">
                ChatGPT
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChatGPT;
