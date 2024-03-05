import { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "antd";
import InlineSVG from "react-inlinesvg";

import dataflowIcon from "../../../../assets/icons/master/dataflow.svg";
import calendarPlusIcon from "../../../../assets/icons/master/calendar-plus.svg";
import historyIcon from "../../../../assets/icons/master/history.svg";
import serviceIcon from "../../../../assets/icons/process/service.svg";
import redirectionIcon from "../../../../assets/icons/process/redirection.svg";
import proDirectionIcon from "../../../../assets/icons/process/proDirection.svg";
import psychologicalIcon from "../../../../assets/icons/process/psychological.svg";
import instructionIcon from "../../../../assets/icons/process/instruction.svg";
import questionIcon from "../../../../assets/icons/process/question.svg";
import abilityIcon from "../../../../assets/icons/process/ability.svg";
import overviewIcon from "../../../../assets/icons/process/overview.svg";
import effect1Icon from "../../../../assets/icons/effect/effect1.svg";
import effect2Icon from "../../../../assets/icons/effect/effect2.svg";
import sendIcon from "../../../../assets/icons/master/send.svg";

import cover2Icon from "../../../../assets/icons/effect/cover2.svg";
import cover4Icon from "../../../../assets/icons/effect/cover4.svg";
import cover5Icon from "../../../../assets/icons/effect/cover5.svg";
import cover6Icon from "../../../../assets/icons/effect/cover6.svg";
import cover8Icon from "../../../../assets/icons/effect/cover8.svg";

import Item from "./Item";
import EventHistory from "../../../Modals/EventHistory";
import NewEvent from "../../../Modals/NewEvent";
import NewQuestionnaire from "../../../Modals/NewQuestionnaire";
import QuestionnaireHistory from "../../../Modals/QuestionnaireHistory";

const Board = () => {
  const [firstSelected, setFirstSelected] = useState(0);
  const [secondSelected, setSecondSelected] = useState(0);
  const [showEventHistory, setShowEventHistory] = useState(false);
  const [showNewEvent, setShowNewEvent] = useState(false);
  const [showNewQuestionnaire, setShowNewQuestionnaire] = useState(false);
  const [showQuestionnaireHistory, setShowQuestionnaireHistory] = useState(
    false
  );

  const firstRights = ["20px", "210px", "420px", "620px"];
  const secondRights = ["22px", "190px", "385px", "600px"];
  const direction = useSelector((state) => state.app.direction);

  return (
    <div className="recipient-home-board">
      <div className="recipient-home-board-title">
        <InlineSVG src={dataflowIcon} />
        <span>תהליכים: הכוון תעסוקתי</span>
      </div>
      <div className="recipient-home-board-main">
        <div>
          <InlineSVG
            src={effect2Icon}
            style={{
              position: "absolute",
              bottom: "-34px",
              right: direction === "rtl" ? firstRights[firstSelected] : "",
              left: direction === "ltr" ? firstRights[firstSelected] : "",
              transition: "all 0.05s",
            }}
          />
          <div onClick={() => setFirstSelected(0)}>
            <InlineSVG
              src={cover4Icon}
              style={
                firstSelected === 0
                  ? { strokeWidth: "4px", stroke: "#FFB400" }
                  : {}
              }
            />
            <Item text="מקבל שירות" icon={serviceIcon} />
          </div>
          <div onClick={() => setFirstSelected(1)}>
            <InlineSVG
              src={cover2Icon}
              style={
                firstSelected === 1
                  ? { strokeWidth: "4px", stroke: "#FFB400" }
                  : {}
              }
            />
            <Item text="הכוון שיקומי" icon={redirectionIcon} />
          </div>
          <div onClick={() => setFirstSelected(2)}>
            <InlineSVG
              src={cover2Icon}
              style={
                firstSelected === 2
                  ? { strokeWidth: "4px", stroke: "#FFB400" }
                  : {}
              }
            />
            <Item text="הכוון מקצועי" icon={proDirectionIcon} />
          </div>
          <div onClick={() => setFirstSelected(3)}>
            <InlineSVG
              src={cover8Icon}
              style={{
                strokeWidth: firstSelected === 3 ? "4px" : "",
                stroke: firstSelected === 3 ? "#FFB400" : "",
                filter:
                  "drop-shadow(0px 1.218px 6.089px rgba(0, 0, 0, 0.25)) drop-shadow(0px 6.089px 6.089px rgba(0, 0, 0, 0.03))",
              }}
            />
            <Item text="הערכה פסיכולוגית" icon={psychologicalIcon} />
          </div>
        </div>
        <div>
          <InlineSVG
            src={effect1Icon}
            style={{
              position: "absolute",
              bottom: "-30px",
              right: direction === "rtl" ? secondRights[secondSelected] : "",
              left: direction === "ltr" ? secondRights[secondSelected] : "",
              width: "120px",
              transition: "all 0.03s",
            }}
          />
          <div onClick={() => setSecondSelected(0)}>
            <InlineSVG
              src={cover5Icon}
              style={{
                marginTop: "-4px",
                marginLeft: "-8px",
                strokeWidth: secondSelected === 0 ? "4px" : "",
                stroke: secondSelected === 0 ? "#5FBCFF" : "",
                filter:
                  "drop-shadow(0px 1.218px 6.089px rgba(0, 0, 0, 0.25)) drop-shadow(0px 6.089px 6.089px rgba(0, 0, 0, 0.03))",
              }}
            />
            <Item text="הדרכה" icon={instructionIcon} />
          </div>
          <div onClick={() => setSecondSelected(1)}>
            <InlineSVG
              src={cover6Icon}
              style={
                secondSelected === 1
                  ? { strokeWidth: "4px", stroke: "#5FBCFF" }
                  : {}
              }
            />
            <Item text="שאלונים" icon={questionIcon} />
          </div>
          <div onClick={() => setSecondSelected(2)}>
            <InlineSVG
              src={cover2Icon}
              style={{
                strokeWidth: secondSelected === 2 ? "4px" : "",
                stroke: secondSelected === 2 ? "#5FBCFF" : "",
                filter:
                  "drop-shadow(0px 1.218px 6.089px rgba(0, 0, 0, 0.25)) drop-shadow(0px 6.089px 6.089px rgba(0, 0, 0, 0.03))",
              }}
            />
            <Item text="אמונה ביכולת" icon={abilityIcon} />
          </div>
          <div onClick={() => setSecondSelected(3)}>
            <InlineSVG
              src={cover8Icon}
              style={
                secondSelected === 3
                  ? { strokeWidth: "4px", stroke: "#5FBCFF" }
                  : {}
              }
            />
            <Item text="סיכום שאלונים" icon={overviewIcon} />
          </div>
        </div>
        {secondSelected === 0 && (
          <div>
            <Button onClick={() => setShowNewEvent(true)}>
              <InlineSVG src={calendarPlusIcon} />
              <span>הוסף אירוע</span>
            </Button>
            <Button onClick={() => setShowEventHistory(true)}>
              <InlineSVG src={historyIcon} />
              <span>היסטורית אירועים</span>
            </Button>
          </div>
        )}
        {secondSelected === 1 && (
          <div>
            <Button onClick={() => setShowNewQuestionnaire(true)}>
              <InlineSVG src={sendIcon} stroke="#434F68" width={24} />
              <span>שלח שאלון</span>
            </Button>
            <Button onClick={() => setShowQuestionnaireHistory(true)}>
              <InlineSVG src={historyIcon} />
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
