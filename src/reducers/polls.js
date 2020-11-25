import { RECEIVE_POLLS } from "../utils/constants";

export const pollsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_POLLS:
            return {
                ...state,
                ...action.questionList
            }
        default:
            return state;
    }
}