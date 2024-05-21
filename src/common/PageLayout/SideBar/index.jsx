import React, { useState } from "react";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import InlineSVG from "react-inlinesvg";

import MenuItem from "../../../components/MenuItem";

import originalLogo from "../../../assets/icons/logos/harmony-logo-original.svg";
import suggestedLogo from "../../../assets/icons/logos/harmony-logo-suggested.svg";
import mondayLogo from "../../../assets/icons/logos/harmony-logo-monday.svg";
import dynamicsLogo from "../../../assets/icons/logos/harmony-logo-dynamics.svg";
import homeIcon from "../../../assets/icons/master/home.svg";
import usersIcon from "../../../assets/icons/master/users.svg";
import pieIcon from "../../../assets/icons/master/pie.svg";
import ClipboardCheckIcon from "../../../assets/icons/master/clipboard-check.svg";
import CalendarIcon from "../../../assets/icons/master/calendar.svg";
import CreateIcon from "../../../assets/icons/master/create.svg";
import bagIcon from "../../../assets/icons/master/bag.svg";
import targetIcon from "../../../assets/icons/master/target.svg";
import presentationIcon from "../../../assets/icons/master/presentation.svg";
import warningIcon from "../../../assets/icons/master/warning.svg";
import addIcon from "../../../assets/icons/add.svg";
import { useSelector } from "react-redux";

const SideBar = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();

  const styles = {
    original: {
      color: "#5FBCFF",
      icon: originalLogo,
    },
    suggested: {
      color: "#70c6dd",
      icon: suggestedLogo,
    },
    monday: {
      color: "#01c776",
      icon: mondayLogo,
    },
    dynamics: {
      color: "#3594dd",
      icon: dynamicsLogo,
    },
  };

  const [isSelected, setSelected] = useState(0);
  const [showSubMenu, setShowSubMenu] = useState(-1);
  const theme = useSelector((state) => state.app.theme);

  return (
    <div style={{ height: "100vh", overflow: "auto" }}>
      <div className="sidebar-logo">
        <InlineSVG src={styles[theme].icon} onClick={() => setCollapsed()} />
      </div>
      <div
        className="sidebar-main"
        style={{ position: "absolute", zIndex: "1000", backgroundColor: "red" }}
      >
        <MenuItem
          key={0}
          icon={homeIcon}
          title="דף הבית"
          isSelect={isSelected === 0}
          onClick={() => {
            setSelected(0);
            navigate("/");
          }}
        />
        <MenuItem
          hasSubMenu={true}
          key={1}
          subMenuSelected={Math.floor(isSelected / 10) === 1}
          icon={usersIcon}
          title="מקבלי שירות"
          onClick={() => {
            setShowSubMenu(showSubMenu === 1 ? -1 : 1);
            navigate("/recipients");
          }}
          isSelect={showSubMenu === 1}
          subMenus={[
            <MenuItem
              key={10}
              isSubMenu={true}
              title="שמוליק גוטמן"
              isSelect={isSelected === 10}
              onClick={() => {
                setSelected(10);
                navigate("/recipients/recipient");
              }}
            />,
            <MenuItem
              isSubMenu={true}
              title="ניסים מזרחי"
              isSelect={isSelected === 11}
              onClick={() => setSelected(11)}
              key={11}
            />,
            <MenuItem
              isSubMenu={true}
              title="אהובה קרן"
              isSelect={isSelected === 12}
              onClick={() => setSelected(12)}
              key={12}
            />,
            <MenuItem
              isSubMenu={true}
              title="יניב וויסמן"
              isSelect={isSelected === 13}
              onClick={() => setSelected(13)}
              key={13}
            />,
            <MenuItem
              isSubMenu={true}
              title="יוסי כהן"
              isSelect={isSelected === 14}
              onClick={() => setSelected(14)}
              key={14}
            />,
            <div className="sub-menu-unselected" key="15">
              <div className="menu-item">
                <div className="menu-item-container">
                  <InlineSVG
                    src={addIcon}
                    width={24}
                    height={24}
                    stroke={styles[theme].color}
                  />
                  <div className="menu-item-title">אהרון ליפשיץ</div>
                </div>
              </div>
            </div>,
          ]}
        />
        <MenuItem
          hasSubMenu={true}
          icon={pieIcon}
          subMenuSelected={Math.floor(isSelected / 10) === 2}
          title="דוחות"
          onClick={() => setShowSubMenu(showSubMenu === 2 ? -1 : 2)}
          isSelect={showSubMenu === 2}
          key={2}
          subMenus={[
            <MenuItem
              isSubMenu={true}
              title="דוח אירועים"
              isSelect={isSelected === 20}
              onClick={() => {
                setSelected(20);
                navigate("/report/event");
              }}
              key={20}
            />,
            <MenuItem
              isSubMenu={true}
              title="דוח חוסרים"
              isSelect={isSelected === 21}
              onClick={() => setSelected(21)}
              key={21}
            />,
            <MenuItem
              isSubMenu={true}
              title="דוח הוצאות"
              isSelect={isSelected === 22}
              onClick={() => setSelected(22)}
              key={22}
            />,
            <MenuItem
              isSubMenu={true}
              title='דו"ח ק"מ'
              isSelect={isSelected === 23}
              onClick={() => setSelected(23)}
              key={23}
            />,
            <MenuItem
              isSubMenu={true}
              title="סטטיסטיקת היסטוריות"
              isSelect={isSelected === 24}
              onClick={() => setSelected(24)}
              key={24}
            />,
          ]}
        />
        <MenuItem
          icon={ClipboardCheckIcon}
          title="משימות"
          isSelect={isSelected === 3}
          onClick={() => {
            setSelected(3);
            navigate("/main-task");
          }}
          key={3}
        />
        <MenuItem
          icon={CalendarIcon}
          title="יומן פגישות"
          isSelect={isSelected === 4}
          onClick={() => {
            setSelected(4);
            navigate("/daily-planner");
          }}
          key={4}
        />
        <MenuItem
          onClick={() => setShowSubMenu(showSubMenu === 5 ? -1 : 5)}
          isSelect={showSubMenu === 5}
          hasSubMenu={true}
          subMenuSelected={Math.floor(isSelected / 10) === 5}
          icon={CreateIcon}
          title="דיווחים"
          key={5}
          subMenus={[
            <MenuItem
              isSubMenu={true}
              title={"דיווח נוכחות"}
              isSelect={isSelected === 50}
              onClick={() => {
                setSelected(50);
                navigate("/reporting/presence");
              }}
              key={50}
            />,
            <MenuItem
              isSubMenu={true}
              title={"דיווח הוצאות"}
              isSelect={isSelected === 51}
              onClick={() => {
                setSelected(51);
                navigate("/reporting/expense");
              }}
              key={51}
            />,
            <MenuItem
              isSubMenu={true}
              title={"דיווח תעסוקה"}
              isSelect={isSelected === 52}
              onClick={() => {
                setSelected(52);
                navigate("/reporting/employment");
              }}
              key={52}
            />,
          ]}
        />
        <MenuItem
          icon={bagIcon}
          title="הזדמנויות תעסוקה"
          isSelect={isSelected === 6}
          onClick={() => {
            setSelected(6);
            navigate("/employment");
          }}
          key={6}
        />
        <MenuItem
          hasSubMenu={true}
          subMenuSelected={Math.floor(isSelected / 10) === 7}
          icon={targetIcon}
          title="CRM"
          onClick={() => setShowSubMenu(showSubMenu === 7 ? -1 : 7)}
          isSelect={showSubMenu === 7}
          key={7}
          subMenus={[
            <MenuItem
              isSubMenu={true}
              title={"מבקשי שירות פוטנציאליים"}
              isSelect={isSelected === 70}
              onClick={() => {
                setSelected(70);
                navigate("/crm/service-applicants");
              }}
              key={70}
            />,
            <MenuItem
              isSubMenu={true}
              title={"לקוחות פוטנציאליים"}
              isSelect={isSelected === 71}
              onClick={() => {
                setSelected(71);
                navigate("/crm/customers");
              }}
              key={71}
            />,
          ]}
        />
        <MenuItem
          icon={presentationIcon}
          title="הדרכות"
          isSelect={isSelected === 8}
          onClick={() => {
            setSelected(8);
            navigate("/tutorials");
          }}
          key={8}
        />
        <MenuItem
          icon={warningIcon}
          title="התראות"
          isSelect={isSelected === 9}
          onClick={() => {
            setSelected(9);
            navigate("/alerts");
          }}
          key={9}
        />
      </div>
    </div>
  );
};

SideBar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired,
};

export default SideBar;
