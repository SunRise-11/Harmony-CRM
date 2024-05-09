import { Button } from "antd";
import { useState } from "react";
import InlineSVG from "react-inlinesvg";
import { useDispatch, useSelector } from "react-redux";
import { setToggleCollapsed } from "../../../redux/store";

import SmallCard from "../../../components/TaskCards/SmallCard";
import AddTask from "../../../components/Modals/AddTask";

import createIcon from "../../../assets/icons/master/clipboard-report.svg";
import avatarImg1 from "../../../assets/avatars/avatar1.png";
import avatarImg2 from "../../../assets/avatars/avatar2.png";
import avatarImg3 from "../../../assets/avatars/avatar3.png";
import addIcon from "../../../assets/icons/add.svg";
import useViewportWidth from "../../../hooks/useViewportWidth";

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
        labelColor: "Graph-01",
      },
      {
        name: "ישראל ישראלי",
        avatar: avatarImg2,
        title: "ישראל ישראלי",
        content: "שיפור קורות חיים",
        labelColor: "Graph-02",
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
        labelColor: "Graph-04",
      },
      {
        name: "ישראל ישראלי",
        avatar: avatarImg2,
        title: "חסר שירות צבאי",
        content:
          "שיפור קורות חיים שיפור קורות חייםשיפור קורות חיים שיפור קורות חייםשיפור קורות חייםשיפור קורות חיים שיפור קורות חייםשיפור קורות חייםשיפור קורות חייםשיפור קורות חייםשיפור קורות חייםשיפור קורות חיים",
        labelColor: "Graph-03",
      },
    ],
  },
];

const Tasks = () => {
  const [visible, setVisible] = useState(false);
  const direction = useSelector((state) => state.app.direction);
  const dispatch = useDispatch();
  const viewportWidth = useViewportWidth();
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
              style={
                direction === "rtl"
                  ? { paddingRight: "10px" }
                  : { paddingLeft: "10px" }
              }
            >
              <button onClick={() => setVisible(true) || viewportWidth < 1400 ? dispatch(setToggleCollapsed(true)) : {}}>
                <InlineSVG src={addIcon} width={24} height={24} />
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

export default Tasks;
