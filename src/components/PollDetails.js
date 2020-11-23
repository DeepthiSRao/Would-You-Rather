import React from 'react';

const PollDetails = () => {
	return (
		<div className="card">
			<div className="title">
				<h3>Added by user name</h3>
			</div>
			<div className="response-content">
				<img
					src="https://tylermcginnis.com/would-you-rather/sarah.jpg"
					alt="no-avatar"
					className="response-img" />
				<hr />
				<div className="response-poll">
					<label className="checkbox-label"><h3>Would You Rather...</h3></label>
					<button
						type="button"
						className="login-btn">
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default PollDetails;