import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: rootReducer,
  // Add any middleware or enhancers here
});

export default store;
