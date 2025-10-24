import { TAKE_COMMENTS } from "../action";

const commentsState = {
  comments: [],
};

const allCommentReducers = (state = commentsState, action) => {
  switch (action.type) {
    case TAKE_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
};

export default allCommentReducers;
