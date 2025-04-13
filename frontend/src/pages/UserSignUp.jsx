import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../stylesheets/UserSignUp.css';
import axios from 'axios';

import {UserDataContext} from '../context/UserContext';

const UserSignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
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
      const newUser = {
        fullname: {
          firstname: formData.firstName,
          lastname: formData.lastName
        },
        email: formData.email,
        password: formData.password
      };

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        navigate('/home');
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="signup-container">
      <div className="logo">Uber</div>
      <div className="signup-content">
        <div className="signup-form-wrapper">
          <h1 className="signup-title">Create your account</h1>
          <p className="signup-subtitle">Sign up to start riding with Uber</p>

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="name-group">
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  required
                />
              </div>
            </div>
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
              Sign Up
            </button>
          </form>

          <div className="auth-options">
            <Link to="/user-login" className="auth-link">
              Already have an account? Log in
            </Link>
            <div className="divider">or</div>
            <Link to="/captain-signup" className="captain-link">
              Register as a Driver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignUp;
