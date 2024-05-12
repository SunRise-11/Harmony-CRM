import InlineSVG from "react-inlinesvg";

import bellIcon from "../../assets/icons/master/bell.svg";
import editIcon from "../../assets/icons/master/edit.svg";
import trashIcon from "../../assets/icons/master/trash.svg";
import paperclipIcon from "../../assets/icons/master/paperclip.svg";

const datas = [
  { text: "עריכה", icon: editIcon },
  { text: "מחיקה", icon: trashIcon },
  { text: "הוספת תזכורת", icon: bellIcon },
  { text: "הוספת קבצים", icon: paperclipIcon },
];
const QuickMenu = ({ visible, hide }) => {
  return (
    <div
      className="quick-menu"
      style={{ visibility: visible ? "visible" : "hidden", zIndex: 5 }}
    >
      <div
        className="quick-menu-hide"
        onClick={(event) => {
          hide();
        }}
      />
      {datas.map((data, index) => (
        <div className="quick-menu-item" key={index} onClick={() => hide()}>
          <InlineSVG src={data.icon} style={{ stroke: "#5177a4" }} />
          <span>{data.text}</span>
        </div>
      ))}
    </div>
  );
};

export default QuickMenu;
