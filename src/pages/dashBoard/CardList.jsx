import React, { useState } from "react";
import InlineSVG from "react-inlinesvg";

import TaskCard from "../../components/TaskCard";
import TitleLabel from "../../components/TitleLabel";
import AddTask from "../../components/modals/AddTask";
import TaskCardData from "../../mockup/TaskCard.json";

import listImg from "../../assets/icons/list.svg";
import taskImg from "../../assets/icons/task.svg";
import addImg from "../../assets/icons/add.svg";

import avatarImg5 from "../../assets/images/avatar5.png";
import avatarImg6 from "../../assets/images/avatar6.png";

const TaskCardList = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="grid w-full h-full p-[30px] gap-y-[14px] bg-white shadow rounded-[10px]">
      <div className="flex justify-between items-center">
        <TitleLabel icon={taskImg} title="משימות" />
        <div className="mr-auto py-[5px] border border-slate-300 pr-[5px] pl-3 rounded-[5px] flex items-center gap-x-1 cursor-pointer">
          <div className="p-[10px]">
            <InlineSVG src={listImg} />
          </div>
          <div className="text-gray-700 text-sm font-normal font-['Afek 1.5 AAA']">
            כל המשימות
          </div>
        </div>
      </div>
      <TaskCard
        avatar={avatarImg5}
        name={TaskCardData.TaskCard1[0].name}
        title={TaskCardData.TaskCard1[0].title}
        content={TaskCardData.TaskCard1[0].content}
        dueContent={TaskCardData.TaskCard1[0].dueContent}
        color={TaskCardData.TaskCard1[0].color}
      />
      <TaskCard
        avatar={avatarImg5}
        name={TaskCardData.TaskCard1[1].name}
        title={TaskCardData.TaskCard1[1].title}
        content={TaskCardData.TaskCard1[1].content}
        dueContent={TaskCardData.TaskCard1[1].dueContent}
        color={TaskCardData.TaskCard1[1].color}
      />
      <TaskCard
        avatar={avatarImg6}
        name={TaskCardData.TaskCard1[2].name}
        title={TaskCardData.TaskCard1[2].title}
        content={TaskCardData.TaskCard1[2].content}
        dueContent={TaskCardData.TaskCard1[2].dueContent}
        color={TaskCardData.TaskCard1[2].color}
      />
      <TaskCard
        avatar={avatarImg5}
        name={TaskCardData.TaskCard1[3].name}
        title={TaskCardData.TaskCard1[3].title}
        content={TaskCardData.TaskCard1[3].content}
        dueContent={TaskCardData.TaskCard1[3].dueContent}
        color={TaskCardData.TaskCard1[3].color}
      />
      <div className="justify-start items-center gap-x-2.5 inline-flex pb-8">
        <button
          className="p-0.5 bg-white rounded-[30px] shadow border-2 border-transparent hover:border-blue-400 
                justify-start items-start gap-2.5 flex transition-all"
          onClick={() => setVisible(true)}
        >
          <InlineSVG src={addImg} />
        </button>
        <div className="text-right text-slate-500 text-[15px] font-medium font-['Afek 1.5 AAA']">
          משימה חדשה
        </div>
      </div>
      <AddTask visible={isVisible} onCancel={() => setVisible(false)} />
    </div>
  );
};

export default TaskCardList;
