import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Adjust the import path accordingly
import '../assets/styles/Navbar.css';
import logo from '../assets/images/Logo.png';
import { FaUserCircle, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('email');
    localStorage.removeItem('userId');
    navigate('/');
  };

  const toggleTheme = () => {
/*************  ✨ Codeium Command ⭐  *************/
/**
 * Toggles the theme of the application between light and dark mode.
 * Changes the isDarkMode state and updates the body's class list
 * to apply the appropriate theme styles.
 */
/******  b9fbf507-83f1-4796-a0aa-68e86d2d9a88  *******/    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav>
      <div className="navbar-logo">
      {isAuthenticated ? (
          <div className="navbar-avatar-container">
          </div>
        ) : (
          <img src={logo} style={{ width: '120px', height: '60px' }} alt="Logo" />
        )}
       
      </div>
      <div className={`navbar-links-container ${isMenuOpen ? 'open' : ''}`}>

        {isAuthenticated ? (
          <div className="navbar-avatar-container">
            <FaUserCircle size={30} onClick={toggleDropdown} />
            {isDropdownOpen && (
              <div className="navbar-dropdown">
                <button className='navbar-profile-button'><Link to='/profile' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '1.1rem' }}>Profile</Link></button>
                <button onClick={handleLogout} className="navbar-logout-button">Logout</button>
              </div>
            )}
          </div>
        ) : (
          <button className="primary-button" style={{ width: '110px' }}>
            <Link to="/login" className="navbar-link">Login</Link>
          </button>
        )}
        <div className="navbar-theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </div>
      </div>
      <div className="navbar-menu-container" onClick={toggleMenu}>
        <svg viewBox="0 0 24 24">
          <path d="M3 6h18M3 12h18m-9 6h9" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
