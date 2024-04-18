import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import { store } from "./redux/store";
import RoutesDefined from "./routes";
import "./App.scss";
import "react-big-calendar/lib/css/react-big-calendar.css";

const App = () => {
  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    const icons = ["blue", "red", "yellow", "green"];
    
    const faviconElement = document.getElementById("dynamic-favicon");
    if (faviconElement) {
        faviconElement.setAttribute("href", `icons/${icons[hours % 4]}.svg`);
    }
  }, []);

  return (
    <>
      <Helmet>
        <link
          id="dynamic-favicon"
          rel="icon"
          type="image/x-icon"
          href="icons/blue.svg"
        />
      </Helmet>
      <Provider store={store}>
        <RoutesDefined />
      </Provider>
    </>
  );
};

export default App;
