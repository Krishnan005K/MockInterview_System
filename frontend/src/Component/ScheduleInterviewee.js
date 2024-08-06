import React, { useState } from 'react';
import '../Assets/Styles/ScheduleAdmin.css';

const ScheduleintervieweeDashboard = () => {
  const [schedules, setSchedules] = useState([]);
  const [newSchedule, setNewSchedule] = useState({
    intervieweeEmail: '',
    interviewerEmail: '',
    dateTime: '',
    roundNumber: '',
    roundName: '',
    duration: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSchedule({ ...newSchedule, [name]: value });
  };

  const handleAddSchedule = () => {
    const emptyFields = Object.keys(newSchedule).filter(key => !newSchedule[key]);

    if (emptyFields.length > 0) {
      if (window.confirm(`The following fields are empty: ${emptyFields.join(', ')}. Do you still want to add the schedule?`)) {
        setSchedules([...schedules, newSchedule]);
        setNewSchedule({
          intervieweeEmail: '',
          interviewerEmail: '',
          dateTime: '',
          roundNumber: '',
          roundName: '',
          duration: ''
        });
      }
    } else {
      setSchedules([...schedules, newSchedule]);
      setNewSchedule({
        intervieweeEmail: '',
        interviewerEmail: '',
        dateTime: '',
        roundNumber: '',
        roundName: '',
        duration: ''
      });
    }
  };

  return (
    <div className="schedule-admin-container">
      <h2>Interview Schedules</h2>

      <div className="schedule-admin-form">
        <input
          type="email"
          name="intervieweeEmail"
          placeholder="Interviewee Email"
          value={newSchedule.intervieweeEmail}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="interviewerEmail"
          placeholder="Interviewer Email"
          value={newSchedule.interviewerEmail}
          onChange={handleInputChange}
        />
        <input
          type="datetime-local"
          name="dateTime"
          placeholder="Date & Time"
          value={newSchedule.dateTime}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="roundNumber"
          placeholder="Round Number"
          value={newSchedule.roundNumber}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="roundName"
          placeholder="Round Name"
          value={newSchedule.roundName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration"
          value={newSchedule.duration}
          onChange={handleInputChange}
        />
        <button onClick={handleAddSchedule}>Add Schedule</button>
      </div>

      <div className="schedule-admin-cards">
        {schedules.map((schedule, index) => (
          <div key={index} className="schedule-admin-card">
            <div className="schedule-admin-header">
              <h3>{schedule.roundName}</h3>
              <span className="schedule-admin-date">{new Date(schedule.dateTime).toLocaleString()}</span>
            </div>
            <p className="schedule-admin-info"><strong>Interviewee Email:</strong> {schedule.intervieweeEmail}</p>
            <p className="schedule-admin-info"><strong>Interviewer Email:</strong> {schedule.interviewerEmail}</p>
            <p className="schedule-admin-info"><strong>Round Number:</strong> {schedule.roundNumber}</p>
            <p className="schedule-admin-info"><strong>Duration:</strong> {schedule.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleintervieweeDashboard;
