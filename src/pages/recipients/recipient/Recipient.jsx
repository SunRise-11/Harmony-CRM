import React, { useState } from "react";
import { ConfigProvider, Tabs } from "antd";
import { useSelector } from "react-redux";
import InlineSVG from "react-inlinesvg";
import homeSVG from "../../../assets/icons/home.svg";
import profileSVG from "../../../assets/icons/profile.svg";
import medicalSVG from "../../../assets/icons/medical.svg";
import attachSVG from "../../../assets/icons/attach.svg";
import eventsSVG from "../../../assets/icons/events.svg";
import planSVG from "../../../assets/icons/plan.svg";
import taskSVG from "../../../assets/icons/task.svg";
import studySVG from "../../../assets/icons/study.svg";
import jobSVG from "../../../assets/icons/job.svg";
import questionSVG from "../../../assets/icons/question.svg";

import Home from "./home/Home";
import Profile from "./profile/Profile";
import Medical from "./medical/Medical";
import Documents from "./documents/Documents";
import Events from "./events/Events";
import DailyPlanner from "./dailyPlanner/DailyPlanner";
import Tasks from "./tasks/Tasks";
import Studies from "./studies/Studies";
import Employment from "./employment/Employment";
import Questionnaires from "./questionnaires";

const Recipient = () => {
  const [activeKey, setActiveKey] = useState("1");
  const tabs = [
    {
      key: "1",
      label: "דף הבית",
      children: <Home />,
      icon: (
        <InlineSVG
          src={homeSVG}
          width={20}
          style={activeKey === "1" ? { stroke: "#1677ff" } : {}}
        />
      ),
    },
    {
      key: "2",
      label: "פרופיל",
      children: <Profile />,
      icon: (
        <InlineSVG
          src={profileSVG}
          width={20}
          style={activeKey === "2" ? { stroke: "#1677ff" } : {}}
        />
      ),
    },
    {
      key: "3",
      label: "תיק רפואי",
      children: <Medical />,
      icon: (
        <InlineSVG
          src={medicalSVG}
          width={20}
          style={activeKey === "3" ? { stroke: "#1677ff" } : {}}
        />
      ),
    },
    {
      key: "4",
      label: "מסמכים",
      children: <Documents />,
      icon: (
        <InlineSVG
          src={attachSVG}
          width={20}
          style={activeKey === "4" ? { stroke: "#1677ff" } : {}}
        />
      ),
    },
    {
      key: "5",
      label: "אירועים",
      children: <Events />,
      icon: (
        <InlineSVG
          src={eventsSVG}
          width={20}
          style={activeKey === "5" ? { stroke: "#1677ff" } : {}}
        />
      ),
    },
    {
      key: "6",
      label: "יומן פגישות",
      children: <DailyPlanner />,
      icon: (
        <InlineSVG
          src={planSVG}
          width={20}
          style={activeKey === "6" ? { stroke: "#1677ff" } : {}}
        />
      ),
    },
    {
      key: "7",
      label: "משימות",
      children: <Tasks />,
      icon: (
        <InlineSVG
          src={taskSVG}
          width={20}
          style={activeKey === "7" ? { stroke: "#1677ff" } : {}}
        />
      ),
    },
    {
      key: "8",
      label: "לימודים",
      children: <Studies />,
      icon: (
        <InlineSVG
          src={studySVG}
          width={20}
          style={activeKey === "8" ? { stroke: "#1677ff" } : {}}
        />
      ),
    },
    {
      key: "9",
      label: "תעסוקה",
      children: <Employment />,
      icon: (
        <InlineSVG
          src={jobSVG}
          width={20}
          style={activeKey === "9" ? { stroke: "#1677ff" } : {}}
        />
      ),
    },
    {
      key: "10",
      label: "שאלונים",
      children: <Questionnaires />,
      icon: (
        <InlineSVG
          src={questionSVG}
          width={20}
          style={activeKey === "10" ? { stroke: "#1677ff" } : {}}
        />
      ),
    },
  ];

  const direction = useSelector((state) => state.app.direction);
  return (
    <ConfigProvider direction={direction}>
      <Tabs
        className="recipient"
        defaultActiveKey="1"
        activeKey={activeKey}
        onTabClick={(data) => setActiveKey(data)}
        items={tabs}
        tabBarStyle={{
          backgroundColor: "white",
          height: "64px",
          overflow: "auto",
          paddingRight: direction === "rtl" ? "20px" : "",
          paddingLeft: direction === "ltr" ? "20px" : "",
        }}
      />
    </ConfigProvider>
  );
};

export default Recipient;
