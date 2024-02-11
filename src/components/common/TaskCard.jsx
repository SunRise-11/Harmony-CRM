import React, { useState } from "react";
import PropTypes from "prop-types";

import TimeLabel from "../labels/timeLabel/TimeLabel";

const TaskCard = ({ avatar, name, title, content, dueContent, color }) => {
  return (
    <div className="task-card">
      <div className="task-card-header">
        <div className="task-card-avatar">
          <img src={avatar} />
          <div className="task-card-name">{name}</div>
        </div>
        <TimeLabel content={dueContent} color={color} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <div className="task-card-title">{title}</div>
        <div className="task-card-content">{content}</div>
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
