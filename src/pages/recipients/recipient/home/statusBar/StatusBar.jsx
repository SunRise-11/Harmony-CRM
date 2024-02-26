import InlineSVG from "react-inlinesvg";
// import avatarImg from "../../../../../assets/images/avatar3.png";
import downSVG from "../../../../../assets/icons/down.svg";
import { useState } from "react";

const StatusBar = () => {
  const [visible1, setVisible1] = useState(false);
  const [state1, setState1] = useState(0);
  const [visible2, setVisible2] = useState(false);
  const [state2, setState2] = useState(0);
  return (
    <div className="recipient-home-statusbar">
      <div className="recipient-home-statusbar-overview">
        {/* <img src={avatarImg} width={54} height={54} /> */}
        {/* <div> */}
        <div className="recipient-home-statusbar-overview-name">
          שמוליק גוטמן
        </div>
        <div className="recipient-home-statusbar-overview-id">
          <span>ת.ז.&nbsp;</span>
          <span>328567820</span>
        </div>
        {/* </div> */}
      </div>
      <div className="recipient-home-statusbar-info">
        <div>
          <div>
            <span>מין:&nbsp;</span>
            <span>זכר</span>
          </div>
          <div>
            <span>גיל:&nbsp;</span>
            <span>42</span>
          </div>
        </div>
        <div>
          <div>
            <span>מצב משפחתי:&nbsp;</span>
            <span>רווק</span>
          </div>
          <div>
            <span>עיר:&nbsp;</span>
            <span>לוד</span>
          </div>
        </div>
      </div>
      <div className="recipient-home-statusbar-contact">
        <div>
          <span>טלפון:</span>
          <span>054-4638841</span>
        </div>
        <div>
          <span>דואל:</span>
          <span>asnama12@gmail.com</span>
        </div>
      </div>
      <div className="recipient-home-statusbar-setting">
        <div>
          <div>סטטוס קבוע</div>
          <div className="recipient-home-statusbar-setting-temp-state">
            <div onClick={() => setVisible1(true)}>
              <label
                onClick={(e) => {
                  if (visible1) {
                    setState1(0);
                    setVisible1(false);
                    e.stopPropagation();
                  }
                }}
                style={{
                  backgroundColor: "#8AD341",
                  display: visible1 || state1 === 0 ? "initial" : "none",
                }}
              >
                עובד
              </label>
              <label
                onClick={(e) => {
                  if (visible1) {
                    setState1(1);
                    setVisible1(false);
                    e.stopPropagation();
                  }
                }}
                style={{
                  backgroundColor: "#5FBCFF",
                  display: visible1 || state1 === 1 ? "initial" : "none",
                }}
              >
                לומד
              </label>
              <label
                onClick={(e) => {
                  if (visible1) {
                    setState1(2);
                    setVisible1(false);
                    e.stopPropagation();
                  }
                }}
                style={{
                  backgroundColor: "#FF7979",
                  display: visible1 || state1 === 2 ? "initial" : "none",
                }}
              >
                מובטל
              </label>
            </div>
            <InlineSVG src={downSVG} className={visible1 && "rotate-180"} />
          </div>
        </div>
        <div>
          <div>סטטוס זמני</div>
          <div className="recipient-home-statusbar-setting-state">
            <div onClick={() => setVisible2(true)}>
              <label
                onClick={(e) => {
                  if (visible2) {
                    setState2(0);
                    setVisible2(false);
                    e.stopPropagation();
                  }
                }}
                style={{
                  color: "#5FBCFF",
                  borderColor: "#5FBCFF",
                  display: visible2 || state2 === 0 ? "initial" : "none",
                }}
              >
                חופשה
              </label>
              <label
                onClick={(e) => {
                  if (visible2) {
                    setState2(1);
                    setVisible2(false);
                    e.stopPropagation();
                  }
                }}
                style={{
                  color: "#FF4D4D",
                  borderColor: "#FF4D4D",
                  display: visible2 || state2 === 1 ? "initial" : "none",
                }}
              >
                מחלה
              </label>
              <label
                onClick={(e) => {
                  if (visible2) {
                    setState2(2);
                    setVisible2(false);
                    e.stopPropagation();
                  }
                }}
                style={{
                  color: "#FC8F66",
                  borderColor: "#FC8F66",
                  display: visible2 || state2 === 2 ? "initial" : "none",
                }}
              >
                חו”ל
              </label>
            </div>
            <InlineSVG src={downSVG} className={visible2 && "rotate-180"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
