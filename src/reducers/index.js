import { combineReducers } from 'redux';
import { usersReducer } from './users';
import { authedUserReducer } from './authedUser';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
	users: usersReducer,
	authedUser: authedUserReducer,
	loadingBar: loadingBarReducer
});
