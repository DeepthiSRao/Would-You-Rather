import React from 'react';
import { connect } from 'react-redux';

const LeaderBoard = () => {
    return (
		<div className="card poll-item">
			Leader Board
        </div>
    );
}

export default connect()(LeaderBoard);