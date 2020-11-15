import React from 'react';
import logo from "../image/logo.jpeg";

const LoginPage = () => {
    return (
       <div className="login-card">
                <div className="title">
                    <h3>Welcome to the Would You Rather App!</h3>
                    <p>Please sign in to continue</p>
                </div>
                <img src={logo} alt="logo" className="login-logo" />
                <div className="login-footer">
                    <p className="login-footer-title">Sign in</p>
                    <select>
                        <option>Select User</option>
                    </select>
                    <button type="button" className="login-btn">Sign In</button>
                </div>
        </div>
    );
}

export default LoginPage;
