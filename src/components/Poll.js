import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { formatPoll } from '../utils/helper';
import NotFound from './NotFound';

const Poll = (props) => {
	const { poll, answered } = props;
	const btnText = answered ? "View Result" : "View Poll";

	if (poll === null)
		return (<NotFound />);
	
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
					<Link to={`/questions/${poll.id}`}>
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

Poll.prototype = {
	users: PropTypes.object.isRequired,
	questionList: PropTypes.object.isRequired,
	authedUser: PropTypes.string.isRequired,
};

const mapStateToProps = ({ users, questionList, authedUser }, { id }) => {
	const poll = questionList[id];

	return {
		poll: poll ? formatPoll(poll, users[poll.author], authedUser): null,
	}
}

export default withRouter(connect(mapStateToProps)(Poll));