import React from 'react';
import '../../stylesheets/pages/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="logo">Uber</div>
      <div className="home-content">
        <h1>Welcome to Uber</h1>
        <div className="ride-options">
          {/* Ride options will go here */}
        </div>
      </div>
    </div>
  );
};

export default Home;
