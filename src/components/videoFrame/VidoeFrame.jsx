import videoImg from "../../assets/images/video.png";
import playSVG from "../../assets/icons/play.svg";
import InlineSVG from "react-inlinesvg";
import clockSVG from "../../assets/icons/clock.svg";

const VideoFrame = () => {
  return (
    <div className="video-frame">
      <div className="video-frame-container">
        <img src={videoImg} alt="video" className="video-frame-img" />
        <div className="video-frame-over">
          <InlineSVG src={playSVG} />
          <div className="video-frame-over-time">
            <InlineSVG src={clockSVG} />
            <span>3:48</span>
          </div>
        </div>
      </div>

      <div className="video-frame-name">הוספת מקבל שירות חדש</div>
    </div>
  );
};

export default VideoFrame;
