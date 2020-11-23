import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import NavBar from './NavBar';
import ScoreCard from './ScoreCard';
import ResponsePage from './ResponsePage';
import PollDetails from './PollDetails';
import { fetchInitialData } from '../actions/shared';

class App extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchInitialData());
	}

	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<NavBar />
					<Switch>
						<Route exact path="/" component={LoginPage} />
						<Route path="/dashboard" component={ScoreCard} />
						<Route path="/response-page" component={ResponsePage} />
						<Route path="/poll-details" component={PollDetails} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

const mapStateToProps = ({ authedUser }) => {
	return {
		isLoggedIn: authedUser !== null,
	}
};

export default connect(mapStateToProps)(App);