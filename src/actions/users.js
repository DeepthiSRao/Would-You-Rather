import { RECEIVE_USERS } from '../utils/constants.js';

export function receiveUsers(users) {
	return {
		type: RECEIVE_USERS,
		users
	};
}