import React, { useState } from 'react';
import 'D:/sem5-project1/Fullstack-project1/frontend/src/Assets/Styles/AdminCss/AddUser.css';

function AddUser() {
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    email: '',
    dob: '',
    type: 'interviewee',
  });

  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    const fields = ['username', 'password', 'email', 'dob'];
    const emptyFieldsCheck = fields.filter((field) => !newUser[field]);

    if (emptyFieldsCheck.length > 0) {
      setEmptyFields(emptyFieldsCheck);
      setShowModal(true);
    } else {
      addUserToList();
    }
  };

  const addUserToList = () => {
    setUsers([...users, newUser]);
    setNewUser({
      username: '',
      password: '',
      email: '',
      dob: '',
      type: 'interviewee',
    });
  };

  const handleProceed = () => {
    setShowModal(false);
    addUserToList();
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="add-user-container">
      <h2>Add User</h2>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={newUser.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={newUser.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={newUser.dob}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Type:</label>
          <select
            name="type"
            value={newUser.type}
            onChange={handleInputChange}
          >
            <option value="interviewee">Interviewee</option>
            <option value="interviewer">Interviewer</option>
          </select>
        </div>
        <button type="button" onClick={handleAddUser}>
          Add User
        </button>
      </form>

      <h3>User List</h3>
      <table className="user-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
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

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Empty Fields</h2>
            <p>The following fields are empty:</p>
            <ul>
              {emptyFields.map((field, index) => (
                <li key={index}>{field}</li>
              ))}
            </ul>
            <p>Do you want to proceed with these empty fields?</p>
            <button onClick={handleProceed}>Yes</button>
            <button onClick={handleClose}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddUser;
