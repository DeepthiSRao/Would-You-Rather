import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="card">
            <h2 id="err-msg">404 Error</h2>
            <h3>Wrong URL or requested resource does not exists!!!!!!</h3>   
            <div className="login-footer">
                 <Link to="/">
                     <button
                         type="button"
                         className="login-btn">
                         Go Back To Home
                     </button>
                </Link>
            </div>       
        </div>
    );
}
 
export default NotFound;