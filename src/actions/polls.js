import { RECEIVE_POLLS } from "../utils/constants";

export function receivePolls(questionList) {
    return {
        type: RECEIVE_POLLS,
        questionList
    }
}