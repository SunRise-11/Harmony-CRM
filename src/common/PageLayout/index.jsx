import React, { useState } from "react";
import { Layout } from "antd";
import { useSelector } from "react-redux";

import Header from "./Header";
import SideBar from "./SideBar";
import ChatGPT from "./ChatGPT";
import { ColorConstants } from "../../constants";
import useViewportWidth from "../../hooks/useViewportWidth";

const { Sider, Content } = Layout;

const PageLayout = (props) => {
  const { children } = props;
  const viewPortWidth = useViewportWidth();

  const [collapsed, setCollapsed] = useState(false);
  const theme = useSelector((state) => state.app.theme);
  const direction = useSelector((state) => state.app.direction);

  return (
    <div
      className={
        "layout-container theme-" +
        theme +
        (direction === "ltr" ? " direction-ltr" : "")
      }
      id="layout-container"
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
          style={{ zIndex: 10, position: (viewPortWidth > 600) ? 'relative' : 'fixed' }}
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
              overflow: "auto",
              padding: "0px",
              position: "relative",
              minHeight: '100vh',
              backgroundColor: ColorConstants.LAYOUT_BACKGROUND_COLORS[theme],
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

export default PageLayout;
