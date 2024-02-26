import { Button } from "antd";
import uploadSVG from "../../assets/icons/uploadFile.svg";
import searchSVG from "../../assets/icons/search.svg";
import VideoFrame from "../../components/videoFrame/VidoeFrame";
import InlineSVG from "react-inlinesvg";

const Tutorials = () => {
  return (
    <div className="tutorials">
      <div className="tutorials-navbar">
        <Button style={{ width: "300px", justifyContent: "space-between" }}>
          <span>תהליך שיקומי</span>
          <InlineSVG src={searchSVG} width={20} />
        </Button>
        <Button>
          <InlineSVG src={uploadSVG} width={20} />
          <span>הוסף הדרכה</span>
        </Button>
      </div>
      <div className="tutorials-board">
        <div className="tutorials-board-line">
          <div
            className="tutorials-board-line-title"
            style={{ backgroundColor: "#5fbcff", width: "191px" }}
          >
            תפעול מערכת
          </div>
          <div className="tutorials-board-line-videos">
            <VideoFrame />
            <VideoFrame />
            <VideoFrame />
            <VideoFrame />
          </div>
        </div>
        <div className="tutorials-board-line">
          <div
            className="tutorials-board-line-title"
            style={{ backgroundColor: "#90BE6D", width: "210px" }}
          >
            תפעול מערכת
          </div>
          <div className="tutorials-board-line-videos">
            <VideoFrame />
            <VideoFrame />
            <VideoFrame />
          </div>
        </div>
        <div className="tutorials-board-line">
          <div
            className="tutorials-board-line-title"
            style={{ backgroundColor: "#FFAB48", width: "88px" }}
          >
            כללי
          </div>
          <div className="tutorials-board-line-videos">
            <VideoFrame />
            <VideoFrame />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
