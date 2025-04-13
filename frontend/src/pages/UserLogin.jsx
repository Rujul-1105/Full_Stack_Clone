import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../stylesheets/UserSignUp.css';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const [user, setUser] = useContext(UserDataContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, formData);

      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        navigate('/home');
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
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
