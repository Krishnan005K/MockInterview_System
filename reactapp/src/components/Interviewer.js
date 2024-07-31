import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUsers, faUser } from '@fortawesome/free-solid-svg-icons';
import '../assets/style/Interviewer.css';
import profileIcon from '../assets/images/inter img.png';

const Interviewer = () => {
  const [activeSection, setActiveSection] = useState('upcomingSchedules');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingCoder, setIsEditingCoder] = useState(null);
  const [isDeletingCoder, setIsDeletingCoder] = useState(null);

  const profileDetails = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  const [coders, setCoders] = useState([
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', password: 'Alice123', dob: '1990-01-01', round: 'Round 1' },
    { id: 2, name: 'Bob Brown', email: 'bob@example.com', password: 'bob@123', dob: '1992-02-02', round: 'Round 2' },
  ]);

  const upcomingSchedules = [
    { date: '2024-08-01', time: '10:00 AM', coder: 'John Doe' },
    { date: '2024-08-02', time: '2:00 PM', coder: 'Jane Smith' },
  ];

  const handleProfileEdit = (e) => {
    e.preventDefault();
    console.log('Profile details saved');
    setIsEditingProfile(false);
  };

  const handleEditCoder = (coder) => {
    setIsEditingCoder(coder);
  };

  const handleSaveCoder = (e) => {
    e.preventDefault();
    console.log(`Coder details saved: ${isEditingCoder.name}`);
    setIsEditingCoder(null);
  };

  const handleDeleteCoder = (id) => {
    setCoders(prevCoders => prevCoders.filter(coder => coder.id !== id));
    setIsDeletingCoder(null);
  };

  const handleLogout = () => {
    // Redirect to home page (assuming "/" is the home page route)
    window.location.href = "/";
  };

  return (
    <div className="interviewer-dashboard">
      <div className="sidebar-inter">
        <div className="profile-section">
          <img src={profileIcon} alt="Profile Icon" className="prof-icon" />
          <p className="profile-name">Jessy</p>
          <button className="profile-button" onClick={() => setActiveSection('profile')}>
            <FontAwesomeIcon icon={faUser} /> Profile
          </button>
        </div>
        <div className="sidebar-menu">
          <div className="sidebar-item" onClick={() => setActiveSection('upcomingSchedules')}>
            <FontAwesomeIcon icon={faCalendarAlt} className="menu-icon" />
            <h3>Upcoming Schedules</h3>
          </div>
          <div className="sidebar-item" onClick={() => setActiveSection('codersList')}>
            <FontAwesomeIcon icon={faUsers} className="menu-icon" />
            <h3>Coders List</h3>
          </div>
          <li className='inter-log' onClick={handleLogout}>Logout</li>
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
              {/* Add more fields as needed */}
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

        {activeSection === 'upcomingSchedules' && (
          <div className="card upcoming-schedules-card">
            <h3>Upcoming Schedules</h3>
            <ul>
              {upcomingSchedules.map((schedule, index) => (
                <li key={index} className="schedule-item">
                  {schedule.date} at {schedule.time} - {schedule.coder}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeSection === 'codersList' && (
          <div className="card coders-list-card">
            <h3>List of Coders</h3>
            <table className="coders-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>DOB</th>
                  <th>Round</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {coders.map(coder => (
                  <tr key={coder.id}>
                    <td>{coder.name}</td>
                    <td>{coder.email}</td>
                    <td>{coder.password}</td>
                    <td>{coder.dob}</td>
                    <td>{coder.round}</td>
                    <td>
                      <button onClick={() => handleEditCoder(coder)} className="edit-button">Edit</button>
                      <button onClick={() => setIsDeletingCoder(coder.id)} className="delete-button">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {isEditingCoder && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Coder</h3>
            <form onSubmit={handleSaveCoder}>
              <label>
                Name:
                <input type="text" defaultValue={isEditingCoder.name} onChange={e => setIsEditingCoder({ ...isEditingCoder, name: e.target.value })} />
              </label>
              <label>
                Email:
                <input type="email" defaultValue={isEditingCoder.email} onChange={e => setIsEditingCoder({ ...isEditingCoder, email: e.target.value })} />
              </label>
              <label>
                Password:
                <input type="password" defaultValue={isEditingCoder.password} onChange={e => setIsEditingCoder({ ...isEditingCoder, password: e.target.value })} />
              </label>
              <label>
                DOB:
                <input type="date" defaultValue={isEditingCoder.dob} onChange={e => setIsEditingCoder({ ...isEditingCoder, dob: e.target.value })} />
              </label>
              <label>
                Round:
                <input type="text" defaultValue={isEditingCoder.round} onChange={e => setIsEditingCoder({ ...isEditingCoder, round: e.target.value })} />
              </label>
              <button type="submit">Save</button>
              <button type="button" onClick={() => setIsEditingCoder(null)}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {isDeletingCoder !== null && (
        <div className="modal">
          <div className="modal-content">
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete this coder?</p>
            <button onClick={() => handleDeleteCoder(isDeletingCoder)}>Yes, Delete</button>
            <button onClick={() => setIsDeletingCoder(null)}>Cancel</button>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Interviewer;
