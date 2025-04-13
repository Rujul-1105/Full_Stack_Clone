import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="logo">UBER</div>
      <div className="home-content">
        <h1 className="home-title">Get Started with UBER</h1>
        <p className="home-subtitle">Your journey begins here. Experience seamless rides across the city.</p>
        
        <Link to="/user-signup" className="continue-button">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
