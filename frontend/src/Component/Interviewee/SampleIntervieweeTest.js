import React, { useState, useEffect } from 'react';
import 'D:/sem5-project1/Fullstack-project1/frontend/src/Assets/Styles/IntervieweeCss/SampleIntervieweeTest.css';

const SampleIntervieweeTest = () => {
  const [timeLeft, setTimeLeft] = useState(80); // 30 minutes
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (timeLeft <= 0) {
      submitTest();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const questions = [
    { question: 'What is React?', options: ['Library', 'Framework', 'Language', 'Tool'], correctAnswer: 'Library' },
    { question: 'What is JSX?', options: ['JavaScript', 'XML', 'HTML', 'None'], correctAnswer: 'XML' },
    { question: 'What is a component?', options: ['A function', 'A class', 'A piece of UI', 'None'], correctAnswer: 'A piece of UI' },
    { question: 'What is useState?', options: ['A hook', 'A component', 'A function', 'None'], correctAnswer: 'A hook' },
    { question: 'What is a prop?', options: ['A state', 'A method', 'A property', 'None'], correctAnswer: 'A property' },
    { question: 'What is useEffect?', options: ['A hook', 'A component', 'A function', 'None'], correctAnswer: 'A hook' },
    { question: 'What is Redux?', options: ['A state management tool', 'A library', 'A framework', 'None'], correctAnswer: 'A state management tool' },
    { question: 'What is a virtual DOM?', options: ['A real DOM', 'A copy of the DOM', 'A component', 'None'], correctAnswer: 'A copy of the DOM' },
    { question: 'What is a controlled component?', options: ['A component with internal state', 'A component with external state', 'A component with controlled inputs', 'None'], correctAnswer: 'A component with controlled inputs' },
    { question: 'What is a hook?', options: ['A JavaScript feature', 'A React feature', 'A CSS feature', 'None'], correctAnswer: 'A React feature' },
  ];

  const handleOptionChange = (questionIndex, option) => {
    setUserAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionIndex]: option,
    }));
  };

  const submitTest = () => {
    const correctAnswersCount = questions.reduce((total, question, index) => {
      return userAnswers[index] === question.correctAnswer ? total + 1 : total;
    }, 0);

    setScore(correctAnswersCount);
    setIsSubmitted(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="test-container">
      {isSubmitted ? (
        <div className="submission-message">
          <h2>Test Automatically Submitted</h2>
          <p>Your test has been automatically submitted due to the time limit.</p>
          <p>Your Score: {score} / {questions.length}</p>
        </div>
      ) : (
        <div className="test-form">
          <div className="timer">Time Left: {formatTime(timeLeft)}</div>
          <form onSubmit={(e) => { e.preventDefault(); submitTest(); }}>
            {questions.map((q, index) => (
              <div key={index} className="question">
                <p>{q.question}</p>
                {q.options.map((option, idx) => (
                  <div key={idx} className="option">
                    <input 
                      type="radio" 
                      id={`q${index}o${idx}`} 
                      name={`question${index}`} 
                      value={option} 
                      onChange={() => handleOptionChange(index, option)}
                      checked={userAnswers[index] === option}
                    />
                    <label htmlFor={`q${index}o${idx}`}>{option}</label>
                  </div>
                ))}
              </div>
            ))}
            <button type="submit" className="submit-button">Submit Test</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SampleIntervieweeTest;
