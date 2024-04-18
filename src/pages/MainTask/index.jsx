import { Button } from "antd";
import { useState } from "react";
import InlineSVG from "react-inlinesvg";

import AddTask from "../../components/Modals/AddTask";
import MediumCard from "../../components/TaskCards/MediumCard";

import createIcon from "../../assets/icons/master/clipboard-report.svg";
import avatarImg1 from "../../assets/avatars/avatar1.png";
import avatarImg2 from "../../assets/avatars/avatar2.png";
import avatarImg3 from "../../assets/avatars/avatar3.png";
import avatarImg4 from "../../assets/avatars/avatar4.png";
import avatarImg5 from "../../assets/avatars/avatar5.png";
import addIcon from "../../assets/icons/add.svg";

const items = [
  {
    title: "משימות דחופות",
    key: "1",
    taskCards: [
      {
        name: "ישראל ישראלי",
        avatar: avatarImg1,
        title: "ישראל ישראלי",
        content:
          "שיפור קורות חיים שיפור קורות חייםשיפור קורות חיים שיפור קורות חייםשיפור קורות חייםשיפור קורות חיים",
        labelColor: "Graph-03",
      },
      {
        name: "ישראל ישראלי",
        avatar: avatarImg2,
        title: "ישראל ישראלי",
        content: "שיפור קורות חיים",
        labelColor: "Graph-04",
      },
    ],
  },
  {
    title: "אדמיניסטרציה",
    key: "2",
    taskCards: [
      {
        name: "ישראל ישראלי",
        avatar: avatarImg3,
        title: "חסר שירות צבאי",
        content:
          "שיפור קורות חיים שיפור קורות חייםשיפור קורות חיים שיפור קורות חייםשיפור קורות חייםשיפור קורות חיים שיפור קורות חייםשיפור קורות חייםשיפור קורות חייםשיפור קורות חייםשיפור קורות חייםשיפור קורות חיים",
        labelColor: "Graph-02",
      },
      {
        name: "ישראל ישראלי",
        avatar: avatarImg2,
        title: "חסר שירות צבאי",
        content:
          "שיפור קורות חיים שיפור קורות חייםשיפור קורות חיים שיפור קורות חייםשיפור קורות חייםשיפור קורות חיים שיפור קורות חייםשיפור קורות חייםשיפור קורות חייםשיפור קורות חייםשיפור קורות חייםשיפור קורות חיים",
        labelColor: "Graph-01",
      },
    ],
  },
  {
    title: "משה כהן",
    key: "3",
    taskCards: [
      {
        name: "ישראל ישראלי",
        avatar: avatarImg4,
        title: "סודיות רפואית",
        content:
          "שיפור קורות חיים שיפור קורות חייםשיפור קורות חיים שיפור קורות חייםשיפור קורות חייםשיפור קורות חיים",
        labelColor: "Graph-03",
      },
    ],
  },
  {
    title: "יונית לוי",
    key: "4",
    taskCards: [
      {
        name: "ישראל ישראלי",
        avatar: avatarImg5,
        title: "חסרים מקומות עבודה",
        content:
          "שיפור קורות חיים שיפור קורות חייםשיפור קורות חיים שיפור קורות חייםשיפור קורות חייםשיפור קורות חיים",
        labelColor: "Graph-04",
      },
    ],
  },
];

const MainTask = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="main-task">
      {items.map((item) => {
        return (
          <div className="main-task-step" key={item.key}>
            <div className="main-task-step-header">
              <span className="main-task-step-header-title">{item.title}</span>
              <span className="main-task-step-header-count">
                {item.taskCards.length}
              </span>
            </div>
            <div className="main-task-step-cards">
              {item.taskCards.map((card, index) => (
                <MediumCard
                  key={index}
                  title={card.title}
                  name={card.name}
                  content={card.content}
                  avatar={card.avatar}
                  labelColor={card.labelColor}
                />
              ))}
            </div>
            <div
              className="main-task-step-add"
              style={{ paddingRight: "10px" }}
            >
              <button onClick={() => setVisible(true)}>
                <InlineSVG src={addIcon} />
              </button>
              <div>משימה חדשה</div>
            </div>
          </div>
        );
      })}
      <div>
        <div className="main-task-create">
          <Button
            className="main-task-create-button"
            onClick={() => setVisible(true)}
          >
            <InlineSVG
              src={createIcon}
              style={{ stroke: "#434F68", width: "16px", height: "20px" }}
            />
            <span>הוסף רשימה</span>
          </Button>
        </div>
      </div>
      <AddTask visible={visible} onCancel={() => setVisible(false)} />
    </div>
  );
};

export default MainTask;
