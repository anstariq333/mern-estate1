import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js'; // Assuming useReducer was a typo and it should be userReducer
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({ user: userReducer }); // Assuming useReducer was a typo and it should be userReducer

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // Changed the local variable name to persistedReducer

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
