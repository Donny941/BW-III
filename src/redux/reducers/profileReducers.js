import { TAKE_PROFILE } from "../action";

const profileState = {
  currentprofile: null,
};

const profileReducers = (state = profileState, action) => {
  switch (action.type) {
    case TAKE_PROFILE:
      return {
        ...state,
        currentprofile: action.payload,
      };

    default:
      return state;
  }
};

export default profileReducers;
