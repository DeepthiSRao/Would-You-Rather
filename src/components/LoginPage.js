import React from "react";
import PropTypes from 'prop-types';
import logo from "../image/logo.jpeg";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

const LoginPage = ({ userList, dispatch }) => {
  const [userId, setUserId] = React.useState("");

  const handleChange = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser(userId));
  };

  return (
    <div className="card">
      <div className="title">
        <h2>Welcome to the Would You Rather App!</h2>
        <p>Please sign in to continue</p>
      </div>
      <img src={logo} alt="logo" className="login-logo" />
      <div className="login-footer">
        <p className="login-footer-title">Sign in</p>
        <select onClick={handleChange}>
          <option value="" disabled="" hidden>
            Select User
          </option>
          {Object.values(userList).map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={userId ? false : true}
          className="login-btn"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  userList: PropTypes.object.isRequired,
};

const mapStateToProps = ({ users }) => ({
  userList: users,
});

export default connect(mapStateToProps)(LoginPage);
