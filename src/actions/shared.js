import { receiveUsers } from './users';
import { showLoading, hideLoading } from 'react-redux-loading';
import { getInitialData } from '../utils/api';

export function fetchInitialData() {
	return (dispatch) => {
		dispatch(showLoading());

		return getInitialData()
			.then(({ users }) => {
				dispatch(receiveUsers(users));
				dispatch(hideLoading());
			})
	}
}
