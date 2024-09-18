import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend
    fetch('http://localhost:5000/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="user-list">
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.name} ({user.email})
            <Link to={`/users/${user._id}/tasks`}>Add Task</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
