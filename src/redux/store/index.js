import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducers from "../reducers/profileReducers";
import allProfilesReducers from "../reducers/allProfileReducers";

const rootReducer = combineReducers({
  profile: profileReducers,
  allprofiles: allProfilesReducers,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
