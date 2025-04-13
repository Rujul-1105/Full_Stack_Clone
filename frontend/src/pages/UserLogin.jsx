import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/UserSignUp.css';

const UserLogin = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="signup-container">
      <div className="logo">Uber</div>
      <div className="signup-content">
        <div className="signup-form-wrapper">
          <h1 className="signup-title">Welcome back</h1>
          <p className="signup-subtitle">Sign in to continue your journey with Uber</p>

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <input
                type="text"
                name="emailOrPhone"
                value={formData.emailOrPhone}
                onChange={handleChange}
                placeholder="Email or phone number"
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
              Sign In
            </button>
          </form>

          <div className="auth-options">
            <Link to="/user-signup" className="auth-link">
              Don't have an account? Sign up
            </Link>
            <div className="divider">or</div>
            <Link to="/captain-login" className="captain-link">
              Sign in as a Driver instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
