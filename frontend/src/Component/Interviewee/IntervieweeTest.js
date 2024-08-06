import React from 'react';
import { useParams } from 'react-router-dom';
import SampleIntervieweeTest from './SampleIntervieweeTest'; // Make sure this import path is correct
import VideoRec from './VideoRec'; // Make sure this import path is correct

const InterviewTest = () => {
  const { roundName } = useParams(); // Retrieve the roundName from URL parameters

  return (
    <div className="interview-test-container">
      {roundName === 'Technical Round' ? (
        <SampleIntervieweeTest />
      ) : roundName === 'HR Round' ? (
        <VideoRec />
      ) : (
        <div>Invalid Round Name</div>
      )}
    </div>
  );
};

export default InterviewTest;
