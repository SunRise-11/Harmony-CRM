import { useState } from "react";
import InlineSVG from "react-inlinesvg";

import paperclipIcon from "../../../assets/icons/master/paperclip.svg";
import moreIcon from "../../../assets/icons/master/more.svg";

import QuickMenu from "../../QuickMenu";
import TimeLabel from "../../Labels/TimeLabel";

const SmallCard = ({ title, content, labelColor }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="small-card">
      <div className="small-card-content">
        <div className="small-card-content-data">
          <div className="small-card-content-data-title">{title}</div>
          <div className="small-card-content-data-content">{content}</div>
        </div>
      </div>
      <div className="small-card-footer">
        <div className="small-card-footer-attach">
          <span>3</span>
          <InlineSVG
            src={paperclipIcon}
            style={{ stroke: "#5177A4", width: 16, height: 16 }}
          />
        </div>
        <div className="small-card-footer-info">
          <span className="card-number-text">כרטיס:</span>
          <span className="card-number">2546</span>
        </div>
        <TimeLabel content="24 במאי" color={labelColor || "#EA4335"} />
      </div>
      <div className="small-card-more" onClick={() => setVisible(true)}>
        <InlineSVG src={moreIcon} style={{ stroke: "#B6C3C5" }} />
      </div>
      <QuickMenu visible={visible} hide={() => setVisible(false)} />
    </div>
  );
};

export default SmallCard;
