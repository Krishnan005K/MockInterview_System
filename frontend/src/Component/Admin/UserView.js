// src/Component/UserView.js
import React, { useState } from 'react';
import 'D:/sem5-project1/Fullstack-project1/frontend/src/Assets/Styles/AdminCss/UserView.css';

function UserView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const users = [
    { username: 'john_doe', password: '1234', email: 'john@example.com', dob: '1990-01-01', type: 'interviewee' },
    { username: 'jane_smith', password: '5678', email: 'jane@example.com', dob: '1985-05-05', type: 'interviewer' },
    // More user data here...
  ];

  const filteredUsers = users.filter(user => 
    (filter === '' || user.type === filter) &&
    (user.username.includes(searchTerm) || user.email.includes(searchTerm))
  );

  return (
    <div className="user-view">
      <h2>User Management</h2>
      <div className="filters">
        <input 
          type="text" 
          placeholder="Search users..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All Users</option>
          <option value="interviewee">Interviewees</option>
          <option value="interviewer">Interviewers</option>
        </select>
      </div>
      <div className="card-container">
        <div className="card full-row-card">
          <h3>Total Users</h3>
          <div className="count-circle">{users.length}</div>
        </div>
        <div className="card half-row-card">
          <h3>Total Interviewees</h3>
          <div className="count-circle">{users.filter(user => user.type === 'interviewee').length}</div>
        </div>
        <div className="card half-row-card">
          <h3>Total Interviewers</h3>
          <div className="count-circle">{users.filter(user => user.type === 'interviewer').length}</div>
        </div>
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td>{user.dob}</td>
              <td>{user.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserView;
