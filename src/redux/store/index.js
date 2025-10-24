import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducers from "../reducers/profileReducers";
import allProfilesReducers from "../reducers/allProfileReducers";
import experiencesReducers from "../reducers/experiencesReducers";
import postReducers from "../reducers/postReducers";
import allCommentReducers from "../reducers/allCommentsReducers";

const rootReducer = combineReducers({
  profile: profileReducers,
  allprofiles: allProfilesReducers,
  experiences: experiencesReducers,
  posts: postReducers,
  comments: allCommentReducers,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
