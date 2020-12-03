import React from 'react';
import { connect } from 'react-redux';
import Leader from './Leader';

const LeaderBoard = ({ leaderId }) => {
    return (
		<div>
            {
                leaderId.map((id, index) => <Leader key={id}  id={id} index={index+1} />)
            }
        </div>
    );
}

const mapStateToProps = ({ users }) => {
    return {
        leaderId: Object.keys(users)
            .sort((a, b) => ((Object.keys(users[b].answers).length + Object.keys(users[b].questions).length) -
                             (Object.keys(users[a].answers).length + Object.keys(users[a].questions).length)))
    }
}
export default connect(mapStateToProps)(LeaderBoard);