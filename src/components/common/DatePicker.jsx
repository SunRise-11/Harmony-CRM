import PropTypes from "prop-types";
import InlineSVG from "react-inlinesvg";
import addImg from "../../assets/icons/add.svg";
import { Button } from "antd";

const DatePicker = ({ text }) => {
  return (
    <Button className="date-picker">
      <InlineSVG src={addImg} />
      <span>{text}</span>
    </Button>
  );
};

DatePicker.propTypes = {
  text: PropTypes.string,
};

DatePicker.defaultProps = {
  text: "",
};

export default DatePicker;
