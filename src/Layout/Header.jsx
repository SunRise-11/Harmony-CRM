import React, { useContext, useState } from "react";
import { Button } from "antd";
import InlineSVG from "react-inlinesvg";
import { motion } from "framer-motion";
import avatarImg from "../assets/images/avatar.png";
import avatarImg1 from "../assets/images/avatar1.png";
import avatarImg2 from "../assets/images/avatar2.png";
import avatarImg3 from "../assets/images/avatar3.png";
import avatarImg4 from "../assets/images/avatar4.png";

import logoutImg from "../assets/icons/logout.svg";
import settingImg from "../assets/icons/setting.svg";
import searchImg from "../assets/icons/search.svg";
import userImg from "../assets/icons/user.svg";
import downImg from "../assets/icons/down.svg";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const [showChangeTheme, setShowChangeTheme] = useState(false);
  const [isDropVisible, setDropVisible] = useState("invisible");
  const [isSearchVisible, setSearchVisible] = useState("invisible");
  const { setTheme } = useContext(ThemeContext);
  const themes = ["original", "suggested", "monday", "dynamics"];
  const colors = [
    [
      "#16BFD6",
      "#0096EB",
      "#4A9ECD",
      "#5FBCFF",
      "#B3E3E3",
      "#D3EDF6",
      "#8AD341",
      "#E5D3B0",
      "#FFAB48",
      "#FF7979",
      "#F765A3",
      "#A155B9",
      "#FFFFFF",
      "#EAF0F2",
      "#344449",
      "#000000",
    ],
    [
      "#70C6DD",
      "#79AE94",
      "#ABD1BC",
      "#EEAE70",
      "#FFFFFF",
      "#EFEFEF",
      "#271E31",
    ],
    [
      "#599BFC",
      "#01C875",
      "#FECB02",
      "#FDAC35",
      "#FE58C4",
      "#E0445A",
      "#A35CDE",
      "#FFFFFF",
      "#4C4B50",
      "#271E31",
    ],
    [
      "#3499DB",
      "#2ECC72",
      "#F1C60E",
      "#E77D24",
      "#CC3C74",
      "#FFFFFF",
      "#3E5766",
      "#271E31",
    ],
  ];
  return (
    <>
      {(isDropVisible !== "invisible" ||
        isSearchVisible !== "invisible" ||
        showChangeTheme) && (
        <div
          className="opacity-0 fixed h-[100vh] w-[100vw]"
          onClick={() => {
            setSearchVisible("invisible");
            setDropVisible("invisible");
            setShowChangeTheme(false);
          }}
        ></div>
      )}
      <div className="h-16 pl-5 pr-[60px] py-2.5 bg-white shadow border-b border-purple-400 gap-x-2.5 flex flex-row justify-around">
        <div className="relative ">
          <Button
            className="w-[480px] h-11 px-2.5 py-[3px] bg-gray-100 rounded-[10px] border border-gray-300 flex justify-between items-center"
            onClick={() => {
              setDropVisible("visible");
              setSearchVisible("invisible");
            }}
          >
            <InlineSVG src={userImg} />
            <div className="justify-end items-center gap-2.5 flex">
              <div className="text-right text-slate-600 text-[15px] font-medium font-['Afek 1.5 AAA']">
                חיפוש מקבל שירות..
              </div>
              <InlineSVG src={downImg} />
            </div>
          </Button>
          <div
            className={`${isDropVisible} w-[838px] h-[220px] p-[5px] absolute inset-0 top-[-7px] z-10 bg-white 
                        rounded-tl-[26px] rounded-tr-[26px] rounded-bl-[13px] rounded-br-[13px] shadow flex-col justify-start items-start gap-0.5 inline-flex`}
          >
            <div className="w-[828px] h-11 pl-5 pr-[30px] bg-white rounded-[30px] border-2 border-blue-600 justify-between items-center inline-flex">
              <div className="text-right text-blue-600 text-[15px] font-semibold font-['Afek 1.5 AAA']">
                שא
              </div>
              <InlineSVG src={searchImg} />
            </div>
            <div className="flex-col justify-start items-start gap-0.5 flex">
              <div className="w-[828px] flex-col justify-start items-start inline-flex">
                <div className="self-stretch pl-0.5 pr-2.5 py-1.5 bg-amber-300 rounded-tl-[10px] rounded-tr-[10px] justify-center items-center gap-2.5 inline-flex">
                  <div className="text-center text-cyan-900 text-[15px] font-medium font-['Afek 1.5 AAA']">
                    מקבל שירות
                  </div>
                </div>
                <div className="self-stretch justify-start items-start flex">
                  <div className="grow shrink basis-0 h-[18px] pl-0.5 pr-2.5 py-[5px] bg-gray-100 justify-start items-center gap-2.5 flex">
                    <div className="text-center text-slate-500 text-xs font-normal font-['Afek 1.5 AAA']">
                      שם
                    </div>
                  </div>
                  <div className="grow shrink basis-0 h-[18px] pl-0.5 pr-2.5 py-[5px] bg-gray-100 justify-start items-center gap-2.5 flex">
                    <div className="text-center text-slate-500 text-xs font-normal font-['Afek 1.5 AAA']">
                      מחוז
                    </div>
                  </div>
                  <div className="grow shrink basis-0 h-[18px] pl-0.5 pr-2.5 py-[5px] bg-gray-100 justify-start items-center gap-2.5 flex">
                    <div className="text-center text-slate-500 text-xs font-normal font-['Afek 1.5 AAA']">
                      עיר
                    </div>
                  </div>
                </div>
              </div>
              <a>
                <div className="w-[828px] h-12 bg-white border border-gray-100 hover:bg-sky-100 justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 h-12 px-2.5 py-3.5 border-gray-100 justify-end items-center gap-2.5 flex">
                    <img src={avatarImg1} />
                    <div className="grow shrink basis-0 text-right">
                      <span className="text-blue-600 text-[15px] font-bold font-['Afek 1.5 AAA']">
                        שא
                      </span>
                      <span className="text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                        מייר מלמד
                      </span>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-2.5 py-3.5 border-gray-100 justify-end items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-right text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                      צפון
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-2.5 py-3.5 border-gray-100 justify-end items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-right text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                      חיפה
                    </div>
                  </div>
                </div>
              </a>

              <a>
                <div className="w-[828px] bg-white rounded-bl-[10px] rounded-br-[10px] border border-gray-100 hover:bg-sky-100 justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 h-12 px-2.5 py-3.5 border-gray-100 justify-end items-center gap-2.5 flex">
                    <img src={avatarImg2} />
                    <div className="grow shrink basis-0 text-right">
                      <span className="text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                        ירון{" "}
                      </span>
                      <span className="text-blue-600 text-[15px] font-bold font-['Afek 1.5 AAA']">
                        שא
                      </span>
                      <span className="text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                        יוני
                      </span>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-2.5 py-3.5 border-gray-100 justify-end items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-right text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                      דרום
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-2.5 py-3.5 border-gray-100 justify-end items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-right text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                      באר שבע
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <Button
            className="w-[960px] h-11 pl-3 pr-[30px]
                 bg-gray-100 rounded-[20px] order-gray-300
                  justify-between items-center inline-flex"
            onClick={() => {
              setSearchVisible("visible");
              setDropVisible("invisible");
            }}
          >
            <div className="text-right text-[15px] font-medium font-['Afek 1.5 AAA']">
              חיפוש כללי...
            </div>
            <InlineSVG src={searchImg} />
          </Button>
          <div
            className={`${isSearchVisible} w-[1015px] p-[5px] bg-white rounded-tl-[26px] rounded-tr-[26px] rounded-bl-[13px] rounded-br-[13px] 
                    shadow flex-col justify-start items-start gap-0.5 inline-flex absolute top-[-7px] inset-x-0 z-10`}
          >
            <div className="w-[1005px] h-11 pl-5 pr-[30px] bg-white rounded-[30px] border-2 border-blue-600 justify-between items-center inline-flex">
              <div className="text-right text-blue-600 text-[15px] font-semibold font-['Afek 1.5 AAA']">
                שא
              </div>
              <InlineSVG src={searchImg} />
            </div>
            <div className="flex-col justify-start items-start gap-0.5 flex">
              <div className="flex-col justify-start items-start flex">
                <div className="flex-col justify-start items-start flex">
                  <div className="w-[1005px] pl-0.5 pr-2.5 py-1.5 bg-sky-200 rounded-tl-[10px] rounded-tr-[10px] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-center text-cyan-900 text-[15px] font-medium font-['Afek 1.5 AAA']">
                      עובד
                    </div>
                  </div>
                  <div className="w-[1005px] justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 h-[18px] pl-0.5 pr-2.5 py-[5px] bg-gray-100 justify-start items-center gap-2.5 flex">
                      <div className="text-center text-slate-500 text-xs font-normal font-['Afek 1.5 AAA']">
                        שם
                      </div>
                    </div>
                    <div className="grow shrink basis-0 h-[18px] pl-0.5 pr-2.5 py-[5px] bg-gray-100 justify-start items-center gap-2.5 flex">
                      <div className="text-center text-slate-500 text-xs font-normal font-['Afek 1.5 AAA']">
                        מחוז
                      </div>
                    </div>
                    <div className="grow shrink basis-0 h-[18px] pl-0.5 pr-2.5 py-[5px] bg-gray-100 justify-start items-center gap-2.5 flex">
                      <div className="text-center text-slate-500 text-xs font-normal font-['Afek 1.5 AAA']">
                        תפקיד
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[1005px] hover:bg-sky-100 bg-white border border-gray-100 justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 h-12 px-2.5 py-3.5 border-gray-100 justify-start items-center gap-2.5 flex">
                    <img src={avatarImg3} />
                    <div className="text-right">
                      <span className="text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                        חזי נבא
                      </span>
                      <span className="text-blue-600 text-[15px] font-bold font-['Afek 1.5 AAA']">
                        שא
                      </span>
                      <span className="text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                        ווילי
                      </span>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-2.5 py-3.5 border-gray-100 justify-start items-center gap-2.5 flex">
                    <div className="text-right text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                      מרכז
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-2.5 py-3.5 border-gray-100 justify-start items-center gap-2.5 flex">
                    <div className="text-right text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                      מנהל אזור
                    </div>
                  </div>
                </div>

                <div className="w-[1005px] hover:bg-sky-100 bg-white rounded-bl-[10px] rounded-br-[10px] border border-gray-100 justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 h-12 px-2.5 py-3.5 border-gray-100 justify-start items-center gap-2.5 flex">
                    <img src={avatarImg4} />
                    <div className="text-right">
                      <span className="text-blue-600 text-[15px] font-bold font-['Afek 1.5 AAA']">
                        שא
                      </span>
                      <span className="text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                        בי סילברמן
                      </span>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-2.5 py-3.5 border-gray-100 justify-start items-center gap-2.5 flex">
                    <div className="text-right text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                      צפון
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-2.5 py-3.5 border-gray-100 justify-start items-center gap-2.5 flex">
                    <div className="text-right text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                      רכז
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start flex">
                <div className="flex-col justify-start items-start flex">
                  <div className="w-[1005px] pl-0.5 pr-2.5 py-1.5 bg-amber-300 rounded-tl-[10px] rounded-tr-[10px] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-center text-cyan-900 text-[15px] font-medium font-['Afek 1.5 AAA']">
                      מקבל שירות
                    </div>
                  </div>
                  <div className="w-[1005px] justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 h-[18px] pl-0.5 pr-2.5 py-[5px] bg-gray-100 justify-start items-center gap-2.5 flex">
                      <div className="text-center text-slate-500 text-xs font-normal font-['Afek 1.5 AAA']">
                        שם
                      </div>
                    </div>
                    <div className="grow shrink basis-0 h-[18px] pl-0.5 pr-2.5 py-[5px] bg-gray-100 justify-start items-center gap-2.5 flex">
                      <div className="text-center text-slate-500 text-xs font-normal font-['Afek 1.5 AAA']">
                        מחוז
                      </div>
                    </div>
                    <div className="grow shrink basis-0 h-[18px] pl-0.5 pr-2.5 py-[5px] bg-gray-100 justify-start items-center gap-2.5 flex">
                      <div className="text-center text-slate-500 text-xs font-normal font-['Afek 1.5 AAA']">
                        עיר
                      </div>
                    </div>
                    <div className="grow shrink basis-0 h-[18px] pl-0.5 pr-2.5 py-[5px] bg-gray-100 justify-start items-center gap-2.5 flex">
                      <div className="text-center text-slate-500 text-xs font-normal font-['Afek 1.5 AAA']">
                        ת.ז
                      </div>
                    </div>
                    <div className="grow shrink basis-0 h-[18px] pl-0.5 pr-2.5 py-[5px] bg-gray-100 justify-start items-center gap-2.5 flex">
                      <div className="text-center text-slate-500 text-xs font-normal font-['Afek 1.5 AAA']">
                        דוא”ל
                      </div>
                    </div>
                    <div className="grow shrink basis-0 h-[18px] pl-0.5 pr-2.5 py-[5px] bg-gray-100 justify-start items-center gap-2.5 flex">
                      <div className="text-center text-slate-500 text-xs font-normal font-['Afek 1.5 AAA']">
                        טלפון
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[1005px] hover:bg-sky-100 bg-white border border-gray-100 justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 h-12 px-2.5 py-3.5 border-gray-100 justify-start items-center gap-2.5 flex">
                    <img src={avatarImg1} />
                    <div className="text-right">
                      <span className="text-blue-600 text-[15px] font-bold font-['Afek 1.5 AAA']">
                        שא
                      </span>
                      <span className="text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                        מייר מלמד
                      </span>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-2.5 py-3.5 border-gray-100 justify-start items-center gap-2.5 flex">
                    <div className="text-right text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                      צפון
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-2.5 py-3.5 border-gray-100 justify-start items-center gap-2.5 flex">
                    <div className="text-right text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                      חיפה
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-2.5 py-3.5 border-gray-100 justify-start items-center gap-2.5 flex">
                    <div className="text-right text-black text-base font-normal font-['Afek 1.5 AAA'] tracking-tight">
                      509451871
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-2.5 py-3.5 border-gray-100 justify-start items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-right text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                      ...shmulik@netvision
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-2.5 py-3.5 border-gray-100 justify-start items-center gap-2.5 flex">
                    <div className="text-right text-black text-base font-normal font-['Afek 1.5 AAA'] tracking-tight">
                      23562842 -054
                    </div>
                  </div>
                </div>
                <div className="w-[1005px] hover:bg-sky-100 bg-white rounded-bl-[10px] rounded-br-[10px] border border-gray-100 justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 h-12 px-2.5 py-3.5 border-gray-100 justify-start items-center gap-2.5 flex">
                    <img src={avatarImg2} />
                    <div className="text-right">
                      <span className="text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                        ירון{" "}
                      </span>
                      <span className="text-blue-600 text-[15px] font-bold font-['Afek 1.5 AAA']">
                        שא
                      </span>
                      <span className="text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                        יוני
                      </span>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-2.5 py-3.5 border-gray-100 justify-start items-center gap-2.5 flex">
                    <div className="text-right text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                      דרום
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-2.5 py-3.5 border-gray-100 justify-start items-center gap-2.5 flex">
                    <div className="text-right text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                      באר שבע
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-2.5 py-3.5 border-gray-100 justify-start items-center gap-2.5 flex">
                    <div className="text-right text-black text-base font-normal font-['Afek 1.5 AAA'] tracking-tight">
                      509451871
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-2.5 py-3.5 border-gray-100 justify-start items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-right text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                      mimo56@yahoo.com
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-2.5 py-3.5 border-gray-100 justify-start items-center gap-2.5 flex">
                    <div className="text-right text-black text-base font-normal font-['Afek 1.5 AAA'] tracking-tight">
                      21653632- 054
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start flex">
                <div className="flex-col justify-start items-start flex">
                  <div className="w-[1005px] pl-0.5 pr-2.5 py-1.5 bg-lime-300 rounded-tl-[10px] rounded-tr-[10px] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-center text-cyan-900 text-[15px] font-medium font-['Afek 1.5 AAA']">
                      שאלון
                    </div>
                  </div>
                  <div className="w-[1005px] justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 h-[18px] pl-0.5 pr-2.5 py-[5px] bg-gray-100 justify-start items-center gap-2.5 flex">
                      <div className="text-center text-slate-500 text-xs font-normal font-['Afek 1.5 AAA']">
                        שם
                      </div>
                    </div>
                    <div className="grow shrink basis-0 h-[18px] pl-0.5 pr-2.5 py-[5px] bg-gray-100 justify-start items-center gap-2.5 flex">
                      <div className="text-center text-slate-500 text-xs font-normal font-['Afek 1.5 AAA']">
                        תיאור
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[1005px] h-12 hover:bg-sky-100 bg-white border border-gray-100 justify-start items-center inline-flex">
                  <div className="grow shrink basis-0 h-[39px] px-2.5 py-3.5 border-gray-100 justify-start items-center gap-2.5 flex">
                    <div className="text-right">
                      <span className="text-blue-600 text-[15px] font-bold font-['Afek 1.5 AAA']">
                        שא
                      </span>
                      <span className="text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                        לון מוטיבציה
                      </span>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-2.5 py-3.5 border-gray-100 justify-start items-center gap-2.5 flex">
                    <div className="text-right">
                      <span className="text-blue-600 text-[15px] font-bold font-['Afek 1.5 AAA']">
                        שא
                      </span>
                      <span className="text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                        לון יכולת חמשת הצירים
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[1005px] h-12 hover:bg-sky-100 bg-white rounded-bl-[10px] rounded-br-[10px] border border-gray-100 justify-start items-center inline-flex">
                  <div className="grow shrink basis-0 h-[39px] px-2.5 py-3.5 border-gray-100 justify-start items-center gap-2.5 flex">
                    <div className="text-right">
                      <span className="text-blue-600 text-[15px] font-bold font-['Afek 1.5 AAA']">
                        שא
                      </span>
                      <span className="text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                        לון התמדה
                      </span>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch px-2.5 py-3.5 border-gray-100 justify-start items-center gap-2.5 flex">
                    <div className="text-right">
                      <span className="text-blue-600 text-[15px] font-bold font-['Afek 1.5 AAA']">
                        שא
                      </span>
                      <span className="text-black text-[15px] font-normal font-['Afek 1.5 AAA']">
                        לון יכולת חמשת הצירים
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "relative" }}>
          <div className="h-11 flex flex-row justify-start items-center gap-x-5">
            <a onClick={() => setShowChangeTheme(true)}>
              <InlineSVG src={settingImg} />
            </a>
            <a>
              <img src={avatarImg} width={44} height={44} />
            </a>
            <a>
              <InlineSVG src={logoutImg} />
            </a>
          </div>
          <div
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            ransition={{ duration: 0.5, delay: 0.2 }}
            style={{
              position: "relative",
              zIndex: 10,
              borderRadius: "12px",
              top: "-43px",
              left: "240px",
              background: "white",
              boxShadow: "0px 3px 20px rgba(0, 0, 0, 0.25)",
              visibility: showChangeTheme ? "visible" : "hidden",
            }}
            className="change-theme"
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  padding: "10px 0px",
                  borderBottom: "1px rgba(0, 0, 0, 0.15) solid",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "inline-flex",
                  lineHeight: "13px",
                }}
              >
                <div
                  style={{
                    textAlign: "right",
                    color: "#3F5263",
                    fontSize: 18,
                    fontFamily: "Afek 1.5 AAA",
                    fontWeight: 500,
                    wordWrap: "break-word",
                  }}
                >
                  צבעי תצוגה
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  height: 202.5,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "flex",
                }}
              >
                {colors.map((themeColors, index) => (
                  <div
                    style={{
                      padding: 12,
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 12,
                      display: "inline-flex",
                      paddingBottom:
                        index + 1 === colors.length ? "18.5px" : "12px",
                      borderRadius:
                        index + 1 === colors.length ? "0 0 12px 12px" : 0,
                    }}
                    onClick={() => {
                      setTheme(themes[index]);
                      setShowChangeTheme(false);
                    }}
                    className="hover:bg-neutral-600 hover:cursor-pointer"
                  >
                    <div
                      style={{
                        width: 208,
                        height: 25,
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        display: "flex",
                      }}
                    >
                      {themeColors.reverse().map((color) => (
                        <div
                          style={{
                            flex: "1 1 0",
                            alignSelf: "stretch",
                            background: color,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
