import { TAKE_PROFILE, TAKE_MY_PROFILE } from "../action";

const profileState = {
  currentprofile: null,
  myprofile: null,
};

const profileReducers = (state = profileState, action) => {
  switch (action.type) {
    case TAKE_PROFILE:
      return {
        ...state,
        currentprofile: action.payload,
      };
    case TAKE_MY_PROFILE:
      return {
        ...state,
        myprofile: action.payload,
      };

    default:
      return state;
  }
};

export default profileReducers;
