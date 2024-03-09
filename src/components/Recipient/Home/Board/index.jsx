import { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "antd";
import InlineSVG from "react-inlinesvg";
import ReactSelect from "react-select";

import dataflowIcon from "../../../../assets/icons/master/dataflow.svg";
import passportIcon from "../../../../assets/icons/master/passport.svg";
import sendIcon from "../../../../assets/icons/master/send.svg";
import historyIcon from "../../../../assets/icons/master/history.svg";
import createIcon from "../../../../assets/icons/master/create.svg";
import routeIcon from "../../../../assets/icons/master/route.svg";
import calendarPlusIcon from "../../../../assets/icons/master/calendar-plus.svg";
import uploadIcon from "../../../../assets/icons/master/upload.svg";
import calendarIcon from "../../../../assets/icons/master/calendar.svg";
import warningIcon from "../../../../assets/icons/master/warning.svg";
import fileIcon from "../../../../assets/icons/master/file.svg";

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
        effect2: ["0px", "180px", "450px", "740px"],
        position: "0px",
      },
      {
        effect1: "140px",
        effect2: [
          "60px",
          "230px",
          "360px",
          "485px",
          "610px",
          "750px",
          "890px",
          "1020px",
        ],
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
          {
            label: "אינטק",
            item: (
              <Button>
                <InlineSVG src={passportIcon} />
                <span>מילוי פרופיל</span>
              </Button>
            ),
          },
          {
            label: "חתימה על מסמכי הקליטה",
            item: (
              <Button>
                <InlineSVG src={passportIcon} />
                <span>מילוי פרופיל</span>
              </Button>
            ),
          },
          {
            label: "שליחת שם משתמש וסיסמא לכניסה",
            item: (
              <Button>
                <InlineSVG src={passportIcon} />
                <span>מילוי פרופיל</span>
              </Button>
            ),
          },
          {
            label: "בניית תוכנית שיקום רשאונית",
            item: (
              <Button>
                <InlineSVG src={passportIcon} />
                <span>מילוי פרופיל</span>
              </Button>
            ),
          },
        ],
      },
      {
        title: "הכוון שיקומי",
        items: [
          {
            label: "בניית תוכנית שיקום\n אבחון חמשת הצירים",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={fileIcon} />
                  <span>שאלונים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
          {
            label: "הדרכה",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={fileIcon} />
                  <span>שאלונים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
          {
            label: "מוטיבציה",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={fileIcon} />
                  <span>שאלונים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
          {
            label: "אמונה\n ביכולת",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={fileIcon} />
                  <span>שאלונים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
          {
            label: "ידע\n וכלים",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={fileIcon} />
                  <span>שאלונים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
          {
            label: "פרו\n אקטיביות",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={fileIcon} />
                  <span>שאלונים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
          {
            label: "רקע\n תעסוקתי",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={fileIcon} />
                  <span>שאלונים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
          {
            label: "סיכום",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={fileIcon} />
                  <span>שאלונים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
        ],
      },
      {
        title: "הערכה\n פסיכולוגית",
        items: [
          {
            label: "הכנה למפגש",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
          {
            label: "פגישה עם פסיכולוג",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
          {
            label: "תוצאות ורפלקציה",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
          {
            label: "הערכה מקצועית",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
          {
            label: "סיכום",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
        ],
      },
      {
        title: "הערכה\n מקצועית",
        items: [
          {
            label: "הדרכה",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={fileIcon} />
                  <span>שאלונים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
          {
            label: "אבחון מקצועי",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={fileIcon} />
                  <span>שאלונים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
        ],
      },
      {
        title: "השלמת פערים",
        items: [
          {
            label: "הכנה לעבודה",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
          {
            label: "לימוד עצמי",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
          {
            label: "התנסות",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
          {
            label: "שוברים",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
          {
            label: "השכלה",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
          {
            label: "ביטוח לאומי",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
        ],
      },
      {
        title: "הכנה לעבודה",
        items: [
          {
            label: "תכנון דרכי חיפוש עבודה",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
          {
            label: "מנטור",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
          {
            label: "ארגון זמן",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
          {
            label: "הכנה לראיונות",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={warningIcon} />
                  <span>אירוע מעכב</span>
                </Button>
              </>
            ),
          },
        ],
      },
      {
        title: "סיום שירות",
        items: [
          {
            label: "מילוי סיום בשקדיה",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
              </>
            ),
          },
        ],
      },
    ],
    [
      {
        title: "קליטה",
        items: [
          {
            label: "אינטק",
            item: (
              <Button>
                <InlineSVG src={passportIcon} />
                <span>מילוי פרופיל</span>
              </Button>
            ),
          },
          {
            label: "חתימה על מסמכי הקליטה",
            item: (
              <>
                <Button>
                  <InlineSVG src={sendIcon} />
                  <span>שלח טופס</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית טפסים</span>
                </Button>
              </>
            ),
          },
          {
            label: "בניית תוכנית שיקום רשאונית",
            item: (
              <Button>
                <InlineSVG src={createIcon} />
                <span>מילוי פרופיל</span>
              </Button>
            ),
          },
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
        items: [
          {
            label: "בניית תוכנית שיקום",
            item: (
              <Button>
                <InlineSVG src={routeIcon} />
                <span>בניית תוכנית שיקום</span>
              </Button>
            ),
          },
        ],
      },
      {
        title: "סיום",
        items: [
          {
            label: "מילוי סיום בשקדיה",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
              </>
            ),
          },
        ],
      },
    ],
    [
      {
        title: "קליטה",
        items: [
          {
            label: "אינטק",
            item: (
              <Button>
                <InlineSVG src={passportIcon} />
                <span>מילוי פרופיל</span>
              </Button>
            ),
          },
          {
            label: "חתימה על מסמכי הקליטה",
            item: (
              <>
                <Button>
                  <InlineSVG src={sendIcon} />
                  <span>שלח טופס</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית טפסים</span>
                </Button>
              </>
            ),
          },
        ],
      },
      {
        title: "בניית תוכנית שיקום",
        items: [
          {
            label: "מיפוי צרכים",
            item: (
              <Button>
                <InlineSVG src={createIcon} />
                <span>כתיבת תוכנית שיקום</span>
              </Button>
            ),
          },
          {
            label: "קביעת מטרות ראשוניות",
            item: (
              <Button>
                <InlineSVG src={createIcon} />
                <span>כתיבת תוכנית שיקום</span>
              </Button>
            ),
          },
        ],
      },
      {
        title: "חיפוש עבודה",
        items: [
          {
            label: "הדרכה",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
                <Button>
                  <InlineSVG src={uploadIcon} />
                  <span>העלאת קורות חיים</span>
                </Button>
              </>
            ),
          },
          {
            label: "סיכום שאלונים",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
              </>
            ),
          },
        ],
      },
      {
        title: "השמה",
        items: [
          {
            label: "מיפוי אתגרים",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
              </>
            ),
          },
          {
            label: "הכנה לכניסה לעבודה",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
              </>
            ),
          },
          {
            label: "חיפוש מעסיק",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
              </>
            ),
          },
          {
            label: "קשר עם המעסיק",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
              </>
            ),
          },
        ],
      },
      {
        title: "לווי שוטף",
        items: [
          {
            label: "הדרכה",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
              </>
            ),
          },
          {
            label: "סיכום שאלונים",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
              </>
            ),
          },
        ],
      },
      {
        title: "פיתוח קריירה",
        items: [
          {
            label: "סיכום שאלונים",
            item: (
              <Button>
                <InlineSVG src={createIcon} />
                <span>כתיבת תוכנית שיקום</span>
              </Button>
            ),
          },
        ],
      },
      {
        title: "סיום",
        items: [
          {
            label: "סיכום שאלונים",
            item: (
              <Button>
                <InlineSVG src={uploadIcon} />
                <span>העלאת דוח סיום</span>
              </Button>
            ),
          },
        ],
      },
    ],
    [
      {
        title: "קליטה",
        items: [
          {
            label: "קבלת הפניה מילוי",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
              </>
            ),
          },
          {
            label: "פניה ראשונית",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
              </>
            ),
          },
          {
            label: "אינטק",
            item: (
              <Button>
                <InlineSVG src={passportIcon} />
                <span>מילוי פרופיל</span>
              </Button>
            ),
          },
          {
            label: "חתימה על מסמכי קליטה",
            item: (
              <>
                <Button>
                  <InlineSVG src={sendIcon} />
                  <span>שלח טופס</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית טפסים</span>
                </Button>
              </>
            ),
          },
        ],
      },
      {
        title: "הגדרת תוכנית שיקום",
        items: [
          {
            label: "עבודה על אתגרים בהשגת המטרות",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
              </>
            ),
          },
          {
            label: "מציאת מענים מתאימים בקהילה",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
              </>
            ),
          },
        ],
      },
      {
        title: "עדכון תוכנית שיקום",
        items: [
          {
            label: "מעבר על התוכנית",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
              </>
            ),
          },
          {
            label: "השיקום ועדכון",
            item: (
              <Button>
                <InlineSVG src={createIcon} />
                <span>כתיבת תוכנית שיקום</span>
              </Button>
            ),
          },
        ],
      },
      {
        title: "סיום",
        items: [
          {
            label: "דוח סיום",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
              </>
            ),
          },
          {
            label: "עדכון בשקדיה",
            item: (
              <Button>
                <InlineSVG src={uploadIcon} />
                <span>העלאת קורות חיים</span>
              </Button>
            ),
          },
        ],
      },
    ],
    [
      {
        title: "קליטה",
        items: [
          {
            label: "אינטק",
            item: (
              <Button>
                <InlineSVG src={passportIcon} />
                <span>מילוי פרופיל</span>
              </Button>
            ),
          },
          {
            label: "חתימה על מסמכי הקליטה",
            item: (
              <>
                <Button>
                  <InlineSVG src={sendIcon} />
                  <span>שלח טופס</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית טפסים</span>
                </Button>
              </>
            ),
          },
        ],
      },
      {
        title: "צימוד חונך",
        items: [
          {
            label: "גישה עם ניהול מקצועי",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
              </>
            ),
          },
          {
            label: "פגישה עם חונך",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
              </>
            ),
          },
        ],
      },
      {
        title: "תהליך תכנון השיקום",
        items: [
          {
            label: "בניית תוכנית אישית",
            item: (
              <Button>
                <InlineSVG src={createIcon} />
                <span>כתיבת תוכנית שיקום</span>
              </Button>
            ),
          },
          {
            label: "קביעת ימי מפגשים",
            item: (
              <Button>
                <InlineSVG src={calendarIcon} />
                <span>יומן</span>
              </Button>
            ),
          },
        ],
      },
      {
        title: "לווי שוטף",
        items: [
          {
            label: "חתימה על מסמכי הקליטה",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
              </>
            ),
          },
        ],
      },
      {
        title: "סיום",
        items: [
          {
            label: "תהליך סיום",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
              </>
            ),
          },
          {
            label: "הקלדה בשקדיה",
            item: (
              <>
                <Button>
                  <InlineSVG src={calendarPlusIcon} />
                  <span>הוסף אירוע</span>
                </Button>
                <Button>
                  <InlineSVG src={historyIcon} />
                  <span>היסטורית אירועים</span>
                </Button>
              </>
            ),
          },
        ],
      },
    ],
  ];

  return (
    <div className="recipient-home-board">
      <div className="recipient-home-board-title">
        <InlineSVG src={dataflowIcon} stroke="#13566c" />
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
