import React from "react";
import InlineSVG from "react-inlinesvg";
import userSVG from "../../../../../assets/icons/user.svg";
import geometricsSVG from "../../../../../assets/icons/geometrics.svg";
import usersSVG from "../../../../../assets/icons/users.svg";
import studySVG from "../../../../../assets/icons/study.svg";
import jobSVG from "../../../../../assets/icons/job.svg";
import planSVG from "../../../../../assets/icons/plan2.svg";
import detailSVG from "../../../../../assets/icons/detail.svg";

const data = [
  {
    text: "פרטי מקבל שירות",
    icon: userSVG,
  },
  {
    text: "כתובת ופרטי התקשרות",
    icon: geometricsSVG,
  },
  {
    text: "אנשי קשר",
    icon: usersSVG,
  },
  {
    text: "השכלה",
    icon: studySVG,
  },
  {
    text: "עבודה",
    icon: jobSVG,
  },
  {
    text: "תוכניות",
    icon: planSVG,
  },
  {
    text: "פרטים נוספים",
    icon: detailSVG,
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
            setCurrent(index);
          }}
        >
          <InlineSVG
            src={item.icon}
            width={24}
            height={24}
            style={{ stroke: index === current ? "white" : "#434F68" }}
          />
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
