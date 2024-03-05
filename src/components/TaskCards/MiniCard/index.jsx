import React from "react";
import PropTypes from "prop-types";

import TimeLabel from "../../Labels/TimeLabel";

const MiniCard = ({ avatar, name, title, content, dueContent, color }) => {
  return (
    <div className="mini-card">
      <div className="mini-card-header">
        <div className="mini-card-avatar">
          <img src={avatar} />
          <div className="mini-card-name">{name}</div>
        </div>
        <TimeLabel content={dueContent} color={color} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <div className="mini-card-title">{title}</div>
        <div className="mini-card-content">{content}</div>
      </div>
    </div>
  );
};

MiniCard.propTypes = {
  avatar: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  dueContent: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default MiniCard;
