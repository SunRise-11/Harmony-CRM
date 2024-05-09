import React, { useState } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Header";
import SideBar from "./SideBar";
import ChatGPT from "./ChatGPT";
import { ColorConstants } from "../../constants";
import useViewportWidth from "../../hooks/useViewportWidth";

import { setToggleCollapsed } from "../../redux/store";

const { Sider, Content } = Layout;

const PageLayout = (props) => {
  const dispatch = useDispatch();

  const { children } = props;
  const viewPortWidth = useViewportWidth();

  const toggleCollapsed = useSelector(state => state.app.toggleCollapsed);
  const [collapsed, setCollapsed] = useState(toggleCollapsed);
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
          collapsed={toggleCollapsed}
          // onCollapse={() => setCollapsed(!collapsed)}
          onCollapse={() => dispatch(setToggleCollapsed(!toggleCollapsed))}
          style={{
            zIndex: 10,
          }}
        >
          <SideBar
            setCollapsed={() => dispatch(setToggleCollapsed(!toggleCollapsed))}
            collapsed={toggleCollapsed}
          />
        </Sider>
        <Layout>
          <Header
            collapsed={toggleCollapsed}
            setCollapsed={() => dispatch(setToggleCollapsed(!toggleCollapsed))}
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
