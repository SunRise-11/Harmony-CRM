import { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "antd";
import InlineSVG from "react-inlinesvg";
import ReactSelect from "react-select";

import dataflowIcon from "../../../../assets/icons/master/dataflow.svg";

import Item from "./Item";
import EventHistory from "../../../Modals/EventHistory";
import NewEvent from "../../../Modals/NewEvent";
import NewQuestionnaire from "../../../Modals/NewQuestionnaire";
import QuestionnaireHistory from "../../../Modals/QuestionnaireHistory";
import Step from "./Step";

import effect1Icon from "../../../../assets/icons/effect/Thingy-1.svg";
import effect2Icon from "../../../../assets/icons/effect/Thingy-2.svg";

const Board = () => {
  const [showEventHistory, setShowEventHistory] = useState(false);
  const [showNewEvent, setShowNewEvent] = useState(false);
  const [showNewQuestionnaire, setShowNewQuestionnaire] = useState(false);
  const [showQuestionnaireHistory, setShowQuestionnaireHistory] = useState(
    false
  );

  // const effect1Position = ["20px", "210px", "420px", "620px"];
  // const effect2Position = ["22px", "190px", "385px", "600px"];

  const effectPosition = [
    [{ effect1: "20px", effect2: ["0px"], position: "0px" }],
    [
      { effect1: "0px", effect2: ["0px", "190px", "440px"], position: "0px" },
      { effect1: "160px", effect2: ["50px", "260px"], position: "0px" },
      { effect1: "350px", effect2: ["350px"], position: "310px" },
      { effect1: "500px", effect2: ["500px"], position: "460px" },
    ],
    [
      { effect1: "0px", effect2: ["0px", "195px"], position: "0px" },
      { effect1: "160px", effect2: ["20px", "220px"], position: "0px" },
      { effect1: "340px", effect2: ["340px", "480px"], position: "320px" },
      {
        effect1: "490px",
        effect2: ["30px", "220px", "410px", "580px"],
        position: "0px",
      },
      { effect1: "620px", effect2: ["610px", "770px"], position: "600px" },
      { effect1: "780px", effect2: ["780px"], position: "750px" },
      { effect1: "915px", effect2: ["890px"], position: "860px" },
    ],
    [
      {
        effect1: "0px",
        effect2: ["40px", "220px", "365px", "540px"],
        position: "0px",
      },
      { effect1: "170px", effect2: ["90px", "360px"], position: "0px" },
      { effect1: "370px", effect2: ["320px", "510px"], position: "280px" },
      { effect1: "525px", effect2: ["340px", "500px"], position: "320px" },
    ],
    [{ effect1: "0px", effect2: ["20px"], position: "0px" }],
  ];

  const direction = useSelector((state) => state.app.direction);
  const [currentWorkflow, setCurrentWorkflow] = useState(1);
  const [primarySelected, setPrimarySelected] = useState(0);
  const [secondarySelected, setSecondarySelected] = useState(0);

  const options = [
    {
      label: "הכוון תעסוקתי",
      value: 0,
    },
    {
      label: "דיור מוגן",
      value: 1,
    },
    {
      label: "תעסוקה נתמכת",
      value: 2,
    },
    {
      label: "דיאלוג (תיאום טיפול)",
      value: 3,
    },
    {
      label: "חונכות",
      value: 4,
    },
  ];

  const workflowItems = [
    [
      {
        title: "",
        items: [{ label: "", item: <></> }],
      },
    ],
    [
      {
        title: "קליטה",
        items: [
          { label: "אינטק", item: <></> },
          { label: "חתימה על מסמכי הקליטה", item: <></> },
          { label: "בניית תוכנית שיקום רשאונית", item: <></> },
        ],
      },
      {
        title: "שיבוץ צוות מלווה",
        items: [
          { label: "פגישה עם צוות מלווה", item: <></> },
          { label: "בניית תוכנית שיקום", item: <></> },
        ],
      },

      {
        title: "עדכון תוכנית שיקום",
        items: [{ label: "בניית תוכנית שיקום", item: <></> }],
      },
      {
        title: "סיום",
        items: [{ label: "מילוי סיום בשקדיה", item: <></> }],
      },
    ],
    [
      {
        title: "קליטה",
        items: [
          { label: "אינטק", item: <></> },
          { label: "חתימה על מסמכי הקליטה", item: <></> },
        ],
      },
      {
        title: "בניית תוכנית שיקום",
        items: [
          { label: "מיפוי צרכים", item: <></> },
          { label: "קביעת מטרות ראשוניות", item: <></> },
        ],
      },
      {
        title: "חיפוש עבודה",
        items: [
          { label: "הדרכה", item: <></> },
          { label: "סיכום שאלונים", item: <></> },
        ],
      },
      {
        title: "השמה",
        items: [
          { label: "מיפוי אתגרים", item: <></> },
          { label: "הכנה לכניסה לעבודה", item: <></> },
          { label: "חיפוש מעסיק", item: <></> },
          { label: "קשר עם המעסיק", item: <></> },
        ],
      },
      {
        title: "לווי שוטף",
        items: [
          { label: "הדרכה", item: <></> },
          { label: "סיכום שאלונים", item: <></> },
        ],
      },
      {
        title: "פיתוח קריירה",
        items: [{ label: "סיכום שאלונים", item: <></> }],
      },
      {
        title: "סיום",
        items: [{ label: "סיכום שאלונים", item: <></> }],
      },
    ],
    [
      {
        title: "קליטה",
        items: [
          { label: "קבלת הפניה מילוי", item: <></> },
          { label: "פניה ראשונית", item: <></> },
          { label: "אינטק", item: <></> },
          { label: "חתימה על מסמכי קליטה", item: <></> },
        ],
      },
      {
        title: "הגדרת תוכנית שיקום",
        items: [
          { label: "עבודה על אתגרים בהשגת המטרות", item: <></> },
          { label: "מציאת מענים מתאימים בקהילה", item: <></> },
        ],
      },
      {
        title: "עדכון תוכנית שיקום",
        items: [
          { label: "מעבר על התוכנית", item: <></> },
          { label: "השיקום ועדכון", item: <></> },
        ],
      },
      {
        title: "סיום",
        items: [
          { label: "דוח סיום", item: <></> },
          { label: "עדכון בשקדיה", item: <></> },
        ],
      },
    ],
    [
      {
        title: "",
        items: [{ label: "", item: <></> }],
      },
    ],
  ];

  return (
    <div className="recipient-home-board">
      <div className="recipient-home-board-title">
        <InlineSVG src={dataflowIcon} />
        <span>תהליכים:</span>
        <div className="select" style={{ width: "280px" }}>
          <ReactSelect
            className="select-main"
            isRtl={direction === "rtl"}
            options={options}
            value={options[currentWorkflow]}
            defaultValue={options[0]}
            placeholder=""
            onChange={(item) => {
              if (item !== null) {
                setCurrentWorkflow(item.value);
                setPrimarySelected(0);
                setSecondarySelected(0);
              }
            }}
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                backgroundColor: "white",
                borderColor: "#B9B9B9",
                borderWidth: "2px",
                borderRadius: "10px",
                paddingTop: "3px",
                paddingBottom: "3px",
              }),
              indicatorSeparator: (base) => ({
                ...base,
                width: "0px",
              }),
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
        </div>
      </div>
      <div className="recipient-home-board-main">
        <InlineSVG
          style={
            direction === "rtl"
              ? {
                  marginRight:
                    effectPosition[currentWorkflow][primarySelected].effect1,
                }
              : {
                  marginLeft:
                    effectPosition[currentWorkflow][primarySelected].effect1,
                }
          }
          src={effect1Icon}
          className="recipient-home-board-main-primary-effect"
        />
        <div className="recipient-home-board-main-primary">
          {workflowItems[currentWorkflow].map((item, index) => (
            <Step
              onClick={() => {
                setPrimarySelected(index);
                setSecondarySelected(0);
              }}
              location={
                index === 0
                  ? "front"
                  : index === workflowItems[currentWorkflow].length - 1
                  ? "end"
                  : "middle"
              }
              text={item.title}
              type={
                index === primarySelected
                  ? "primary"
                  : index < primarySelected
                  ? "done"
                  : "empty"
              }
              number={index + 1}
              key={index}
            />
          ))}
        </div>
        <InlineSVG
          src={effect2Icon}
          className="recipient-home-board-main-secondary-effect"
          style={
            direction === "rtl"
              ? {
                  marginRight:
                    effectPosition[currentWorkflow][primarySelected].effect2[
                      secondarySelected
                    ],
                }
              : {
                  marginLeft:
                    effectPosition[currentWorkflow][primarySelected].effect2[
                      secondarySelected
                    ],
                }
          }
        />
        <div
          className="recipient-home-board-main-secondary"
          style={
            direction === "rtl"
              ? {
                  marginRight:
                    effectPosition[currentWorkflow][primarySelected].position,
                }
              : {
                  marginLeft:
                    effectPosition[currentWorkflow][primarySelected].position,
                }
          }
        >
          {workflowItems[currentWorkflow][primarySelected].items.map(
            (item, index) => (
              <Step
                onClick={() => setSecondarySelected(index)}
                location={
                  workflowItems[currentWorkflow][primarySelected].items
                    .length === 1
                    ? "alone"
                    : index === 0
                    ? "front"
                    : index ===
                      workflowItems[currentWorkflow][primarySelected].items
                        .length -
                        1
                    ? "end"
                    : "middle"
                }
                text={item.label}
                type={
                  index === secondarySelected
                    ? "secondary"
                    : index < secondarySelected
                    ? "done"
                    : "empty"
                }
                number={primarySelected + 1 + "." + (index + 1)}
                key={index}
              />
            )
          )}
        </div>
        <div className="recipient-home-board-main-work">
          {
            workflowItems[currentWorkflow][primarySelected].items[
              secondarySelected
            ].item
          }
        </div>
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
