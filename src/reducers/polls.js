import {
    RECEIVE_POLLS,
    ADD_POLL,
    SAVE_ANSWER_TO_POLL
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
        case SAVE_ANSWER_TO_POLL: {
            const { authedUser, qid, answer } = action;

            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat(authedUser)
                    }
                }
            }
        }
        default:
            return state;
    }
}