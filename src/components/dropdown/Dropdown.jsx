import PropTypes from "prop-types";
import InlineSVG from "react-inlinesvg";
import downImg from "../../assets/icons/down.svg";
import { Button } from "antd";

const Dropdown = ({ text }) => {
  return (
    <Button className="dropdown">
      <span>{text}</span>
      <InlineSVG src={downImg} style={{ stroke: "#434f68" }} />
    </Button>
  );
};

Dropdown.propTypes = {
  text: PropTypes.string,
};

Dropdown.defaultProps = {
  text: "טווח תאריכים",
};

export default Dropdown;
