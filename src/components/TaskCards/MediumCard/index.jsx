import { useState } from "react";
import InlineSVG from "react-inlinesvg";

import paperclipIcon from "../../../assets/icons/master/paperclip.svg";
import moreIcon from "../../../assets/icons/master/more.svg";
import bellIcon from "../../../assets/icons/master/bell.svg";
import editIcon from "../../../assets/icons/master/edit.svg";
import trashIcon from "../../../assets/icons/master/trash.svg";

import TimeLabel from "../../Labels/TimeLabel";
import { Dropdown, Menu } from "antd";
import { setToggleCollapsed } from "../../../redux/store";
import { useDispatch } from "react-redux";
import useViewportWidth from "../../../hooks/useViewportWidth";

const MediumCard = ({ title, content, name, avatar, labelColor }) => {
  const dispatch = useDispatch();
  const viewportWidth = useViewportWidth();

  const datas = [
    {
      label: (
        <div className="quick-menu-item">
          <InlineSVG src={editIcon} style={{ stroke: "#5177a4" }} />
          <span>עריכה</span>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div className="quick-menu-item">
          <InlineSVG src={trashIcon} style={{ stroke: "#5177a4" }} />
          <span>מחיקה</span>
        </div>
      ),
      key: "2",
    },
    {
      label: (
        <div className="quick-menu-item">
          <InlineSVG src={bellIcon} style={{ stroke: "#5177a4" }} />
          <span>הוספת תזכורת</span>
        </div>
      ),
      key: "3",
    },
    {
      label: (
        <div className="quick-menu-item">
          <InlineSVG src={paperclipIcon} style={{ stroke: "#5177a4" }} />
          <span>הוספת קבצים</span>
        </div>
      ),
      key: "4",
    },
  ];

  const menu = (
    <Menu>
      {datas.map((data) => (
        <Menu.Item key={data.key}>{data.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="medium-card">
      <div className="medium-card-content">
        <div className="medium-card-content-data">
          <div className="medium-card-content-data-title">{title}</div>
          <div className="medium-card-content-data-content">{content}</div>
        </div>
        <span className="medium-card-content-user">
          <img src={avatar} width={32} height={32} />
          <span>{name}</span>
        </span>
      </div>
      <div className="medium-card-footer">
        <div className="medium-card-footer-attach">
          <span>3</span>
          <InlineSVG
            src={paperclipIcon}
            style={{ stroke: "#5177A4", width: 16, height: 16 }}
          />
        </div>
        <div className="medium-card-footer-info">
          <span className="card-number-text">כרטיס:</span>
          <span className="card-number">2546</span>
        </div>
        <TimeLabel content="24 במאי" color={labelColor} />
      </div>
      <Dropdown
        placement="bottomLeft"
        overlay={menu}
        overlayStyle={{
          borderRadius: "20px",
          boxShadow: "0 0px 15px 0 rgba(0, 0, 0, 0.3)",
          zIndex: 5,
        }}
        trigger={["click"]}
        className="small-card-more"
        onOpenChange={(open, info) =>
          viewportWidth < 1000 && open ? dispatch(setToggleCollapsed(true)) : {}
        }
      >
        <a onClick={(e) => e.preventDefault()}>
          <InlineSVG src={moreIcon} style={{ stroke: "#B6C3C5" }} />
        </a>
      </Dropdown>
    </div>
  );
};

export default MediumCard;
