import {
    RECEIVE_POLLS,
    ADD_POLL
} from "../utils/constants";

export const pollsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_POLLS:
            return {
                ...state,
                ...action.questionList
            }
        case ADD_POLL:            
            return {
                ...state,
                [action.poll.id]: {
                    ...action.poll
                }              
            }
        default:
            return state;
    }
}