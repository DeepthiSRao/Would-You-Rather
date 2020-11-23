import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutAuthedUser } from '../actions/authedUser';

const NavBar = (props) => {
	const { isLoggedIn, user, dispatch, history } = props;

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(logoutAuthedUser(user));
		history.push('/');
	}

	return (
		<nav className="navbar">
			<div className="nav-links left">
				<Link to="/" className="nav-item active">Home</Link>
				<Link to="/response-page" className="nav-item">New Question</Link>
				<Link to="/poll-details" className="nav-item">Leader Board</Link>
			</div>
			{
				isLoggedIn &&
				<div className="nav-links right">
					<div className="user-nav">
						Hello, { user.name }
						<img
							src={user.avatarURL}
							alt="Avatar"
							className="avatar" />
					</div>
					<Link to="/logout"
						onClick={ handleLogout }
						className="nav-item">
						Logout
					</Link>
				</div>
			}			
		</nav>
	);
}

const mapStateToProps = ({ authedUser, users }) => {
	return {
		isLoggedIn: authedUser !== null,
		user: users[authedUser],
	}
};

export default withRouter(connect(mapStateToProps)(NavBar));