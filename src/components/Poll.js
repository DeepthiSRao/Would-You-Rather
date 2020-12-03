import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { formatPoll } from '../utils/helper';

const Poll = (props) => {
	const { poll, answered } = props;
	const btnText = answered ? "View Result" : "View Poll";

	if (poll === null)
		return (<div>No poll exists!!!!!</div>);
	
	return (
		<div className="card poll-item">
			<div className="title poll-tittle">
				<h4>{poll.name} asks:</h4>
			</div>
			<div className="poll-container">
				<img
					src={poll.avatarURL}
					alt="no-avatar"
					className="user-img" />
				<div className="response-poll">
					<h4>Would You Rather...</h4>
					<p className="poll-text">{poll.optionOne.text}</p>
					<Link to={`/poll-response/${poll.id}`}>
						<button
							type="button"
							className="poll-btn">
								{btnText}
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ users, questionList, authedUser }, { id }) => {
	const poll = questionList[id];

	return {
		poll: poll ? formatPoll(poll, users[poll.author], authedUser): null,
	}
}

export default withRouter(connect(mapStateToProps)(Poll));