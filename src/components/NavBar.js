import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../image/logo.jpeg";

const NavBar = () => {
	return (
		<nav className="navbar">
			<div className="nav-links left">
				<Link to="/" className="nav-item active">Home</Link>
				<Link to="/test-page" className="nav-item">Test Page</Link>
				<Link to="/leader-board" className="nav-item">Leader Board</Link>
			</div>
			<div className="nav-links right">
				<Link to="/profile" className="nav-item">
					Hello, User Name
					<img src={logo} alt="Avatar" className="avatar" />
				</Link>
				<Link to="/logout" className="nav-item">Logout</Link>
			</div>
		</nav>
	);
}

export default NavBar;