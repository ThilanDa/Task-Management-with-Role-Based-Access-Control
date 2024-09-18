import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/tasks">User Tasks</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
