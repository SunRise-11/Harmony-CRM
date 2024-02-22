import React, { useState } from "react";
import InlineSVG from "react-inlinesvg";

import SmallCard from "../../../../../components/taskCards/smallCard/SmallCard";
import TitleLabel from "../../../../../components/labels/titleLabel/TitleLabel";
import TaskCardData from "../../../../../mockup/TaskCard.json";
import listImg from "../../../../../assets/icons/list.svg";
import taskImg from "../../../../../assets/icons/task.svg";

const CardList = () => {
  return (
    <div className="recipient-card-list">
      <div className="recipient-card-list-title">
        <TitleLabel icon={taskImg} title="משימות" />
        <div className="recipient-card-list-title-buttons">
          <InlineSVG src={listImg} />
          <span> כל המשימות</span>
        </div>
      </div>
      <div style={{ zIndex: "2" }}>
        <SmallCard
          title="קורות חיים"
          content="שיפור קורות חיים שיפור קורות חייםשיפור קורות חיים שיפור קורות חייםשיפור קורות חייםשיפור קורות חיים"
        />
      </div>
      <div style={{ marginTop: "-60px", zIndex: "1" }}>
        <SmallCard
          title="קורות חיים"
          content="שיפור קורות חיים שיפור קורות חייםשיפור קורות חיים שיפור קורות חייםשיפור קורות חייםשיפור קורות חיים"
        />
      </div>
      <div style={{ marginTop: "-60px" }}>
        <SmallCard
          title="קורות חיים"
          content="שיפור קורות חיים שיפור קורות חייםשיפור קורות חיים שיפור קורות חייםשיפור קורות חייםשיפור קורות חיים"
        />
      </div>
    </div>
  );
};

export default CardList;
