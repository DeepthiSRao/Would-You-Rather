import {
	RECEIVE_USERS,
	ADD_POLL_TO_USER
} from '../utils/constants.js';

export function receiveUsers(users) {
	return {
		type: RECEIVE_USERS,
		users
	};
}

export function savePollToUser({ id, author }) {
	return {
		type: ADD_POLL_TO_USER ,
		id,
		author
	}
}