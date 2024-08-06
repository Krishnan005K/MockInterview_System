import React, { useState } from 'react';
import 'D:/sem5-project1/Fullstack-project1/frontend/src/Assets/Styles/AdminCss/FeedBackadmindash.css';

const feedbackData = [
  {
    username: 'john_doe',
    email: 'john@example.com',
    type: 'interviewee',
    rating: 4,
    comment: 'Great experience! The interviewer was very professional.',
  },
  {
    username: 'jane_smith',
    email: 'jane@example.com',
    type: 'interviewer',
    rating: 5,
    comment: 'The interviewee was well-prepared and answered all questions confidently.',
  },
  // Add more feedback entries here
];

function FeedbackAdminDashboard() {
  const [filterType, setFilterType] = useState('');

  const filteredFeedback = feedbackData.filter((feedback) => {
    return filterType === '' || feedback.type === filterType;
  });

  return (
    <div className="feedback-admin-container">
      <h2>Feedback</h2>

      <div className="feedback-admin-filters">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">All Feedback</option>
          <option value="interviewee">Interviewee</option>
          <option value="interviewer">Interviewer</option>
        </select>
      </div>

      <div className="feedback-admin-cards">
        {filteredFeedback.map((feedback, index) => (
          <div key={index} className="feedback-admin-card">
            <div className="feedback-admin-header">
              <h3>{feedback.username}</h3>
              <span className="feedback-admin-type">{feedback.type}</span>
            </div>
            <p className="feedback-admin-email">{feedback.email}</p>
            <p className="feedback-admin-comment">"{feedback.comment}"</p>
            <div className="feedback-admin-rating">
              Rating: {Array(feedback.rating).fill('⭐').join('')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedbackAdminDashboard;
