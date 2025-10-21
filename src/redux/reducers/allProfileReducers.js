import { TAKE_ALL_PROFILES } from "../action";

const profilesState = {
  profiles: [],
};

const allProfilesReducers = (state = profilesState, action) => {
  switch (action.type) {
    case TAKE_ALL_PROFILES:
      return {
        ...state,
        profiles: action.payload,
      };

    default:
      return state;
  }
};

export default allProfilesReducers;
