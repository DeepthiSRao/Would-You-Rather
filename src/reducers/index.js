import { combineReducers } from 'redux';
import { usersReducer } from './users';
import { authedUserReducer } from './authedUser';
import { loadingBarReducer } from 'react-redux-loading';
import { pollsReducer } from './polls';

export default combineReducers({
	users: usersReducer,
	authedUser: authedUserReducer,
	questionList: pollsReducer,
	loadingBar: loadingBarReducer
});
