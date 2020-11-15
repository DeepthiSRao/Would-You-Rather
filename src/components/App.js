import React from 'react';
import LoginPage from './LoginPage';
import '../App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import ScoreCard from './ScoreCard';

const App = () => {
	return (
		<div className="container">
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route exact path="/" component={LoginPage} />
					<Route path="/test-page" component={ScoreCard} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;