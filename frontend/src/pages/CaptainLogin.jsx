import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../stylesheets/UserSignUp.css';
import axios from 'axios';

const CaptainLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, formData);

      if (response.status === 200) {
        navigate('/captain-dashboard');
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="signup-container captain">
      <div className="logo">Uber</div>
      <div className="signup-content">
        <div className="signup-form-wrapper">
          <h1 className="signup-title">Welcome back, Driver</h1>
          <p className="signup-subtitle">Sign in to start accepting rides</p>

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>

            <button type="submit" className="signup-button">
              Sign In as Driver
            </button>
          </form>

          <div className="auth-options">
            <Link to="/captain-signup" className="auth-link">
              Don't have a driver account? Sign up
            </Link>
            <div className="divider">or</div>
            <Link to="/user-login" className="captain-link">
              Sign in as a Rider instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin;
