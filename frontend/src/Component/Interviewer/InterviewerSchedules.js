import React, { useState } from 'react';
import 'D:/sem5-project1/Fullstack-project1/frontend/src/Assets/Styles/InterviewerCss/InterviewerSchedules.css';


const InterviewerSchedules = () => {
  const interviews = [
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
    // More interview data...
  ];

  const [selectedInterview, setSelectedInterview] = useState(null);

  const handleViewTestForm = (interview) => {
    setSelectedInterview(interview);
  };

  return (
    <div className="interviewer-schedules-container">
      <h2>Scheduled Interviews</h2>
      <div className="interviewer-cards-container">
        {interviews.map((interview, index) => (
          <div key={index} className="interviewer-interview-card">
            <div className="interviewer-card-content">
              <p><strong>Interviewer Email:</strong> {interview.interviewerEmail}</p>
              <p><strong>Interviewee Email:</strong> {interview.intervieweeEmail}</p>
              <p><strong>Date & Time:</strong> {new Date(interview.dateTime).toLocaleString()}</p>
              <p><strong>Duration:</strong> {interview.duration}</p>
              <p><strong>Round Name:</strong> {interview.roundName}</p>
              <button onClick={() => handleViewTestForm(interview)}>View Test Form</button>
            </div>
          </div>
        ))}
      </div>

      {selectedInterview && (
        <div className="interviewer-test-form-container">
          <h3>Test Form for {selectedInterview.roundName}</h3>
          <div className="interviewer-questions-container">
            {selectedInterview.questions.map((question, index) => (
              <div key={index} className="interviewer-question-card">
                <p><strong>Question {index + 1}:</strong> {question.question}</p>
                {question.options.map((option, optIndex) => (
                  <div key={optIndex} className="interviewer-option">
                    {question.type === 'radio' ? (
                      <input type="radio" name={`question-${index}`} value={option} disabled />
                    ) : (
                      <input type="checkbox" name={`question-${index}`} value={option} disabled />
                    )}
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <button onClick={() => setSelectedInterview(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default InterviewerSchedules;
