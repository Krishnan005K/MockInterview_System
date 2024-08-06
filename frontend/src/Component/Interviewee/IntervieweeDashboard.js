import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import IntervieweeProfileImg from 'D:/sem5-project1/Fullstack-project1/frontend/src/Assets/Images/admin-profile.jpg';
import IntervieweeSchedules from 'D:/sem5-project1/Fullstack-project1/frontend/src/Component/Interviewee/IntervieweeSchedules';
// import IntervieweeFeedback from 'D:/sem5-project1/Fullstack-project1/frontend/src/Component/Interviewee/IntervieweeFeedback.js';
import IntervieweeProfile from 'D:/sem5-project1/Fullstack-project1/frontend/src/Component/Interviewee/IntervieweeProfile.js';
import 'D:/sem5-project1/Fullstack-project1/frontend/src/Assets/Styles/IntervieweeCss/IntervieweeDashboard.css';
import Feedback from '../Feedback';
import VideoRec from './VideoRec';
import IntervieweeTest from './IntervieweeTest';

function IntervieweeDashboard() {
  return (
    <div className="dashboard-container">
      <div className="side-panel">
        <Link to="/intervieweedashboard/profile" className="profile-link">
          <img src={IntervieweeProfileImg} alt="Profile" className="profile-image" />
        </Link>
        <h2>Interviewee Panel</h2>
        <nav>
          <ul>
            <li>
              <Link to="/intervieweedashboard/">
                <i className="fas fa-bell nav-icon"></i>
                Notifications
              </Link>
            </li>
            <li>
              <Link to="/intervieweedashboard/view-scheduled-interviews">
                <i className="fas fa-calendar nav-icon"></i>
                Scheduled Interviews
              </Link>
            </li>
            <li>
              <Link to="/intervieweedashboard/reports">
                <i className="fas fa-chart-bar nav-icon"></i>
                Reports
              </Link>
            </li>
            <li>
              <Link to="/intervieweedashboard/feedback">
                <i className="fas fa-comment-dots nav-icon"></i>
                Feedback
              </Link>
            </li>
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
          <Route path="profile" element={<IntervieweeProfile />} />
          <Route path="view-scheduled-interviews" element={<IntervieweeSchedules />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="/" element={<DefaultContent />} />
          <Route path="videorec" element={< VideoRec />} />
          <Route path="interviewtest/:roundName" element={<IntervieweeTest />} />
        </Routes>
      </div>
    </div>
  );
}

const DefaultContent = () => (
  <div className="card-container">
    <div className="card notification-card">
      <h3>Notifications</h3>
      <p><strong>New Schedule:</strong> You have a new interview scheduled. Check the view scheduled interviews section for details.</p>
      <p><strong>Important Update:</strong> Please make sure to complete your profile details.</p>
    </div>
    <div className="card update-card">
      <h3>Updates</h3>
      <p><strong>Upcoming Interviews:</strong> Check your scheduled interviews for upcoming dates.</p>
      <p><strong>Profile Update:</strong> Update your profile information for better interview management.</p>
    </div>
    <div className="card stats-card">
      <h3>Statistics</h3>
      <p><strong>Total Interviews Scheduled:</strong> 3</p>
      <p><strong>Upcoming Interviews:</strong> 2</p>
      <p><strong>Recent Feedbacks:</strong> 1 new feedback</p>
    </div>
  </div>
);

export default IntervieweeDashboard;
