import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import AdminProfileImg from '../../assets/images/attend-interview-image.png';
import '../../assets/styles/Admin/AdminPanel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faEdit, faPlus, faTrash, faChartBar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Head from './Head';
import Mentor from './Mentor';
import Student from './Student';
import ScheduleAdminDashboard from './ScheduleAdmin';
import AdminReports from './AdminReports';
import Interviewer from './Interviewer';
import ProfileAdmin from './AdminProfile';
import Navbar from '../../components/Navbar';

function AdminDashboard() {
  const navigate=useNavigate();

const logout = () => {
  localStorage.removeItem('token');
};
const handleLogout = () => {
  logout();
  localStorage.removeItem('token');
  localStorage.removeItem('role');
  localStorage.removeItem('email');
  localStorage.removeItem('userId');
  navigate('/');
};
  return (
    <>
    <Navbar/>
    <div className="dashboard-container">
      <div className="side-panel">
        <Link to="/admindashboard/profile" className="profile-link">
          <img src={AdminProfileImg} alt="Profile" className="profile-image" />
        </Link>
        <h2 style={{ marginLeft: '30px' }}>Admin Panel</h2>
        <nav>
          <ul>
            <li>
              <Link to="/admindashboard">
              <FontAwesomeIcon icon={faBell} className="nav-icon" />
              <p>Notifications</p>
              </Link>
            </li>
            <li>
              <Link to="/admindashboard/head">
              <FontAwesomeIcon icon={faUser} className="nav-icon" />
              <p> Head</p>
              </Link>
            </li>
            <li>
              <Link to="/admindashboard/mentor">
              <FontAwesomeIcon icon={faEdit} className="nav-icon" />
              <p> Mentor</p>
              </Link>
            </li>
            <li>
              <Link to="/admindashboard/interviewer">
              <FontAwesomeIcon icon={faPlus} className="nav-icon" />
              <p> Interviewers</p>
              </Link>
            </li>
            <li>
              <Link to="/admindashboard/student">
              <FontAwesomeIcon icon={faTrash} className="nav-icon" />
              <p> Students</p>
              </Link>
            </li>
            {/* <li>
              <Link to="/admindashboard/feedback">
                <i className="fas fa-comment-dots nav-icon"></i>
                Feedback
              </Link>
            </li> */}
            {/* <li>
              <Link to="/admindashboard/schedules">
                <i className="fas fa-calendar nav-icon"></i>
                Schedules
              </Link>
            </li> */}
            <li>
              <Link to="/admindashboard/reports">
              <FontAwesomeIcon icon={faChartBar} className="nav-icon" />
              <p> Reports</p>
              </Link>
            </li>
            
            <li onClick={handleLogout} >
            <Link onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} className="nav-icon" />
            Logout
                </Link>
            </li>
            
            
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <Routes>
          <Route path="profile" element={<ProfileAdmin/>} />
          <Route path="notifications" element={<DefaultContent />} />
          <Route path="head" element={<Head />} />
          <Route path="mentor" element={<Mentor/>} />
          <Route path="interviewer" element={<Interviewer />} />
          <Route path="student" element={<Student />} />
          <Route path="schedules" element={<ScheduleAdminDashboard />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="/" element={<DefaultContent />} />
        </Routes>
      </div>
    </div>
    </>
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
      <p><strong>Today's Tasks:</strong> Review new feedback, check interview schedules, and update user profiles.</p>
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
