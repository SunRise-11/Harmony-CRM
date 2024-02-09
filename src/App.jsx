import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import RoutesDefined from './routes';
import { persistStoreData, store } from './redux/store';

import "./styles.scss";
import "./App.scss";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStoreData}>
        <RoutesDefined />
      </PersistGate>
    </Provider>
  );
};

export default App;
