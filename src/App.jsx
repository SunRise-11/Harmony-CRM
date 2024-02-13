import React from "react";
import { Provider } from "react-redux";

import RoutesDefined from "./routes";
import { store } from "./redux/store";

import "./App.scss";

const App = () => {
  return (
    <Provider store={store}>
      <RoutesDefined />
    </Provider>
  );
};

export default App;
