import InlineSVG from "react-inlinesvg";

import videoImg from "../../assets/images/video.png";
import playIcon from "../../assets/icons/play.svg";
import clockIcon from "../../assets/icons/clock.svg";

const VideoFrame = () => {
  return (
    <div className="video-frame">
      <div className="video-frame-container">
        <img src={videoImg} alt="video" className="video-frame-img" />
        <div className="video-frame-over">
          <InlineSVG src={playIcon} />
          <div className="video-frame-over-time">
            <InlineSVG src={clockIcon} />
            <span>3:48</span>
          </div>
        </div>
      </div>

      <div className="video-frame-name">הוספת מקבל שירות חדש</div>
    </div>
  );
};

export default VideoFrame;
