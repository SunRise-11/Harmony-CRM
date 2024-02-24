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
import sendSVG from "../../../../../assets/icons/send.svg";

import cover2SVG from "../../../../../assets/images/cover2.svg";
import cover4SVG from "../../../../../assets/images/cover4.svg";
import cover5SVG from "../../../../../assets/images/cover5.svg";
import cover6SVG from "../../../../../assets/images/cover6.svg";
import cover8SVG from "../../../../../assets/images/cover8.svg";

import Item from "./item/Item";
import { Button } from "antd";
import { useState } from "react";
import EventHistory from "./modals/eventHistory/EventHistory";
import NewEvent from "./modals/newEvent/NewEvent";
import NewQuestionnaire from "./modals/newQuestionnaire/NewQuestionnaire";
import QuestionnaireHistory from "./modals/questionnaireHistory/QuestionnaireHistory";

const Board = () => {
  const [firstSelected, setFirstSelected] = useState(0);
  const [secondSelected, setSecondSelected] = useState(0);
  const [showEventHistory, setShowEventHistory] = useState(false);
  const [showNewEvent, setShowNewEvent] = useState(false);
  const [showNewQuestionnaire, setShowNewQuestionnaire] = useState(false);
  const [showQuestionnaireHistory, setShowQuestionnaireHistory] =
    useState(false);

  const firstRights = ["20px", "210px", "420px", "620px"];
  const secondRights = ["22px", "190px", "385px", "600px"];

  return (
    <div className="recipient-home-board">
      <div className="recipient-home-board-title">
        <InlineSVG src={processSVG} />
        <span>תהליכים: הכוון תעסוקתי</span>
      </div>
      <div className="recipient-home-board-main">
        <div>
          <InlineSVG
            src={effect2SVG}
            style={{
              position: "absolute",
              bottom: "-34px",
              right: firstRights[firstSelected],
              transition: "all 0.05s",
            }}
          />
          <div onClick={() => setFirstSelected(0)}>
            <InlineSVG
              src={cover4SVG}
              style={
                firstSelected === 0
                  ? { strokeWidth: "4px", stroke: "#FFB400" }
                  : {}
              }
            />
            <Item text="מקבל שירות" icon={serviceSVG} />
          </div>
          <div onClick={() => setFirstSelected(1)}>
            <InlineSVG
              src={cover2SVG}
              style={
                firstSelected === 1
                  ? { strokeWidth: "4px", stroke: "#FFB400" }
                  : {}
              }
            />
            <Item text="הכוון שיקומי" icon={redirectionSVG} />
          </div>
          <div onClick={() => setFirstSelected(2)}>
            <InlineSVG
              src={cover2SVG}
              style={
                firstSelected === 2
                  ? { strokeWidth: "4px", stroke: "#FFB400" }
                  : {}
              }
            />
            <Item text="הכוון מקצועי" icon={proDirectionSVG} />
          </div>
          <div onClick={() => setFirstSelected(3)}>
            <InlineSVG
              src={cover8SVG}
              style={{
                strokeWidth: firstSelected === 3 ? "4px" : "",
                stroke: firstSelected === 3 ? "#FFB400" : "",
                filter:
                  "drop-shadow(0px 1.218px 6.089px rgba(0, 0, 0, 0.25)) drop-shadow(0px 6.089px 6.089px rgba(0, 0, 0, 0.03))",
              }}
            />
            <Item text="הערכה פסיכולוגית" icon={psychologicalSVG} />
          </div>
        </div>
        <div>
          <InlineSVG
            src={effect1SVG}
            style={{
              position: "absolute",
              bottom: "-30px",
              right: secondRights[secondSelected],
              width: "120px",
              transition: "all 0.03s",
            }}
          />
          <div onClick={() => setSecondSelected(0)}>
            <InlineSVG
              src={cover5SVG}
              style={{
                marginTop: "-4px",
                marginLeft: "-8px",
                strokeWidth: secondSelected === 0 ? "4px" : "",
                stroke: secondSelected === 0 ? "#5FBCFF" : "",
                filter:
                  "drop-shadow(0px 1.218px 6.089px rgba(0, 0, 0, 0.25)) drop-shadow(0px 6.089px 6.089px rgba(0, 0, 0, 0.03))",
              }}
            />
            <Item text="הדרכה" icon={instructionSVG} />
          </div>
          <div onClick={() => setSecondSelected(1)}>
            <InlineSVG
              src={cover6SVG}
              style={
                secondSelected === 1
                  ? { strokeWidth: "4px", stroke: "#5FBCFF" }
                  : {}
              }
            />
            <Item text="שאלונים" icon={questionSVG} />
          </div>
          <div onClick={() => setSecondSelected(2)}>
            <InlineSVG
              src={cover2SVG}
              style={{
                strokeWidth: secondSelected === 2 ? "4px" : "",
                stroke: secondSelected === 2 ? "#5FBCFF" : "",
                filter:
                  "drop-shadow(0px 1.218px 6.089px rgba(0, 0, 0, 0.25)) drop-shadow(0px 6.089px 6.089px rgba(0, 0, 0, 0.03))",
              }}
            />
            <Item text="אמונה ביכולת" icon={abilitySVG} />
          </div>
          <div onClick={() => setSecondSelected(3)}>
            <InlineSVG
              src={cover8SVG}
              style={
                secondSelected === 3
                  ? { strokeWidth: "4px", stroke: "#5FBCFF" }
                  : {}
              }
            />
            <Item text="סיכום שאלונים" icon={overviewSVG} />
          </div>
        </div>
        {secondSelected === 0 && (
          <div>
            <Button onClick={() => setShowNewEvent(true)}>
              <InlineSVG src={addEventSVG} />
              <span>הוסף אירוע</span>
            </Button>
            <Button onClick={() => setShowEventHistory(true)}>
              <InlineSVG src={recoverySVG} />
              <span>היסטורית אירועים</span>
            </Button>
          </div>
        )}
        {secondSelected === 1 && (
          <div>
            <Button onClick={() => setShowNewQuestionnaire(true)}>
              <InlineSVG src={sendSVG} stroke="#434F68" width={24} />
              <span>שלח שאלון</span>
            </Button>
            <Button onClick={() => setShowQuestionnaireHistory(true)}>
              <InlineSVG src={recoverySVG} />
              <span>היסטורית שאלונים</span>
            </Button>
          </div>
        )}
        {(secondSelected === 2 || secondSelected === 3) && <div></div>}
      </div>
      <EventHistory
        visible={showEventHistory}
        onCancel={() => setShowEventHistory(false)}
      />
      <NewEvent
        visible={showNewEvent}
        onCancel={() => setShowNewEvent(false)}
      />
      <NewQuestionnaire
        visible={showNewQuestionnaire}
        onCancel={() => setShowNewQuestionnaire(false)}
      />
      <QuestionnaireHistory
        visible={showQuestionnaireHistory}
        onCancel={() => setShowQuestionnaireHistory(false)}
      />
    </div>
  );
};

export default Board;
