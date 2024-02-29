import React, { useState } from "react";
import PropTypes from "prop-types";

import { Layout } from "antd";
const { Sider, Content } = Layout;

import Header from "./header/Header";
import SideBar from "./sideBar/SideBar";
import ChatGPT from "./chatGPT/ChatGPT";
import { useSelector } from "react-redux";

const PageLayout = (props) => {
  const { children } = props;

  const [collapsed, setCollapsed] = useState(false);
  const theme = useSelector((state) => state.app.theme);
  const direction = useSelector((state) => state.app.direction);
  const backgroundColors = {
    original: "#E2ECF6",
    suggested: "#F0F0F0",
    monday: "#F5F9F8",
    dynamics: "#F4F9FF",
  };
  return (
    <div
      className={
        "layout-container theme-" +
        theme +
        (direction === "ltr" ? " direction-ltr" : "")
      }
      style={{ direction }}
    >
      <Layout>
        <Sider
          theme="light"
          width={270}
          breakpoint="lg"
          collapsedWidth="0"
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
          style={{
            zIndex: 10,
          }}
        >
          <SideBar
            setCollapsed={() => setCollapsed(!collapsed)}
            collapsed={collapsed}
          />
        </Sider>
        <Layout>
          <Header
            collapsed={collapsed}
            setCollapsed={() => setCollapsed(!collapsed)}
          />
          <Content
            style={{
              height: "calc(90vh - 65px)",
              overflow: "auto",
              padding: "0px",
              position: "relative",
              backgroundColor: backgroundColors[theme],
            }}
          >
            {direction === "ltr" && <ChatGPT />}
            {children}
            {direction === "rtl" && <ChatGPT />}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
};

PageLayout.defaultProps = {
  children: null,
};

export default PageLayout;
