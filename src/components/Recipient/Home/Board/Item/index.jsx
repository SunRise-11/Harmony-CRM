import InlineSVG from "react-inlinesvg";

const Item = ({ text, icon }) => {
  return (
    <span className="recipient-home-board-item">
      <InlineSVG src={icon} width={40} height={40} />
      <span>{text}</span>
    </span>
  );
};

export default Item;
