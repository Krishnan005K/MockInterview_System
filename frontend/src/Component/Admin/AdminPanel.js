import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AdminProfileImg from 'D:/sem5-project1/Fullstack-project1/frontend/src/Assets/Images/admin-profile.jpg'
import UserView from './UserView';
import EditUsers from './EditUser';
import AddUsers from './AddUser';
import DeleteUsers from './DeleteUser';
import FeedbackAdmindash from './FeedBackadmindash';
import ScheduleAdminDashboard from './ScheduleAdmin';
import AdminProfile from './AdminProfile';

import 'D:/sem5-project1/Fullstack-project1/frontend/src/Assets/Styles/AdminCss/AdminPanel.css';

function AdminDashboard() {
  return (
    <div className="dashboard-container">
      <div className="side-panel">
        <Link to="/admindashboard/profile" className="profile-link">
          <img src={AdminProfileImg} alt="Profile" className="profile-image" />
        </Link>
        <h2 style={{marginLeft:'30px'}}>Admin Panel</h2>
        <nav>
          <ul>
            <li>
              <Link to="/admindashboard">
                <i className="fas fa-bell nav-icon"></i>
                Notifications
              </Link>
            </li>
            <li>
              <Link to="/admindashboard/view-users">
                <i className="fas fa-user nav-icon"></i>
                View Users
              </Link>
            </li>
            <li>
              <Link to="/admindashboard/edit-users">
                <i className="fas fa-edit nav-icon"></i>
                Edit Users
              </Link>
            </li>
            <li>
              <Link to="/admindashboard/add-users">
                <i className="fas fa-plus nav-icon"></i>
                Add Users
              </Link>
            </li>
            <li>
              <Link to="/admindashboard/delete-users">
                <i className="fas fa-trash nav-icon"></i>
                Delete Users
              </Link>
            </li>
            <li>
              <Link to="/admindashboard/feedback">
                <i className="fas fa-comment-dots nav-icon"></i>
                Feedback
              </Link>
            </li>
            <li>
              <Link to="/admindashboard/schedules">
                <i className="fas fa-calendar nav-icon"></i>
                Schedules
              </Link>
            </li>
            {/* <li>
              <Link to="/admindashboard/reports">
                <i className="fas fa-chart-bar nav-icon"></i>
                Reports
              </Link>
            </li> */}
            <li>
              <Link to="/">
                <i className="fas fa-sign-out-alt nav-icon"></i>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <Routes>
          <Route path="profile" element={<AdminProfile />} />
          <Route path="notifications" element={<DefaultContent />} />
          <Route path="view-users" element={<UserView />} />
          <Route path="edit-users" element={<EditUsers />} />
          <Route path="add-users" element={<AddUsers />} />
          <Route path="delete-users" element={<DeleteUsers />} />
          <Route path="feedback" element={<FeedbackAdmindash />} />
          <Route path="schedules" element={<ScheduleAdminDashboard />} />
          <Route path="reports" element={<Reports />} />
          <Route path="/" element={<DefaultContent />} />
        </Routes>
      </div>
    </div>
  );
}

const DefaultContent = () => (
  <div className="card-container">
    <div className="card notification-card">
      <h3>Notifications</h3>
      <p><strong>System Update:</strong> The system will undergo maintenance on Friday at 3 PM.</p>
      <p><strong>New User:</strong> A new user has signed up. Check the user management section for details.</p>
    </div>
    <div className="card update-card">
      <h3>Daily Updates</h3>
      <p><strong>Today’s Tasks:</strong> Review new feedback, check interview schedules, and update user profiles.</p>
      <p><strong>Pending Actions:</strong> Approve new interview requests and verify user credentials.</p>
    </div>
    <div className="card stats-card">
      <h3>Statistics</h3>
      <p><strong>Total Users:</strong> 350</p>
      <p><strong>Upcoming Interviews:</strong> 12</p>
      <p><strong>Recent Feedback:</strong> 25 new feedbacks</p>
    </div>
  </div>
);


const Reports = () => (
  <div>
    <h3>Reports Page</h3>
    <p>This is where the reports would be displayed.</p>
  </div>
);

export default AdminDashboard;
