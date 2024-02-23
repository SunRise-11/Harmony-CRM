import processSVG from "../../../../../assets/icons/process.svg";
import InlineSVG from "react-inlinesvg";
import addEventSVG from "../../../../../assets/icons/addevent.svg";
import recoverySVG from "../../../../../assets/icons/recovery.svg";
import serviceSVG from "../../../../../assets/images/service.svg";
import redirectionSVG from "../../../../../assets/images/redirection.svg";
import proDirectionSVG from "../../../../../assets/images/proDirection.svg";
import psychologicalSVG from "../../../../../assets/images/psychological.svg";
import instructionSVG from "../../../../../assets/images/instruction.svg";
import questionSVG from "../../../../../assets/images/question.svg";
import abilitySVG from "../../../../../assets/images/ability.svg";
import overviewSVG from "../../../../../assets/images/overview.svg";
import effect1SVG from "../../../../../assets/icons/effect1.svg";
import effect2SVG from "../../../../../assets/icons/effect2.svg";
import Item from "./item/Item";
import { Button } from "antd";

const Board = () => {
  return (
    <div className="recipient-home-board">
      <div className="recipient-home-board-title">
        <InlineSVG src={processSVG} />
        <span>תהליכים: הכוון תעסוקתי</span>
      </div>
      <div className="recipient-home-board-main">
        <div>
          <Item text="מקבל שירות" icon={serviceSVG} />
          <Item text="הכוון שיקומי" icon={redirectionSVG} />
          <Item text="הכוון מקצועי" icon={proDirectionSVG} />
          <Item text="הערכה פסיכולוגית" icon={psychologicalSVG} />
          <InlineSVG
            src={effect2SVG}
            style={{ position: "absolute", marginTop: "30px", right: "-5px" }}
          />
        </div>
        <div>
          <Item text="הדרכה" icon={instructionSVG} />
          <Item text="שאלונים" icon={questionSVG} />
          <Item text="אמונה ביכולת" icon={abilitySVG} />
          <Item text="סיכום שאלונים" icon={overviewSVG} />
          <InlineSVG
            src={effect1SVG}
            style={{ position: "absolute", marginTop: "30px", right: "-5px" }}
          />
        </div>
        <div>
          <Button>
            <InlineSVG src={addEventSVG} />
            <span>הוסף אירוע</span>
          </Button>
          <Button>
            <InlineSVG src={recoverySVG} />
            <span>היסטורית אירועים</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Board;
