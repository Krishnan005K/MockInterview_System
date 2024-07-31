import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarCheck, faFileAlt, faSignOutAlt, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../assets/style/Coder.css';
import profileIcon from '../assets/images/user img.png'; // Use the appropriate profile image

const Coder = () => {
  const [activeSection, setActiveSection] = useState('upcomingInterviews');
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const profileDetails = {
    name: 'Michael David',
    email: 'michaeldavid@example.com',
  };

  const upcomingInterviews = [
    { date: '2024-08-01', time: '10:00 AM', interviewer: 'John Doe' },
    { date: '2024-08-02', time: '2:00 PM', interviewer: 'Jane Smith' },
  ];

  const completedInterviewsReports = [
    { round: 'Round 1', date: '2024-07-15', result: 'Passed' },
    { round: 'Round 2', date: '2024-07-22', result: 'Failed' },
  ];

  const handleProfileEdit = (e) => {
    e.preventDefault();
    console.log('Profile details saved');
    setIsEditingProfile(false);
  };

  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <div className="coder-dashboard">
      <div className="sidebar-coder">
        <div className="profile-section">
          <img src={profileIcon} alt="Profile Icon" className="prof-icon" />
          <p className="profile-name">Michael David</p>
          <button className="profile-button" onClick={() => setActiveSection('profile')}>
            <FontAwesomeIcon icon={faUser} /> Profile
          </button>
        </div>
        <div className="sidebar-menu">
          <div className="sidebar-item" onClick={() => setActiveSection('upcomingInterviews')}>
            <FontAwesomeIcon icon={faCalendarCheck} className="menu-icon" />
            <h3>Upcoming Interviews</h3>
          </div>
          <div className="sidebar-item" onClick={() => setActiveSection('completedReports')}>
            <FontAwesomeIcon icon={faFileAlt} className="menu-icon" />
            <h3>Completed Interviews Reports</h3>
          </div>
          <Link to="/practice-sessions" className="sidebar-item">
            <FontAwesomeIcon icon={faVideo} className="menu-icon" />
            <h3>Practice Sessions</h3>
          </Link>
          <li onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </li>
        </div>
        {isEditingProfile && (
          <div className="profile-edit-form">
            <h3>Edit Profile</h3>
            <form onSubmit={handleProfileEdit}>
              <label>
                Name:
                <input type="text" defaultValue={profileDetails.name} />
              </label>
              <label>
                Email:
                <input type="email" defaultValue={profileDetails.email} />
              </label>
              <button type="submit">Save</button>
              <button type="button" onClick={() => setIsEditingProfile(false)}>Cancel</button>
            </form>
          </div>
        )}
      </div>
      <div className="content-section">
        {activeSection === 'profile' && (
          <div className="card profile-card">
            <h3>Profile</h3>
            <p>Name: {profileDetails.name}</p>
            <p>Email: {profileDetails.email}</p>
            <button className="edit-button" onClick={() => setIsEditingProfile(true)}>Edit Profile</button>
          </div>
        )}

        {activeSection === 'upcomingInterviews' && (
          <div className="card upcoming-interviews-card">
            <h3>Upcoming Interviews</h3>
            <ul>
              {upcomingInterviews.map((interview, index) => (
                <li key={index} className="interview-item">
                  {interview.date} at {interview.time} - Interviewer: {interview.interviewer}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeSection === 'completedReports' && (
          <div className="card completed-reports-card">
            <h3>Completed Interviews Reports</h3>
            <table className="reports-table">
              <thead>
                <tr>
                  <th>Round</th>
                  <th>Date</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                {completedInterviewsReports.map((report, index) => (
                  <tr key={index}>
                    <td>{report.round}</td>
                    <td>{report.date}</td>
                    <td>{report.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Coder;
