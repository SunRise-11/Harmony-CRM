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
          className="header-invisible-div"
          onClick={() => {
            setSearchVisible("invisible");
            setDropVisible("invisible");
            setShowChangeTheme(false);
          }}
        ></div>
      )}
      <div className="header">
        <div>
          <Button
            className="header-modal1-board-content-div20"
            onClick={() => {
              setDropVisible("visible");
              setSearchVisible("invisible");
            }}
          >
            <InlineSVG src={userImg} />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                justifyContent: "flex-end",
              }}
            >
              <div className="header-modal1-board-content-text4">
                חיפוש מקבל שירות..
              </div>
              <InlineSVG src={downImg} />
            </div>
          </Button>
          <div
            style={{
              visibility: isDropVisible === "invisible" ? "hidden" : "visible",
            }}
            className="header-modal1-board-content-div19"
          >
            <div className="header-modal1-board-content-div18">
              <div className="header-modal1-board-content-text3">שא</div>
              <InlineSVG src={searchImg} />
            </div>
            <div
              style={{
                display: "flex",
                gap: "0.125rem",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flexDirection: "column",
              }}
            >
              <div className="header-modal1-board-content-div17">
                <div className="header-modal1-board-content-div16">
                  <div
                    className="header-modal1-board-content-text"
                    style={{ color: "#38b2ac" }}
                  >
                    מקבל שירות
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    display: "flex",
                  }}
                >
                  <div className="header-modal1-board-content-div">
                    <div
                      className="header-modal1-board-content-text"
                      style={{ color: "#64748B" }}
                    >
                      שם
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div">
                    <div
                      className="header-modal1-board-content-text"
                      style={{ color: "#64748B" }}
                    >
                      מחוז
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div">
                    <div
                      className="header-modal1-board-content-text"
                      style={{ color: "#64748B" }}
                    >
                      עיר
                    </div>
                  </div>
                </div>
              </div>
              <a>
                <div
                  className="header-modal1-board-content-div15"
                  style={{ backgroundColor: "initial" }}
                >
                  <div className="header-modal1-board-content-div14">
                    <img src={avatarImg1} />
                    <div
                      style={{
                        flexGrow: "1",
                        flexShrink: "1",
                        flexBasis: "0",
                        textAlign: "right",
                      }}
                    >
                      <span
                        className="header-modal1-board-content-text"
                        style={{ color: "#2563EB" }}
                      >
                        שא
                      </span>
                      <span
                        className="header-modal1-board-content-text"
                        style={{ color: "black" }}
                      >
                        מייר מלמד
                      </span>
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div13">
                    <div
                      className="header-modal1-board-content-div12"
                      style={{ color: "black" }}
                    >
                      צפון
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div13">
                    <div
                      className="header-modal1-board-content-div12"
                      style={{ color: "black" }}
                    >
                      חיפה
                    </div>
                  </div>
                </div>
              </a>

              <a>
                <div className="header-modal1-board-content-div15">
                  <div className="header-modal1-board-content-div14">
                    <img src={avatarImg2} />
                    <div
                      style={{
                        flexGrow: "1",
                        flexShrink: "1",
                        flexBasis: "0",
                        textAlign: "right",
                      }}
                    >
                      <span
                        className="header-modal1-board-content-text"
                        style={{ color: "black" }}
                      >
                        ירון
                      </span>
                      <span
                        className="header-modal1-board-content-text"
                        style={{ color: "#2563EB" }}
                      >
                        שא
                      </span>
                      <span
                        className="header-modal1-board-content-text"
                        style={{ color: "black" }}
                      >
                        יוני
                      </span>
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div13">
                    <div
                      className="header-modal1-board-content-div12"
                      style={{ color: "black" }}
                    >
                      דרום
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div13">
                    <div
                      className="header-modal1-board-content-div12"
                      style={{ color: "black" }}
                    >
                      באר שבע
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div>
          <Button
            className="header-modal1-button"
            onClick={() => {
              setSearchVisible("visible");
              setDropVisible("invisible");
            }}
          >
            <div className="header-modal1-button-text">חיפוש כללי...</div>
            <InlineSVG src={searchImg} />
          </Button>
          <div
            style={{
              visibility:
                isSearchVisible === "invisible" ? "hidden" : "visible",
            }}
            className="header-modal1-board"
          >
            <div className="header-modal1-board-title">
              שא
              <InlineSVG src={searchImg} />
            </div>
            <div className="header-modal1-board-content">
              <div className="header-modal1-board-content-div">
                <div className="header-modal1-board-content-div">
                  <div
                    className="header-modal1-board-content-div11"
                    style={{ backgroundColor: "#93c5fd" }}
                  >
                    <div
                      className="header-modal1-board-content-text"
                      style={{ color: "#38b2ac" }}
                    >
                      עובד
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div6">
                    <div className="header-modal1-board-content-div">
                      <div
                        className="header-modal1-board-content-text"
                        style={{ color: "#64748B" }}
                      >
                        שם
                      </div>
                    </div>
                    <div className="header-modal1-board-content-div">
                      <div
                        className="header-modal1-board-content-text"
                        style={{ color: "#64748B" }}
                      >
                        מחוז
                      </div>
                    </div>
                    <div className="header-modal1-board-content-div">
                      <div
                        className="header-modal1-board-content-text"
                        style={{ color: "#64748B" }}
                      >
                        תפקיד
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-modal1-board-content-div10">
                  <div className="header-modal1-board-content-div8">
                    <img src={avatarImg3} />
                    <div style={{ textAlign: "right" }}>
                      <span
                        className="header-modal1-board-content-text"
                        style={{ color: "black" }}
                      >
                        חזי נבא
                      </span>
                      <span
                        className="header-modal1-board-content-text"
                        style={{ color: "#2563EB" }}
                      >
                        שא
                      </span>
                      <span
                        className="header-modal1-board-content-text"
                        style={{ color: "black" }}
                      >
                        ווילי
                      </span>
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div2">
                    <div
                      className="header-modal1-board-content-text"
                      style={{ color: "black", textAlign: "right" }}
                    >
                      מרכז
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div2">
                    <div
                      className="header-modal1-board-content-text"
                      style={{ color: "black", textAlign: "right" }}
                    >
                      מנהל אזור
                    </div>
                  </div>
                </div>

                <div className="header-modal1-board-content-div9">
                  <div className="header-modal1-board-content-div8">
                    <img src={avatarImg4} />
                    <div style={{ textAlign: "right" }}>
                      <span
                        className="header-modal1-board-content-text"
                        style={{ color: "#2563EB" }}
                      >
                        שא
                      </span>
                      <span
                        className="header-modal1-board-content-text"
                        style={{ color: "black" }}
                      >
                        בי סילברמן
                      </span>
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div2">
                    <div
                      className="header-modal1-board-content-text"
                      style={{ color: "black", textAlign: "right" }}
                    >
                      צפון
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div2">
                    <div
                      className="header-modal1-board-content-text"
                      style={{ color: "black", textAlign: "right" }}
                    >
                      רכז
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-modal1-board-content-div">
                <div className="header-modal1-board-content-div">
                  <div className="header-modal1-board-content-div11">
                    <div
                      className="header-modal1-board-content-text"
                      style={{ color: "#38b2ac" }}
                    >
                      מקבל שירות
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div6">
                    <div className="header-modal1-board-content-div">
                      <div
                        className="header-modal1-board-content-text"
                        style={{ color: "#64748B" }}
                      >
                        שם
                      </div>
                    </div>
                    <div className="header-modal1-board-content-div">
                      <div
                        className="header-modal1-board-content-text"
                        style={{ color: "#64748B" }}
                      >
                        מחוז
                      </div>
                    </div>
                    <div className="header-modal1-board-content-div">
                      <div
                        className="header-modal1-board-content-text"
                        style={{ color: "#64748B" }}
                      >
                        עיר
                      </div>
                    </div>
                    <div className="header-modal1-board-content-div">
                      <div
                        className="header-modal1-board-content-text"
                        style={{ color: "#64748B" }}
                      >
                        ת.ז
                      </div>
                    </div>
                    <div className="header-modal1-board-content-div">
                      <div
                        className="header-modal1-board-content-text"
                        style={{ color: "#64748B" }}
                      >
                        דוא”ל
                      </div>
                    </div>
                    <div className="header-modal1-board-content-div">
                      <div
                        className="header-modal1-board-content-text"
                        style={{ color: "#64748B" }}
                      >
                        טלפון
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-modal1-board-content-div10">
                  <div className="header-modal1-board-content-div8">
                    <img src={avatarImg1} />
                    <div className="text-right">
                      <span
                        className="header-modal1-board-content-text"
                        style={{ color: "#2563EB" }}
                      >
                        שא
                      </span>
                      <span
                        className="header-modal1-board-content-text"
                        style={{ color: "black" }}
                      >
                        מייר מלמד
                      </span>
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div2">
                    <div
                      className="header-modal1-board-content-text"
                      style={{ color: "black", textAlign: "right" }}
                    >
                      צפון
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div2">
                    <div
                      className="header-modal1-board-content-text"
                      style={{ color: "black", textAlign: "right" }}
                    >
                      חיפה
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div2">
                    <div className="header-modal1-board-content-text2">
                      509451871
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div2">
                    <div
                      className="header-modal1-board-content-text"
                      style={{
                        color: "black",
                        flexBasis: "0",
                        flexGrow: "1",
                        flexShrink: "1",
                      }}
                    >
                      ...shmulik@netvision
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div2">
                    <div
                      className="header-modal1-board-content-text2"
                      style={{ textAlign: "right" }}
                    >
                      23562842 -054
                    </div>
                  </div>
                </div>
                <div className="header-modal1-board-content-div9">
                  <div className="header-modal1-board-content-div8">
                    <img src={avatarImg2} />
                    <div className="text-right">
                      <span
                        className="header-modal1-board-content-text"
                        style={{ color: "black" }}
                      >
                        ירון{" "}
                      </span>
                      <span
                        className="header-modal1-board-content-text"
                        style={{ color: "#2563EB" }}
                      >
                        שא
                      </span>
                      <span
                        className="header-modal1-board-content-text"
                        style={{ color: "black" }}
                      >
                        יוני
                      </span>
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div2">
                    <div
                      className="header-modal1-board-content-text"
                      style={{ color: "black", textAlign: "right" }}
                    >
                      דרום
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div2">
                    <div
                      className="header-modal1-board-content-text"
                      style={{ color: "black", textAlign: "right" }}
                    >
                      באר שבע
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div2">
                    <div
                      className="header-modal1-board-content-text2"
                      style={{ textAlign: "right" }}
                    >
                      509451871
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div2">
                    <div
                      className="header-modal1-board-content-text"
                      style={{
                        color: "black",
                        flexGrow: "1",
                        flexShrink: "1",
                        flexBasis: "0",
                      }}
                    >
                      mimo56@yahoo.com
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div2">
                    <div
                      className="header-modal1-board-content-text2"
                      style={{ textAlign: "right" }}
                    >
                      21653632- 054
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-modal1-board-content-div">
                <div className="header-modal1-board-content-div">
                  <div className="header-modal1-board-content-div7">
                    <div
                      className="header-modal1-board-content-text"
                      style={{ color: "#38b2ac" }}
                    >
                      שאלון
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div6">
                    <div className="header-modal1-board-content-div">
                      <div
                        className="header-modal1-board-content-text"
                        style={{ color: "#64748B" }}
                      >
                        שם
                      </div>
                    </div>
                    <div className="header-modal1-board-content-div">
                      <div
                        className="header-modal1-board-content-text"
                        style={{ color: "#64748B" }}
                      >
                        תיאור
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-modal1-board-content-div5">
                  <div className="header-modal1-board-content-div3">
                    <div className="text-right">
                      <span
                        className="header-modal1-board-content-text"
                        style={{ color: "#2563EB" }}
                      >
                        שא
                      </span>
                      <span
                        className="header-modal1-board-content-text"
                        style={{ color: "black" }}
                      >
                        לון מוטיבציה
                      </span>
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div2">
                    <div className="text-right">
                      <span
                        className="header-modal1-board-content-text"
                        style={{ color: "#2563EB" }}
                      >
                        שא
                      </span>
                      <span
                        className="header-modal1-board-content-text"
                        style={{ color: "black" }}
                      >
                        לון יכולת חמשת הצירים
                      </span>
                    </div>
                  </div>
                </div>
                <div className="header-modal1-board-content-div4">
                  <div className="header-modal1-board-content-div3">
                    <div className="text-right">
                      <span
                        className="header-modal1-board-content-text"
                        style={{ color: "#2563EB" }}
                      >
                        שא
                      </span>
                      <span
                        className="header-modal1-board-content-text"
                        style={{ color: "black" }}
                      >
                        לון התמדה
                      </span>
                    </div>
                  </div>
                  <div className="header-modal1-board-content-div2">
                    <div style={{ textAlign: "right" }}>
                      <span
                        className="header-modal1-board-content-text"
                        style={{ color: "#2563EB" }}
                      >
                        שא
                      </span>
                      <span
                        className="header-modal1-board-content-text"
                        style={{ color: "black" }}
                      >
                        לון יכולת חמשת הצירים
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="header-theme-button">
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
              visibility: showChangeTheme ? "visible" : "hidden",
            }}
            className="header-theme-modal"
          >
            <div className="header-theme-modal-main">
              <div className="header-theme-modal-main-title">צבעי תצוגה</div>
              <div className="header-theme-modal-main-board">
                {colors.map((themeColors, index) => (
                  <div
                    style={{
                      paddingBottom:
                        index + 1 === colors.length ? "18.5px" : "12px",
                      borderRadius:
                        index + 1 === colors.length ? "0 0 12px 12px" : 0,
                    }}
                    onClick={() => {
                      setTheme(themes[index]);
                      setShowChangeTheme(false);
                    }}
                    className="header-theme-modal-main-board-theme"
                  >
                    <div className="header-theme-modal-main-board-theme-bar">
                      {themeColors.reverse().map((color) => (
                        <div
                          className="header-theme-modal-main-board-theme-bar-color"
                          style={{
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
