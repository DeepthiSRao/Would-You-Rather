import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className="card">
            <h2 id="err-msg">404 Error</h2>
            <h3>Either there was a network issue or URL does not exists.<br/>
                Please try later!!!!!!</h3>   
            <div className="login-footer">
                 <Link to="/">
                     <button
                         type="button"
                         className="login-btn">
                         Home
                     </button>
                </Link>
            </div>       
        </div>
    );
}
 
export default Error404;