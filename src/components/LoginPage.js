import React from 'react';
import logo from "../image/logo.jpeg";
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

const LoginPage = ({userList, dispatch}) => {
    const [userId, setUserId] = React.useState("");
    const history = useHistory();

    const handleChange = e => {
        setUserId(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(setAuthedUser(userId));
        history.push('/dashboard');
    }

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
                    <option value="" disabled="" hidden>Select User</option>
                    {Object.values(userList).map((user) => (
                        <option
                            key={user.id}
                            value={user.id}>
                            {user.name}
                        </option>
                        ))}
                    </select>
                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={ userId ? false : true}
                    className="login-btn">
                    Sign In
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = ({ users }) => ({
    userList: users,
});

export default connect(mapStateToProps)(LoginPage);
