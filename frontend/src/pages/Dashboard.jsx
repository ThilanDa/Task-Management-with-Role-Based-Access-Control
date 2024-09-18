import React from 'react';
import Sidebar from '../components/Sidebar';


const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <h1>Welcome to the Admin Dashboard</h1>
        <p>Manage users and tasks from the sidebar.</p>
      </div>
    </div>
  );
};

export default Dashboard;
