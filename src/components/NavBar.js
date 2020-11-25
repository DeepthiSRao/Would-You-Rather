import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutAuthedUser } from "../actions/authedUser";

const NavBar = (props) => {
  const { isLoggedIn, user, dispatch } = props;

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutAuthedUser(user));
  };

  return (
    <nav className="navbar">
      <div className="nav-links left">
        <NavLink to="/" exact activeClassName="active" className="nav-item">
          Home
        </NavLink>
        <NavLink
          to="/response-page"
          activeClassName="active"
          className="nav-item"
        >
          New Question
        </NavLink>
        <NavLink
          to="/poll-details"
          activeClassName="active"
          className="nav-item"
        >
          Leader Board
        </NavLink>
      </div>
      {isLoggedIn && (
        <div className="nav-links right">
          <div className="user-nav">
            <span>Hello, {user.name}</span>
            <img src={user.avatarURL} alt="Avatar" className="avatar" />
          </div>
          <NavLink to="/logout" onClick={handleLogout} className="nav-item">
            Logout
          </NavLink>
        </div>
      )}
    </nav>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    isLoggedIn: authedUser !== null,
    user: users[authedUser],
  };
};

export default connect(mapStateToProps)(NavBar);
