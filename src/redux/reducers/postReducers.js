import { TAKE_POST, TAKE_MY_POST } from "../action";

const postState = {
  allposts: [],
  post: [],
};

const postReducers = (state = postState, action) => {
  switch (action.type) {
    case TAKE_POST:
      return {
        ...state,
        allposts: action.payload,
      };
    case TAKE_MY_POST:
      return {
        ...state,
        post: action.payload,
      };

    default:
      return state;
  }
};

export default postReducers;
