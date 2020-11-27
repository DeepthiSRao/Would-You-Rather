import { receiveUsers } from './users';
import { showLoading, hideLoading } from 'react-redux-loading';
import { getInitialData } from '../utils/api';
import { receivePolls } from './polls';

export function fetchInitialData() {
	return (dispatch) => {
		dispatch(showLoading());

		return getInitialData()
			.then(({ users, questions }) => {
				dispatch(receiveUsers(users));
				dispatch(receivePolls(questions));
				dispatch(hideLoading());
			})
	}
}
