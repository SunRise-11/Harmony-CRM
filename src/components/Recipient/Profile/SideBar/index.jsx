import React from "react";
import InlineSVG from "react-inlinesvg";

import userIcon from "../../../../assets/icons/master/user.svg";
import locationIcon from "../../../../assets/icons/master/location.svg";
import usersIcon from "../../../../assets/icons/master/users.svg";
import educationIcon from "../../../../assets/icons/master/education.svg";
import bagIcon from "../../../../assets/icons/master/bag.svg";
import routeIcon from "../../../../assets/icons/master/route.svg";
import puzzleIcon from "../../../../assets/icons/master/puzzle.svg";

const data = [
  {
    text: "פרטי מקבל שירות",
    icon: userIcon,
  },
  {
    text: "כתובת ופרטי התקשרות",
    icon: locationIcon,
  },
  {
    text: "אנשי קשר",
    icon: usersIcon,
  },
  {
    text: "השכלה",
    icon: educationIcon,
  },
  {
    text: "עבודה",
    icon: bagIcon,
  },
  {
    text: "תוכניות",
    icon: routeIcon,
  },
  {
    text: "פרטים נוספים",
    icon: puzzleIcon,
  },
];

const SideBar = ({ current, setCurrent }) => {
  return (
    <div className="recipient-profile-sidebar">
      {data.map((item, index) => (
        <div
          className="recipient-profile-sidebar-item"
          key={index}
          style={
            index === current
              ? {
                  color: "white",
                  backgroundColor: "#FFB400",
                  borderColor: "transparent",
                }
              : {}
          }
          onClick={() => {
            // setCurrent(index);
            const [element] = document.getElementsByClassName(
              "recipient-profile-board"
            );
            element.children[index].scrollIntoView({ behavior: "smooth" });
          }}
        >
          <InlineSVG
            src={item.icon}
            width={24}
            height={24}
            style={{ stroke: index === current ? "white" : "#000000D0" }}
          />
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
