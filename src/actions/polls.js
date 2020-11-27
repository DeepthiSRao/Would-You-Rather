import { showLoading, hideLoading } from 'react-redux-loading';
import { savePoll } from '../utils/api';
import { savePollToUser } from './users';
import {
    ADD_POLL,
    RECEIVE_POLLS
} from "../utils/constants";

export function receivePolls(questionList) {
    return {
        type: RECEIVE_POLLS,
        questionList
    }
}

export function addPoll(poll) {
    return {
        type: ADD_POLL,
        poll
    }
}

export function handleAddPoll(optionOne, optionTwo) {
    return (dispatch, getState) => {
        dispatch(showLoading());
        const { authedUser } = getState();

        return savePoll({
            optionOneText : optionOne,
            optionTwoText : optionTwo,
            author : authedUser
        }).then((poll) => {
            dispatch(addPoll(poll));
            dispatch(savePollToUser(poll));
	    	dispatch(hideLoading());
	    })
    }
}