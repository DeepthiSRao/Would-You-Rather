import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formatPoll } from '../utils/helper';
import ResponsdPoll from './RespondPoll';

const PollResult = ({poll}) => {
	const { hasVoted1, hasVoted2, optionOne, optionTwo, id, percentVotes1, percentVotes2, avatarURL, name } = poll;
	const total = optionOne.votes.length + optionTwo.votes.length;

	const pollCard = ({ votes, text }, percentage, hasVoted) => {
		const progressWidth = Math.max(12, percentage) + "%";

		return (
			<div className={`question-card ${hasVoted ? "voted" : ""} `}>
				<p className="voted-title">Would you rather be a {text}?</p>
				<div className="progress-container">
					<div className="progress-item" style={{ width: progressWidth }}>{percentage}%</div>
				</div>
				<p style={{textAlign : 'center'}}><span>{`${votes.length} out of ${total} ${votes.length >= 1 ? "votes" : "vote"}`}</span></p>
				{hasVoted && <div className="badge-container">
					<span className="badge">Your Vote</span>
				</div>}
			</div>
		);
	}

	if (!hasVoted1 && !hasVoted2) {
		return <ResponsdPoll id={id}/>
	}
    return (
        <div className="card poll-item">
			<div className="title">
				<h4>Asked by {name}</h4>
			</div>
			<div className="poll-container">
				<img
					src={avatarURL}
					alt="no-avatar"
					className="user-img poll-result-img" />
				<div className="response-poll">
					<h2>Results:</h2>
					{pollCard(optionOne, percentVotes1, hasVoted1)}
					{pollCard(optionTwo, percentVotes2, hasVoted2)}
				</div>
			</div>
		</div>
    );
}

PollResult.prototype = {
	users: PropTypes.object.isRequired,
	questionList: PropTypes.object.isRequired,
	authedUser: PropTypes.string.isRequired,
};

const mapStateToProps = ({ users, questionList, authedUser }, ownProps) => {
	const { id } = ownProps.match.params; 
	const poll = questionList[id];
	const user = users[poll.author];

	return {
		poll: poll ? formatPoll(poll, user, authedUser): null,
		user,
	}
}

export default connect(mapStateToProps)(PollResult);