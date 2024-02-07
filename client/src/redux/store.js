import { configureStore, Tuple } from '@reduxjs/toolkit'
import { useReducer } from './user/userSlice.js';

configureStore({
  reducer: {user: useReducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware ({
    serializableCheck: false,
}),
})