import React, { useState } from "react";
import { ConfigProvider, Tabs } from "antd";
import { useSelector } from "react-redux";
import InlineSVG from "react-inlinesvg";

import homeIcon from "../../../assets/icons/master/home.svg";
import passportIcon from "../../../assets/icons/master/passport.svg";
import medicalIcon from "../../../assets/icons/master/medical.svg";
import attachmentIcon from "../../../assets/icons/master/attachment.svg";
import dateIcon from "../../../assets/icons/master/date.svg";
import calendarIcon from "../../../assets/icons/master/calendar.svg";
import clipboardCheckIcon from "../../../assets/icons/master/clipboard-check.svg";
import educationIcon from "../../../assets/icons/master/education.svg";
import bagIcon from "../../../assets/icons/master/bag.svg";
import fileIcon from "../../../assets/icons/master/file.svg";

import Home from "../../../components/Recipient/Home";
import Profile from "../../../components/Recipient/Profile";
import Medical from "../../../components/Recipient/Medical";
import Documents from "../../../components/Recipient/Documents";
import Events from "../../../components/Recipient/Events";
import DailyPlanner from "../../../components/Recipient/DailyPlanner";
import Tasks from "../../../components/Recipient/Tasks";
import Studies from "../../../components/Recipient/Studies";
import Employment from "../../../components/Recipient/Employment";
import Questionnaires from "../../../components/Recipient/Questionnaire";

const Recipient = () => {
  const [activeKey, setActiveKey] = useState("1");
  const tabs = [
    {
      key: "1",
      label: "דף הבית",
      children: <Home />,
      icon: (
        <InlineSVG
          src={homeIcon}
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
          src={passportIcon}
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
          src={medicalIcon}
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
          src={attachmentIcon}
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
          src={dateIcon}
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
          src={calendarIcon}
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
          src={clipboardCheckIcon}
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
          src={educationIcon}
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
          src={bagIcon}
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
          src={fileIcon}
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
