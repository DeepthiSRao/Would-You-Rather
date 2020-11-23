import { RECEIVE_USERS } from "../utils/constants";

export const usersReducer = (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_USERS:
			console.log(action.users);

			return {
				...state,
				...action.users
			};
		default:
			return state;
	}
}