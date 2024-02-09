import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore } from 'redux-persist';

import persistedReducer from './rootReducer';

export const store = configureStore(
  persistedReducer,
  applyMiddleware(thunkMiddleware)
);

export const persistStoreData = persistStore(store);