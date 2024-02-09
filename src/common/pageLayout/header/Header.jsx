import React, { useState } from "react";
import { Button } from "antd";
import InlineSVG from "react-inlinesvg";

import searchImg from "../../../assets/icons/search.svg";
import userImg from "../../../assets/icons/user.svg";
import downImg from "../../../assets/icons/down.svg";
import Theme from "./Theme";

const Header = () => {
  const [showChangeTheme, setShowChangeTheme] = useState(false);
  const [isDropVisible, setDropVisible] = useState("invisible");
  const [isSearchVisible, setSearchVisible] = useState("invisible");

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
        </div>
        <Theme
          showChangeTheme={showChangeTheme}
          setShowChangeTheme={setShowChangeTheme}
        />
      </div>
    </>
  );
};

export default Header;
