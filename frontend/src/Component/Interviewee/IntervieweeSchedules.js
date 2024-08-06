import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'D:/sem5-project1/Fullstack-project1/frontend/src/Assets/Styles/IntervieweeCss/IntervieweeSchedules.css';

const IntervieweeSchedules = () => {
  const navigate = useNavigate();
  
  const schedules = [
    {
      interviewerEmail: 'interviewer1@example.com',
      intervieweeEmail: 'interviewee1@example.com',
      dateTime: '2024-07-30T10:00:00',
      duration: '01:30:00',
      roundName: 'Technical Round',
      questions: [
        {
          question: 'What is React?',
          options: ['Library', 'Framework', 'Language', 'Tool'],
          correctAnswer: 'Library',
          type: 'radio'
        },
        // More questions...
      ],
    },
    {
      interviewerEmail: 'hr@example.com',
      intervieweeEmail: 'interviewee1@example.com',
      dateTime: '2024-08-02T14:00:00',
      duration: '00:45:00',
      roundName: 'HR Round',
      questions: [
        {
          question: 'Tell me about yourself.',
          options: ['Option 1', 'Option 2', 'Option 3'],
          correctAnswer: 'Option 1',
          type: 'radio'
        },
        // More questions...
      ],
    },
    // More interview data...
  ];

  const handleCardClick = (roundName) => {
    navigate(`/intervieweedashboard/interviewtest/${roundName}`);
  };

  return (
    <div className="interviewee-schedules-container">
      <h2>My Scheduled Interviews</h2>
      <div className="interviewee-cards-container">
        {schedules.map((schedule, index) => (
          <div
            key={index}
            className="interviewee-interview-card"
            onClick={() => handleCardClick(schedule.roundName)}
          >
            <div className="interviewee-card-content">
              <p><strong>Interviewer Email:</strong> {schedule.interviewerEmail}</p>
              <p><strong>Interviewee Email:</strong> {schedule.intervieweeEmail}</p>
              <p><strong>Date & Time:</strong> {new Date(schedule.dateTime).toLocaleString()}</p>
              <p><strong>Duration:</strong> {schedule.duration}</p>
              <p><strong>Round Name:</strong> {schedule.roundName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntervieweeSchedules;
