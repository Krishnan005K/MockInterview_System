import React, { useState } from 'react';
import 'D:/sem5-project1/Fullstack-project1/frontend/src/Assets/Styles/AdminCss/EditUser.css';

function EditUser() {
  const [users, setUsers] = useState([
    { id: 1, username: 'john_doe', password: '1234', email: 'john@example.com', dob: '1990-01-01', type: 'interviewee' },
    { id: 2, username: 'jane_smith', password: '5678', email: 'jane@example.com', dob: '1985-05-05', type: 'interviewer' },
    // More user data here...
  ]);
  const [filter, setFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [editingUser, setEditingUser] = useState(null);

  const handleEditClick = (user) => {
    setEditingUser(user);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingUser({ ...editingUser, [name]: value });
  };

  const handleSaveClick = () => {
    setUsers(users.map(user => user.id === editingUser.id ? editingUser : user));
    setEditingUser(null);
  };

  const handleCancelClick = () => {
    setEditingUser(null);
  };

  const filteredUsers = users.filter(user => 
    (user.username.toLowerCase().includes(filter.toLowerCase()) || 
    user.email.toLowerCase().includes(filter.toLowerCase())) && 
    (typeFilter ? user.type === typeFilter : true)
  );

  return (
    <div className="edit-user-container">
      <h2>Edit Users</h2>
      <div className="filters">
        <input 
          type="text" 
          placeholder="Search by username or email" 
          value={filter}
          onChange={(e) => setFilter(e.target.value)} 
        />
        <select 
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="interviewee">Interviewee</option>
          <option value="interviewer">Interviewer</option>
        </select>
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td>{user.dob}</td>
              <td>{user.type}</td>
              <td>
                <button onClick={() => handleEditClick(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingUser && (
        <div className="edit-user-form">
          <h3>Edit User</h3>
          <form>
            <label>
              Username:
              <input type="text" name="username" value={editingUser.username} onChange={handleInputChange} />
            </label>
            <label>
              Password:
              <input type="text" name="password" value={editingUser.password} onChange={handleInputChange} />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={editingUser.email} onChange={handleInputChange} />
            </label>
            <label>
              DOB:
              <input type="date" name="dob" value={editingUser.dob} onChange={handleInputChange} />
            </label>
            <label>
              Type:
              <select name="type" value={editingUser.type} onChange={handleInputChange}>
                <option value="interviewee">Interviewee</option>
                <option value="interviewer">Interviewer</option>
              </select>
            </label>
            <div className="form-actions">
              <button type="button" onClick={handleSaveClick}>Save</button>
              <button type="button" onClick={handleCancelClick}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default EditUser;
