import { TAKE_POST } from "../action";

const postState = {
  allposts: [],
};

const postReducers = (state = postState, action) => {
  switch (action.type) {
    case TAKE_POST:
      return {
        ...state,
        allposts: action.payload,
      };

    default:
      return state;
  }
};

export default postReducers;
