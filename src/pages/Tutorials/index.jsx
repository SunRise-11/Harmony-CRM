import InlineSVG from "react-inlinesvg";
import { Button, Upload } from "antd";
import uploadIcon from "../../assets/icons/master/upload.svg";
import searchIcon from "../../assets/icons/system/search.svg";
import VideoFrame from "../../components/VideoFrame";

const Tutorials = () => {
  return (
    <div className="tutorials">
      <div className="tutorials-navbar">
        <Button style={{ width: "300px", justifyContent: "space-between" }}>
          <span>תהליך שיקומי</span>
          <InlineSVG src={searchIcon} width={20} />
        </Button>
        <Upload>
          <Button>
            <InlineSVG src={uploadIcon} width={20} />
            <span>הוסף הדרכה</span>
          </Button>
        </Upload>
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
