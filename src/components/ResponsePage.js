import React from 'react';

const ResponsePage = () => {
	return (
		<div className="card">
			<div className="title">
				<h3>User Name asks: </h3>
			</div>
			<div className="response-content">
				<div className="img">
					<img
						src="https://tylermcginnis.com/would-you-rather/sarah.jpg"
						alt="no-avatar"
						className="response-img" />
				</div>
				<div className="response-poll">
					<label className="checkbox-label"><h3>Would You Rather...</h3></label>
					<p>Hello</p>
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

export default ResponsePage;