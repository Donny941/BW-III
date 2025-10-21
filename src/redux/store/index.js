import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducers from "../reducers/profileReducers";
import allProfilesReducers from "../reducers/allProfileReducers";
import experiencesReducers from "../reducers/experiencesReducers";

const rootReducer = combineReducers({
  profile: profileReducers,
  allprofiles: allProfilesReducers,
  experiences: experiencesReducers
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
