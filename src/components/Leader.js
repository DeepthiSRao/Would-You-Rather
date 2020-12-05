import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formatLeader } from '../utils/helper';

const Leader = ({ leader }) => {
    const {
        rank,
        avatarURL,
        answeredQuestions,
        createdQuestions,
        badgeColor,
        name
    } = leader;
    const score = answeredQuestions + createdQuestions;

    return (
        <div className="leader-card">
            <div className="avatar-rank">
                <div className="rank" style={{ color: badgeColor }}><span>{rank}</span></div>
                <img
                    src={avatarURL}
                    alt="no-avatar"
                    className="leader-image" />
            </div>
            <div className="leader-details">
                <h2>{name}</h2>
                <p>Answered questions <span>{answeredQuestions}</span></p>
                <hr />
                <p>Created questions <span>{createdQuestions}</span></p>
            </div>
            <div className="leader-score">
                <div className="title">Score</div>
                <div className="score"><p>{score}</p></div>
            </div>
        </div>
    );
}   

Leader.propTypes = {
    leader : PropTypes.object.isRequired
}

const mapStateToProps = ({ authedUser, users }, { id, index }) => {
    const leader = users[id];
    
    return {
        leader: leader ?
            formatLeader(leader, index, authedUser)
            : null
    }
}

export default connect(mapStateToProps)(Leader);