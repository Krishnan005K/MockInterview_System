import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Link } from 'react-scroll';
import { useTheme } from './ThemeContext';
import skctLogo from "../Assets/Images/skct-logo1.png";
import "../Assets/Styles/Navigation1.css";

function Navigation1() {
    const { theme, toggleTheme } = useTheme();
    return (
        <nav className={`nav-1-container ${theme}`}>
            <div className="skct-logo-container">
                <RouterLink to="/"><img src={skctLogo} alt="skct-logo" /></RouterLink>
            </div>
            <ul className={`nav-1-ul ${theme}`}>
                <div className="nav1-pages-container">
                    <li>
                        <Link to="section1" smooth={true} duration={500}>Course</Link>
                    </li>
                    <li>
                        <Link to="section2" smooth={true} duration={500}>Interview</Link>
                    </li>
                    <li>
                        <Link to="section3" smooth={true} duration={500}>Feedback</Link>
                    </li>
                    <li>
                        <Link to="section4" smooth={true} duration={500}>Practice</Link>
                    </li>
                    <li>
                        <Link to="section6" smooth={true} duration={500}>Contact</Link>
                    </li>
                    <li>
                        <RouterLink to="/signin">SignIn</RouterLink>
                    </li>
                    <li>
                    <button onClick={toggleTheme} className="theme-toggle-button">
                    {theme === 'light' ? '🌙' : '🌞'}
                     </button>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default Navigation1;
