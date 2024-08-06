import React, { useState } from 'react';
import 'D:/sem5-project1/Fullstack-project1/frontend/src/Assets/Styles/IntervieweeCss/IntervieweeProfile.css'; // Ensure this path is correct
import IntervieweeProfileImg from 'D:/sem5-project1/Fullstack-project1/frontend/src/Assets/Images/admin-profile.jpg'; // Replace with actual path

const IntervieweeProfile = () => {
  const [intervieweeData, setIntervieweeData] = useState({
    username: 'interviewee_user',
    email: 'interviewee@example.com',
    password: 'password123',
    phoneNumber: '123-456-7890',
    year: '3rd Year',
    department: 'Computer Science',
    section: 'A',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    const emptyFields = Object.values(intervieweeData).some(field => field === '');
    if (emptyFields) {
      alert('Fields cannot be empty');
      return;
    }
    setShowConfirmation(true);
  };

  const confirmSave = () => {
    setShowConfirmation(false);
    setIsEditing(false);
    // Add logic to save updated data
    alert('Data saved successfully');
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setIntervieweeData({ ...intervieweeData, [e.target.name]: e.target.value });
  };

  return (
    <div className='profile-interviewee-whole-container'>
      <div className="profile-interviewee-container">
        <div className="profile-image-container">
          <img src={IntervieweeProfileImg} alt="Interviewee" className="profile-image" />
        </div>
        <h2>Interviewee Profile</h2>
        <form className="profile-form">
          <div className="form-group">
            <label>Username:</label>
            <input type="text" value={intervieweeData.username} disabled />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={intervieweeData.email} 
              onChange={handleChange} 
              disabled={!isEditing} 
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input 
              type="password" 
              name="password" 
              value={intervieweeData.password} 
              onChange={handleChange} 
              disabled={!isEditing} 
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input 
              type="text" 
              name="phoneNumber" 
              value={intervieweeData.phoneNumber} 
              onChange={handleChange} 
              disabled={!isEditing} 
            />
          </div>
          <div className="form-group">
            <label>Year:</label>
            <input 
              type="text" 
              name="year" 
              value={intervieweeData.year} 
              onChange={handleChange} 
              disabled={!isEditing} 
            />
          </div>
          <div className="form-group">
            <label>Department:</label>
            <input 
              type="text" 
              name="department" 
              value={intervieweeData.department} 
              onChange={handleChange} 
              disabled={!isEditing} 
            />
          </div>
          <div className="form-group">
            <label>Section:</label>
            <input 
              type="text" 
              name="section" 
              value={intervieweeData.section} 
              onChange={handleChange} 
              disabled={!isEditing} 
            />
          </div>

          {isEditing ? (
            <div className="form-actions">
              <button type="button" className="profile-save-button" onClick={handleSaveClick}>Save</button>
              <button type="button" className="profile-cancel-button" onClick={handleCancelClick}>Cancel</button>
            </div>
          ) : (
            <button type="button" className="profile-edit-button" onClick={handleEditClick}>Edit</button>
          )}
        </form>
        
        {showConfirmation && (
          <div className="confirmation-dialog">
            <p>Are you sure you want to save the changes?</p>
            <button type="button" className="confirm-yes-button" onClick={confirmSave}>Yes</button>
            <button type="button" className="confirm-no-button" onClick={() => setShowConfirmation(false)}>No</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntervieweeProfile;
