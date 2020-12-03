import React from 'react';
import { connect } from 'react-redux';
import { formatLeader } from '../utils/helper';

class Leader extends React.Component {
    render() { 
        const {
            rank,
            avatarURL,
            answeredQuestions,
            createdQuestions,
            badgeColor,    
            name
        } = this.props.leader;
        const score = answeredQuestions + createdQuestions;

        return ( 
            <div className="leader-card">
                <div className="avatar-rank">
                    <div className="rank" style={{color:badgeColor}}><span>{rank}</span></div>
                    <img
 	                    src={avatarURL}
 	                    alt="no-avatar"
                        className="leader-image" />
                </div>
                <div className="leader-details">
                    <h2>{name}</h2>
                    <p>Answered questions <span>{answeredQuestions}</span></p>
                    <p>Created questions <span>{createdQuestions}</span></p>
                </div>
                <div className="leader-score">
                    <div className="title">Score</div>
                    <div className="score"><p>{score}</p></div>
                </div>            
            </div>
         );
    }
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