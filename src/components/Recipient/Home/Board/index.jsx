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

  const effectPosition = [
    [
      {
        effect1: "0px",
        effect2: ["0px", "180px", "450px", "680px", "870px"],
        position: "0px",
      },
      {
        effect1: "140px",
        effect2: ["60px", "230px", "360px", "485px", "610px", "750px", "890px", "1020px"],
        position: "0px",
      },
      {
        effect1: "290px",
        effect2: ["30px", "210px", "400px", "590px", "730px"],
        position: "0px",
      },
      { effect1: "430px", effect2: ["410px", "560px"], position: "400px" },
      {
        effect1: "590px",
        effect2: ["30px", "190px", "320px", "450px", "570px", "720px"],
        position: "0px",
      },
      {
        effect1: "750px",
        effect2: ["450px", "620px", "750px", "900px"],
        position: "380px",
      },
      { effect1: "910px", effect2: ["885px"], position: "840px" },
    ],
    [
      { effect1: "0px", effect2: ["0px", "190px", "440px"], position: "0px" },
      { effect1: "150px", effect2: ["50px", "270px"], position: "0px" },
      { effect1: "350px", effect2: ["350px"], position: "310px" },
      { effect1: "500px", effect2: ["500px"], position: "460px" },
    ],
    [
      { effect1: "0px", effect2: ["0px", "195px"], position: "0px" },
      { effect1: "160px", effect2: ["20px", "220px"], position: "0px" },
      { effect1: "340px", effect2: ["340px", "490px"], position: "330px" },
      {
        effect1: "475px",
        effect2: ["30px", "220px", "400px", "580px"],
        position: "0px",
      },
      { effect1: "610px", effect2: ["610px", "760px"], position: "600px" },
      { effect1: "760px", effect2: ["760px"], position: "730px" },
      { effect1: "890px", effect2: ["890px"], position: "860px" },
    ],
    [
      {
        effect1: "0px",
        effect2: ["40px", "220px", "365px", "540px"],
        position: "0px",
      },
      { effect1: "170px", effect2: ["90px", "380px"], position: "0px" },
      { effect1: "370px", effect2: ["320px", "510px"], position: "280px" },
      { effect1: "525px", effect2: ["340px", "500px"], position: "320px" },
    ],
    [
      { effect1: "0px", effect2: ["0px", "190px"], position: "0px" },
      { effect1: "130px", effect2: ["60px", "270px"], position: "0px" },
      { effect1: "310px", effect2: ["50px", "260px"], position: "0px" },
      { effect1: "480px", effect2: ["550px"], position: "480px" },
      { effect1: "610px", effect2: ["530px", "700px"], position: "500px" },
    ],
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
        title: "קליטה",
        items: [
          { label: "אינטק", item: <></> },
          { label: "חתימה על מסמכי הקליטה", item: <></> },
          { label: "שליחת שם משתמש וסיסמא לכניסה", item: <></> },
          { label: "חתימה", item: <></> },
          { label: "בניית תוכנית שיקום רשאונית", item: <></> },
        ],
      },
      {
        title: "הכוון שיקומי",
        items: [
          { label: "בניית תוכנית שיקום\n אבחון חמשת הצירים", item: <></> },
          { label: "הדרכה", item: <></> },
          { label: "מוטיבציה", item: <></> },
          { label: "אמונה\n ביכולת", item: <></> },
          { label: "ידע\n וכלים", item: <></> },
          { label: "פרו\n אקטיביות", item: <></> },
          { label: "רקע\n תעסוקתי", item: <></> },
          { label: "סיכום", item: <></> },
        ],
      },
      {
        title: "הערכה\n פסיכולוגית",
        items: [
          { label: "הכנה למפגש", item: <></> },
          { label: "פגישה עם פסיכולוג", item: <></> },
          { label: "תוצאות ורפלקציה", item: <></> },
          { label: "הערכה מקצועית", item: <></> },
          { label: "סיכום", item: <></> },
        ],
      },
      {
        title: "הערכה\n מקצועית",
        items: [
          { label: "הדרכה", item: <></> },
          { label: "אבחון מקצועי", item: <></> },
        ],
      },
      {
        title: "השלמת פערים",
        items: [
          { label: "הכנה לעבודה", item: <></> },
          { label: "לימוד עצמי", item: <></> },
          { label: "התנסות", item: <></> },
          { label: "שוברים", item: <></> },
          { label: "השכלה", item: <></> },
          { label: "ביטוח לאומי", item: <></> },
        ],
      },
      {
        title: "הכנה לעבודה",
        items: [
          { label: "תכנון דרכי חיפוש עבודה", item: <></> },
          { label: "מנטור", item: <></> },
          { label: "ארגון זמן", item: <></> },
          { label: "הכנה לראיונות", item: <></> },
        ],
      },
      {
        title: "סיום שירות",
        items: [{ label: "מילוי סיום בשקדיה", item: <></> }],
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
        title: "קליטה",
        items: [
          { label: "אינטק", item: <></> },
          { label: "חתימה על מסמכי הקליטה", item: <></> },
        ],
      },
      {
        title: "צימוד חונך",
        items: [
          { label: "גישה עם ניהול מקצועי", item: <></> },
          { label: "פגישה עם חונך", item: <></> },
        ],
      },
      {
        title: "תהליך תכנון השיקום",
        items: [
          { label: "בניית תוכנית אישית", item: <></> },
          { label: "קביעת ימי מפגשים", item: <></> },
        ],
      },
      {
        title: "לווי שוטף",
        items: [{ label: "חתימה על מסמכי הקליטה", item: <></> }],
      },
      {
        title: "סיום",
        items: [
          { label: "תהליך סיום", item: <></> },
          { label: "הקלדה בשקדיה", item: <></> },
        ],
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
