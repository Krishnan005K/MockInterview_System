import React from "react";
import { Link } from "react-router-dom";
import '../assets/style/Navbar.css'; // Ensure the path is correct
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Import specific icon
import logo from '../assets/images/interview logo.png'
// import Theme from "./Theme";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                {/* <li><Link to="/interview">Interview</Link></li>
                <li><Link to="/reports">Reports</Link></li>
                <li><Link to="/notifications">Notifications</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li> */}
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/theme">Theme</Link></li>
                {/* <li><Theme /></li> */}
                {/* <li><Link to="/videorec">Video</Link></li> */}
                {/* <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/profile">Profile</Link></li> */}
                {/* <li><Link to="/register">Register</Link></li> */}
                {/* <li><Link to="/profile"><FontAwesomeIcon className="profile-icon" icon={faUserCircle} /></Link></li> */}
                
            </ul>
        </div>
    );
}

export default Navbar;