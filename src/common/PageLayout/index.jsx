import React, { useState } from "react";
import { Layout } from "antd";
import { useSelector } from "react-redux";

import Header from "./Header";
import SideBar from "./SideBar";
import ChatGPT from "./ChatGPT";
import { ColorConstants } from "../../constants";

const { Sider, Content } = Layout;

const PageLayout = (props) => {
  const { children } = props;

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
