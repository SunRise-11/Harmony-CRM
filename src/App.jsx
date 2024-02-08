import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Grid, Layout } from "antd";
const { Sider, Content } = Layout;
import ThemeContext from "./context/ThemeContext";
import Header from "./Layout/Header";
import SideBar from "./Layout/SideBar";
import ChatGPT from "./Layout/ChatGpt";
import Page from "./route";
import "./assets/scss/App.scss";

const App = () => {
  const [theme, setTheme] = React.useState("original"); // "suggested", "monday", "dynamics"
  const [ltrRtl, setLtrRtl] = React.useState("RTL");
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, setTheme, ltrRtl, setLtrRtl }}>
        <div className="App" style={{ direction: ltrRtl }}>
          <Layout>
            <Sider theme="light" width={240}>
              <SideBar />
            </Sider>
            <Layout>
              <Header />
              <Content>
                <Page />
                <ChatGPT />
              </Content>
            </Layout>
          </Layout>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};
export default App;
