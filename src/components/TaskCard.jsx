import React, { useState } from "react";
import PropTypes from "prop-types";

import TimeLabel from "./TimeLabel";

const TaskCard = ({ avatar, name, title, content, dueContent, color }) => {
  return (
    <div className="pt-2.5 px-[15px] pb-[15px] bg-white rounded-[10px] shadow border-2 border-transparent hover:border-blue-600 transition-all">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-x-[10px]">
          <img src={avatar} />
          <div className="text-right text-neutral-700 text-[15px] font-medium font-['Afek 1.5 AAA']">
            {name}
          </div>
        </div>
        <TimeLabel content={dueContent} color={color} />
      </div>
      <div className="mt-2">
        <div className="self-stretch text-right text-cyan-900 text-lg font-medium font-['Afek 1.5 AAA'] leading-snug tracking-wide">
          {title}
        </div>
        <div className="grow shrink basis-0 mt-2 text-right text-neutral-700 text-xs font-normal font-['Afek 1.5 AAA'] leading-tight">
          {content}
        </div>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  avatar: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  dueContent: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default TaskCard;
