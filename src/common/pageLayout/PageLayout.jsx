import React, { useState } from "react";
import PropTypes from "prop-types";
// import { useSelector } from 'react-redux';

import { Layout } from "antd";
const { Sider, Content } = Layout;

import Header from "./header/Header";
import SideBar from "./sideBar/SideBar";
import ChatGPT from "./chatGPT/ChatGPT";

const PageLayout = (props) => {
  const { children } = props;

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="layout-container" style={{ direction: "RTL" }}>
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
            }}
          >
            {children}
            <ChatGPT />
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
