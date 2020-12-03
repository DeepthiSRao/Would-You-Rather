import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import LoginPage from "./LoginPage";
import NavBar from "./NavBar";
import PollResult from "./PollReslt";
import CreateQuestion from "./CreateQuestion";
import LeaderBoard from "./LeaderBoard";
import { fetchInitialData } from "../actions/shared";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchInitialData());
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div className="container">
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
            <PrivateRoute path="/poll-response/:id" component={PollResult} />
            <PrivateRoute path="/new-poll" component={CreateQuestion} />
            <PrivateRoute path="/leader-board" component={LeaderBoard} />
            <Route component={LoginPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, polls }) => {
  return {
    isLoggedIn: authedUser !== null,
  };
};

export default connect(mapStateToProps)(App);
