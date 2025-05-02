import React from 'react';
import { Link } from 'react-router-dom';
import '../Homepage.css';

const Home = () => {
  return (
    <div className="home-page">
      <h1>TEAM FSD</h1>
      <p>Welcome to the FSD Team Management</p>

      <div className="manage-card">
        <h2>Manage Team</h2>
        <div className="manage-buttons">
          <Link to="/add" className="button">Add Member</Link>
          <Link to="/members" className="button">View Members</Link>
          <Link to="/remove" className="button">Remove Member</Link> {/* 👈 New button */}
        </div>
      </div>
    </div>
  );
};

export default Home;
