import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Start.css';

const Start = () => {
  return (
    <div className="start-container">
      <div className="logo">Uber</div>
      <div className="start-content">
        <h1 className="start-title">Get Started with Uber</h1>
        <p className="start-subtitle">Your journey begins here. Experience seamless rides across the city.</p>
        
        <Link to="/user-signup" className="continue-button">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Start;
