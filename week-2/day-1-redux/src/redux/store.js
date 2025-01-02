import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./features/counter/counterSlice.js"

// Automatically adds the thunk middleware and the Redux DevTools extension
export const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    counterReducer
  },
})