import {
	RECEIVE_USERS,
	ADD_POLL_TO_USER
} from "../utils/constants";

export const usersReducer = (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users
			};
		case ADD_POLL_TO_USER:
			const { author, id } = action;
			return {
				...state,
				[author]: {
					...state[author],
					questions: [
						...state[author].questions,
						id
					]
				}
			}
		default:
			return state;
	}
}