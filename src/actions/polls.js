import { showLoading, hideLoading } from 'react-redux-loading';
import { savePoll, saveQuestionAnswer } from '../utils/api';
import { savePollToUser, saveAnswerToUser } from './users';
import {
    ADD_POLL,
    RECEIVE_POLLS,
    SAVE_ANSWER_TO_POLL
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

export function saveAnswerToPoll(authedUser, qid, answer) {
    return {
        type: SAVE_ANSWER_TO_POLL,
        authedUser,
        qid,
        answer
    }
}

export function handleSaveAnswer(authedUser, qid, answer) {
    return (dispatch) => {
        dispatch(showLoading);

        return saveQuestionAnswer(authedUser, qid, answer)
            .then(() => {
                dispatch(saveAnswerToUser(authedUser, qid, answer));
                dispatch(saveAnswerToPoll(authedUser, qid, answer));
                hideLoading();
            }).catch(e => {
                console.warn('Error while saving answer to a poll:', e);
            });
    }
}