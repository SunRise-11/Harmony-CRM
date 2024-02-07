import React, { useState } from "react";
import MenuItem from "../components/MenuItem";

import logoImg from "../assets/images/logo.svg";
import homeImg from "../assets/icons/home.svg";
import usersImg from "../assets/icons/users.svg";
import pieImg from "../assets/icons/pie.svg";
import taskImg from "../assets/icons/task.svg";
import planImg from "../assets/icons/plan.svg";
import reportImg from "../assets/icons/report.svg";
import jobImg from "../assets/icons/job.svg";
import crmImg from "../assets/icons/crm.svg";
import videoImg from "../assets/icons/video.svg";
import warnImg from "../assets/icons/warn.svg";

const SideBar = () => {
  const [isSelected, setSelected] = useState(0);
  const [showSubMenu, setShowSubMenu] = useState(-1);

  return (
    <>
      <div className="h-16 w-full pt-[15px] pb-3.5 border-b bg-white shadow border-purple-400 justify-center items-center gap-2 inline-flex">
        <img src={logoImg} />
      </div>
      <div className="bg-white pt-5">
        <MenuItem
          icon={homeImg}
          title="דף הבית"
          isSelect={isSelected === 0}
          onClick={() => setSelected(0)}
        />
        <MenuItem
          hasSubMenu={true}
          icon={usersImg}
          title="מקבלי שירות"
          onClick={() => setShowSubMenu(showSubMenu === 1 ? -1 : 1)}
          isSelect={showSubMenu === 1}
          subMenus={[
            <MenuItem
              isSubMenu={true}
              title="שמוליק גוטמן"
              isSelect={isSelected === 10}
              onClick={() => setSelected(10)}
            />,
            <MenuItem
              isSubMenu={true}
              title="ניסים מזרחי"
              isSelect={isSelected === 11}
              onClick={() => setSelected(11)}
            />,
            <MenuItem
              isSubMenu={true}
              title="אהובה קרן"
              isSelect={isSelected === 12}
              onClick={() => setSelected(12)}
            />,
            <MenuItem
              isSubMenu={true}
              title="יניב וויסמן"
              isSelect={isSelected === 13}
              onClick={() => setSelected(13)}
            />,
            <MenuItem
              isSubMenu={true}
              title="יוסי כהן"
              isSelect={isSelected === 14}
              onClick={() => setSelected(14)}
            />,
            <MenuItem
              isSubMenu={true}
              title="אהרון ליפשיץ"
              isSelect={isSelected === 15}
              onClick={() => setSelected(15)}
            />,
          ]}
        />
        <MenuItem
          hasSubMenu={true}
          icon={pieImg}
          title="דוחות"
          onClick={() => setShowSubMenu(showSubMenu === 2 ? -1 : 2)}
          isSelect={showSubMenu === 2}
          subMenus={[
            <MenuItem
              isSubMenu={true}
              title="דוח אירועים"
              isSelect={isSelected === 20}
              onClick={() => setSelected(20)}
            />,
            <MenuItem
              isSubMenu={true}
              title="דוח חוסרים"
              isSelect={isSelected === 21}
              onClick={() => setSelected(21)}
            />,
            <MenuItem
              isSubMenu={true}
              title="דוח הוצאות"
              isSelect={isSelected === 22}
              onClick={() => setSelected(22)}
            />,
            <MenuItem
              isSubMenu={true}
              title='דו"ח ק"מ'
              isSelect={isSelected === 23}
              onClick={() => setSelected(23)}
            />,
            <MenuItem
              isSubMenu={true}
              title="סטטיסטיקת היסטוריות"
              isSelect={isSelected === 24}
              onClick={() => setSelected(24)}
            />,
          ]}
        />
        <MenuItem
          icon={taskImg}
          title="משימות"
          isSelect={isSelected === 3}
          onClick={() => setSelected(3)}
        />
        <MenuItem
          icon={planImg}
          title="יומן פגישות"
          isSelect={isSelected === 4}
          onClick={() => setSelected(4)}
        />
        <MenuItem
          onClick={() => setShowSubMenu(showSubMenu === 5 ? -1 : 5)}
          isSelect={showSubMenu === 5}
          hasSubMenu={true}
          icon={reportImg}
          title="דיווחים"
          subMenus={[
            <MenuItem
              isSubMenu={true}
              title={"דיווח נוכחות"}
              isSelect={isSelected === 50}
              onClick={() => setSelected(50)}
            />,
            <MenuItem
              isSubMenu={true}
              title={"דיווח הוצאות"}
              isSelect={isSelected === 51}
              onClick={() => setSelected(51)}
            />,
            <MenuItem
              isSubMenu={true}
              title={"דיווח תעסוקה"}
              isSelect={isSelected === 52}
              onClick={() => setSelected(52)}
            />,
          ]}
        />
        <MenuItem
          icon={jobImg}
          title="הזדמנויות תעסוקה"
          isSelect={isSelected === 6}
          onClick={() => setSelected(6)}
        />
        <MenuItem
          hasSubMenu={true}
          icon={crmImg}
          title="CRM"
          onClick={() => setShowSubMenu(showSubMenu === 7 ? -1 : 7)}
          isSelect={showSubMenu === 7}
          subMenus={[
            <MenuItem
              isSubMenu={true}
              title={"מבקשי שירות פוטנציאליים"}
              isSelect={isSelected === 70}
              onClick={() => setSelected(70)}
            />,
            <MenuItem
              isSubMenu={true}
              title={"לקוחות פוטנציאליים"}
              isSelect={isSelected === 71}
              onClick={() => setSelected(71)}
            />,
          ]}
        />
        <MenuItem
          icon={videoImg}
          title="הדרכות"
          isSelect={isSelected === 8}
          onClick={() => setSelected(8)}
        />
        <MenuItem
          icon={warnImg}
          title="התראות"
          isSelect={isSelected === 9}
          onClick={() => setSelected(9)}
        />
      </div>
    </>
  );
};
export default SideBar;
