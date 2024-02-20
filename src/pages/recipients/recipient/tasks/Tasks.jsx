import { Button } from "antd";
import { useState } from "react";
import InlineSVG from "react-inlinesvg";
import AddTask from "../../../../components/modals/addTask/AddTask";
import SmallCard from "../../../../components/taskCards/smallCard/SmallCard";

import createSvg from "../../../../assets/icons/create.svg";
import avatarImg1 from "../../../../assets/images/avatar1.png";
import avatarImg2 from "../../../../assets/images/avatar2.png";
import avatarImg3 from "../../../../assets/images/avatar3.png";
import avatarImg4 from "../../../../assets/images/avatar4.png";
import avatarImg5 from "../../../../assets/images/avatar5.png";
import addImg from "../../../../assets/icons/add.svg";

const items = [
  {
    title: "המשימות שלי: ",
    key: "1",
    taskCards: [
      {
        name: "ישראל ישראלי",
        avatar: avatarImg1,
        title: "ישראל ישראלי",
        content:
          "שיפור קורות חיים שיפור קורות חייםשיפור קורות חיים שיפור קורות חייםשיפור קורות חייםשיפור קורות חיים",
        labelColor: "#FF8A00",
      },
      {
        name: "ישראל ישראלי",
        avatar: avatarImg2,
        title: "ישראל ישראלי",
        content: "שיפור קורות חיים",
        labelColor: "#EA4335",
      },
    ],
  },
  {
    title: "המשימות של שמוליק גוטמן: ",
    key: "2",
    taskCards: [
      {
        name: "ישראל ישראלי",
        avatar: avatarImg3,
        title: "חסר שירות צבאי",
        content:
          "שיפור קורות חיים שיפור קורות חייםשיפור קורות חיים שיפור קורות חייםשיפור קורות חייםשיפור קורות חיים שיפור קורות חייםשיפור קורות חייםשיפור קורות חייםשיפור קורות חייםשיפור קורות חייםשיפור קורות חיים",
        labelColor: "#EA4335",
      },
      {
        name: "ישראל ישראלי",
        avatar: avatarImg2,
        title: "חסר שירות צבאי",
        content:
          "שיפור קורות חיים שיפור קורות חייםשיפור קורות חיים שיפור קורות חייםשיפור קורות חייםשיפור קורות חיים שיפור קורות חייםשיפור קורות חייםשיפור קורות חייםשיפור קורות חייםשיפור קורות חייםשיפור קורות חיים",
        labelColor: "#8AD341",
      },
    ],
  },
];

const Tasks = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="recipient-tasks">
      {items.map((item) => {
        return (
          <div className="recipient-tasks-step" key={item.key}>
            <div className="recipient-tasks-step-header">
              <span className="recipient-tasks-step-header-title">
                {item.title}
              </span>
              <span className="recipient-tasks-step-header-count">
                {item.taskCards.length}
              </span>
            </div>
            <div className="recipient-tasks-step-cards">
              {item.taskCards.map((card, index) => (
                <SmallCard
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
              className="recipient-tasks-step-add"
              style={{ paddingRight: "10px" }}
            >
              <button onClick={() => setVisible(true)}>
                <InlineSVG src={addImg} />
              </button>
              <div>משימה חדשה</div>
            </div>
          </div>
        );
      })}
      <div>
        <div className="recipient-tasks-create">
          <Button
            className="recipient-tasks-create-button"
            onClick={() => setVisible(true)}
          >
            <InlineSVG
              src={createSvg}
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

export default Tasks;
