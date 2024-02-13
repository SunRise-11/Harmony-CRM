import { useContext } from "react";
import InlineSVG from "react-inlinesvg";

import avatarImg from "../../../../assets/images/avatar.png";
import logoutImg from "../../../../assets/icons/logout.svg";
import settingImg from "../../../../assets/icons/setting.svg";

const Theme = ({ showChangeTheme, setShowChangeTheme }) => {
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
          display: showChangeTheme ? "block" : "none",
        }}
        className="header-theme-modal"
      >
        <div className="header-theme-modal-main">
          <div className="header-theme-modal-main-title">צבעי תצוגה</div>
          <div className="header-theme-modal-main-board">
            {colors.map((themeColors, index) => (
              <div
                key={index}
                style={{
                  paddingBottom: index + 1 === colors.length ? "18.5px" : "0px",
                  borderRadius:
                    index + 1 === colors.length ? "0 0 12px 12px" : 0,
                }}
                onClick={() => {
                  setShowChangeTheme(false);
                }}
                className="header-theme-modal-main-board-theme"
              >
                <div className="header-theme-modal-main-board-theme-bar">
                  {themeColors.reverse().map((color, index) => (
                    <div
                      key={index}
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
  );
};

export default Theme;
