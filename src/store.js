// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice'; // Assuming you have a counterSlice

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add your reducers here
  },
});

export default store;