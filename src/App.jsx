import React, { useEffect, useState, useRef } from "react";
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

  // const [menuVisible, setMenuVisible] = useState(false);
  // const textboxRef = useRef(null);

  // const loseFocus = () => {
  //   if (textboxRef.current) {
  //     textboxRef.current.blur();
  //   }
  //   setMenuVisible(!menuVisible);
  // };

  // return (
  //   <div>
  //     <div id="menuBar">
  //       <div id="showMenu" onClick={loseFocus}>
  //         ☰
  //       </div>
  //       {
  //         <div id="menu">
  //           <ul>
  //             <li>Menu Option 1</li>
  //             <li>Menu Option 2</li>
  //             <li>Menu Option 3</li>
  //           </ul>
  //         </div>
  //       }
  //     </div>
  //     <div id="content">
  //       <label htmlFor="textbox">Text:</label>
  //       <input id="textbox" type="text" ref={textboxRef} />
  //     </div>
  //   </div>
  // );
};

export default App;
