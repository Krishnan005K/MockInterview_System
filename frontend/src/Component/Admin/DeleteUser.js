import React, { useState } from 'react';
import 'D:/sem5-project1/Fullstack-project1/frontend/src/Assets/Styles/AdminCss/DeleteUser.css';

function DeleteUser() {
  const [users, setUsers] = useState([
    { username: 'john_doe', password: 'password123', email: 'john@example.com', dob: '1990-01-01', type: 'interviewee' },
    { username: 'jane_smith', password: 'password456', email: 'jane@example.com', dob: '1992-02-02', type: 'interviewer' },
    // Add more users here for testing
  ]);

  const [filterText, setFilterText] = useState('');
  const [filterType, setFilterType] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDeleteUser = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const confirmDelete = () => {
    setUsers(users.filter(user => user !== selectedUser));
    setShowModal(false);
    setSelectedUser(null);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const filteredUsers = users.filter(user => {
    return (
      (user.username.toLowerCase().includes(filterText.toLowerCase()) || user.email.toLowerCase().includes(filterText.toLowerCase())) &&
      (filterType === '' || user.type === filterType)
    );
  });

  return (
    <div className="delete-user-container">
      <h2>Delete User</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by username or email"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="interviewee">Interviewee</option>
          <option value="interviewer">Interviewer</option>
        </select>
      </div>

      <h3>User List</h3>
      <table className="user-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Type</th>
            <th>Actions</th>
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
              <td>
                <button onClick={() => handleDeleteUser(user)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete the user <strong>{selectedUser.username}</strong>?</p>
            <button onClick={confirmDelete}>Yes</button>
            <button onClick={cancelDelete}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeleteUser;
