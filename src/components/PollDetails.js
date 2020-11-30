import React from 'react';
import { connect } from 'react-redux';
import { formatPoll } from '../utils/helper';

const PollDetails = (props) => {
	const { user, poll } = props;

    return (
        <div className="card poll-item">
			<div className="title">
				<h4>Asked by {user.name}</h4>
			</div>
			<div className="poll-container">
				<img
					src={user.avatarURL}
					alt="no-avatar"
					className="user-img" />
				<div className="response-poll">
					<h4>Results</h4>
					<div className="question-card">
						<p>{poll.optionOne.text}{ poll.hasVoted1 && <span>Voted</span>}</p>
					</div>
					<div className="question-card">
	  					<p>{poll.optionTwo.text}</p>
					</div>					
				</div>
			</div>
		</div>
    );
}

const mapStateToProps = ({ users, questionList, authedUser }, ownProps) => {
	const { id } = ownProps.match.params; 
	const poll = questionList[id];
	console.log(poll, id);
	const user = users[poll.author];

	return {
		poll: poll ? formatPoll(poll, user, authedUser): null,
		user,
	}
}

export default connect(mapStateToProps)(PollDetails);