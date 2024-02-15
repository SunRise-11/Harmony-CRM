import { useState } from "react";

import InlineSVG from "react-inlinesvg";
import paperClipSvg from "../../../assets/icons/paperclip.svg";
import moreSvg from "../../../assets/icons/more.svg";

import QuickMenu from "../../quickMenu/QuickMenu";
import TimeLabel from "../../labels/timeLabel/TimeLabel";

const MediumCard = ({ title, content, name, avatar, labelColor }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="medium-card">
      <div className="medium-card-content">
        <div className="medium-card-content-data">
          <div className="medium-card-content-data-title">{title}</div>
          <div className="medium-card-content-data-content">{content}</div>
        </div>
        <span className="medium-card-content-user">
          <img src={avatar} width={32} height={32} />
          <span>{name}</span>
        </span>
      </div>
      <div className="medium-card-footer">
        <div className="medium-card-footer-attach">
          <span>3</span>
          <InlineSVG src={paperClipSvg} style={{ stroke: "#5177A4" }} />
        </div>
        <div className="medium-card-footer-info">
          <span className="card-number-text">כרטיס:</span>
          <span className="card-number">2546</span>
        </div>
        <TimeLabel content="24 במאי" color={labelColor} />
      </div>
      <div className="medium-card-more" onClick={() => setVisible(true)}>
        <InlineSVG src={moreSvg} style={{ stroke: "#B6C3C5" }} />
      </div>
      <QuickMenu visible={visible} hide={() => setVisible(false)} />
    </div>
  );
};

export default MediumCard;
