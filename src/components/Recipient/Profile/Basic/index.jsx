import InlineSVG from "react-inlinesvg";

const Basic = ({
  title = "פרטי מקבל שירות",
  icon = userSVG,
  content,
  selected,
}) => {
  return (
    <div
      className="profiles-basic"
      style={{ borderColor: selected ? "#FFB400" : "transparent" }}
    >
      <div className="profiles-basic-title">
        <InlineSVG src={icon} width={24} height={24} stroke="#FF8A00" />
        <span>{title}</span>
      </div>
      <div className="profiles-basic-board">{content}</div>
    </div>
  );
};

export default Basic;
