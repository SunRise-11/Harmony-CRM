import React, { useState } from "react";
import InlineSVG from "react-inlinesvg";

import MiniCard from "../../../../../components/taskCards/miniCard/MiniCard";
import TitleLabel from "../../../../../components/labels/titleLabel/TitleLabel";
import AddTask from "../../../../../components/modals/addTask/AddTask";
import TaskCardData from "../../../../../mockup/TaskCard.json";

import listSVG from "../../../../../assets/icons/list.svg";
import taskSVG from "../../../../../assets/icons/task.svg";
import addSVG from "../../../../../assets/icons/add.svg";

import avatarImg5 from "../../../../../assets/images/avatar5.png";
import avatarImg6 from "../../../../../assets/images/avatar6.png";

const TaskCardList = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="card-list">
      <div className="card-list-title">
        <TitleLabel icon={taskSVG} title="משימות" />
      </div>
      <MiniCard
        avatar={avatarImg5}
        name={TaskCardData.TaskCard1[0].name}
        title={TaskCardData.TaskCard1[0].title}
        content={TaskCardData.TaskCard1[0].content}
        dueContent={TaskCardData.TaskCard1[0].dueContent}
        color={TaskCardData.TaskCard1[0].color}
      />
      <MiniCard
        avatar={avatarImg5}
        name={TaskCardData.TaskCard1[1].name}
        title={TaskCardData.TaskCard1[1].title}
        content={TaskCardData.TaskCard1[1].content}
        dueContent={TaskCardData.TaskCard1[1].dueContent}
        color={TaskCardData.TaskCard1[1].color}
      />
      <MiniCard
        avatar={avatarImg6}
        name={TaskCardData.TaskCard1[2].name}
        title={TaskCardData.TaskCard1[2].title}
        content={TaskCardData.TaskCard1[2].content}
        dueContent={TaskCardData.TaskCard1[2].dueContent}
        color={TaskCardData.TaskCard1[2].color}
      />
      <MiniCard
        avatar={avatarImg5}
        name={TaskCardData.TaskCard1[3].name}
        title={TaskCardData.TaskCard1[3].title}
        content={TaskCardData.TaskCard1[3].content}
        dueContent={TaskCardData.TaskCard1[3].dueContent}
        color={TaskCardData.TaskCard1[3].color}
      />
      <div className="card-list-buttons">
        <button onClick={() => setVisible(true)}>
          <InlineSVG src={addSVG} />
        </button>
        <div>משימה חדשה</div>
      </div>
      <AddTask visible={isVisible} onCancel={() => setVisible(false)} />
    </div>
  );
};

export default TaskCardList;
