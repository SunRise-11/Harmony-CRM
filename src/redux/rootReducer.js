import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const appReducer = combineReducers({
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;