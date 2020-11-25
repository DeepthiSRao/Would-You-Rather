import React from 'react';
import { connect } from 'react-redux';

const Poll = ({poll, user}) => {
	return (
		<div className="card poll-item">
			<div className="title poll-tittle">
				<h4>{user.name} asks:</h4>
			</div>
			<div className="poll-container">
				<img
					src={user.avatarURL}
					alt="no-avatar"
					className="user-img" />
				<div className="response-poll">
					<h4>Would You Rather...</h4>
					<p className="poll-text">{poll.optionOne.text}</p>
					<button
						type="button"
						className="poll-btn">
						View Poll
					</button>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ users, questionList }, { id }) => {
	const poll = questionList[id];
	const user = users[poll.author];

	return {
		poll,
		user,
	}
}

export default connect(mapStateToProps)(Poll);
