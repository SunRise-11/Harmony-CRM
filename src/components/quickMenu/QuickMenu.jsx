import bellSvg from "../../assets/icons/bell.svg";
import editSvg from "../../assets/icons/pencil.svg";
import deleteSvg from "../../assets/icons/trash.svg";
import paperPinSvg from "../../assets/icons/paperpin.svg";
import InlineSVG from "react-inlinesvg";

const datas = [
  { text: "עריכה", icon: editSvg },
  { text: "מחיקה", icon: deleteSvg },
  { text: "הוספת תזכורת", icon: bellSvg },
  { text: "הוספת קבצים", icon: paperPinSvg },
];
const QuickMenu = ({ visible, hide }) => {
  return (
    <div
      className="quick-menu"
      style={{ visibility: visible ? "visible" : "hidden" }}
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
