import React from 'react';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';

import { Layout } from "antd";
const { Sider, Content } = Layout;

import Header from "./header/Header";
import SideBar from "./sideBar/SideBar";
import ChatGPT from "./chatGPT/ChatGPT";

const PageLayout = props => {
  const { children } = props;

  // // Redirect to login page if not logged in.
  // const loggedUserDetails = useSelector(({ loggedUserProfile }) => loggedUserProfile);
// if (!loggedUserDetails?.email) {
  //   return children;
  // }

  return (
    <div className="layout-container" style={{ direction: "RTL" }}>
      <Layout>
        <Sider theme="light" width={240}>
          <SideBar />
        </Sider>

        <Layout>
          <Header />
          <Content>
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
