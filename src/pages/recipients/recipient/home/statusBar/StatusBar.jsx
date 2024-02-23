import InlineSVG from "react-inlinesvg";
// import avatarImg from "../../../../../assets/images/avatar3.png";
import downSVG from "../../../../../assets/icons/down.svg";

const StatusBar = () => {
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
            <div>
              <label style={{ backgroundColor: "#8AD341" }}>עובד</label>
              <label style={{ backgroundColor: "#5FBCFF", display: "none" }}>
                לומד
              </label>
              <label style={{ backgroundColor: "#FF7979", display: "none" }}>
                מובטל
              </label>
            </div>
            <InlineSVG src={downSVG} />
          </div>
        </div>
        <div>
          <div>סטטוס זמני</div>
          <div className="recipient-home-statusbar-setting-state">
            <div>
              <label style={{ color: "#5FBCFF", borderColor: "#5FBCFF" }}>
                חופשה
              </label>
              <label
                style={{
                  color: "#FF4D4D",
                  borderColor: "#FF4D4D",
                  display: "none",
                }}
              >
                מחלה
              </label>
              <label
                style={{
                  color: "#FC8F66",
                  borderColor: "#FC8F66",
                  display: "none",
                }}
              >
                חו”ל
              </label>
            </div>
            <InlineSVG src={downSVG} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
