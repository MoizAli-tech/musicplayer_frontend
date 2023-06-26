import { configureStore } from '@reduxjs/toolkit';

import musicPlayerApiReducer from "./services/musicPlayerApi"
import playerReducer from "./services/playerSlice"

export const store = configureStore({
  reducer: {
    musicPlayerApi:musicPlayerApiReducer,
    player:playerReducer
   
  },
});
