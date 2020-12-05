import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import LoginPage from "./LoginPage";
import NavBar from "./NavBar";
import PollResult from "./PollResult";
import CreateQuestion from "./CreateQuestion";
import LeaderBoard from "./LeaderBoard";
import { fetchInitialData } from "../actions/shared";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";
import LoadingBar from 'react-redux-loading';
import NotFound from "./NotFound";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchInitialData());
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div className="container">
        <LoadingBar style={{ backgroundColor: 'blue', height: '5px' }} />
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) =>
                isLoggedIn ? <Dashboard {...props} /> : <LoginPage />
              }
            />
            <PrivateRoute path="/questions/:id" component={PollResult} />
            <PrivateRoute path="/add" component={CreateQuestion} />
            <PrivateRoute path="/leaderboard" component={LeaderBoard} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    isLoggedIn: authedUser !== null,
  };
};

export default connect(mapStateToProps)(App);
