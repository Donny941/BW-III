import { TAKE_EXPERIENCES, POST_EXPERIENCES } from "../action";

const experienceState = {
    allexperiences: []
}

const experiencesReducers = (state = experienceState, action) => {
    switch (action.type) {
        case TAKE_EXPERIENCES:

            return {
                ...state,
                allexperiences: action.payload
            };


        default:
            return state;
    }
}

export default experiencesReducers;