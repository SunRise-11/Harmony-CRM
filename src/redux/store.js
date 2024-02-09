import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import persistedReducer from './rootReducer';

export const store = configureStore(
  persistedReducer,
);

export const persistStoreData = persistStore(store);