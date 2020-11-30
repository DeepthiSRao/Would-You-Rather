import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { formatPoll } from '../utils/helper';

const Poll = (props) => {
	const { poll, user } = props;

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
					<Link to={`/poll-result/${poll.id}`}>
						<button
							type="button"
							className="poll-btn">
								View Poll
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ users, questionList, authedUser }, { id}) => {
	const poll = questionList[id];
	const user = users[poll.author];

	return {
		poll: poll ? formatPoll(poll, user, authedUser): null,
		user,
	}
}

export default withRouter(connect(mapStateToProps)(Poll));