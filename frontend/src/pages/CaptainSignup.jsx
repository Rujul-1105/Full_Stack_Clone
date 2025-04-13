import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/UserSignUp.css';

const CaptainSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    vehicleType: '',
    vehicleNumber: '',
    licenseNumber: '',
    password: '',
    confirmPassword: ''
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
    <div className="signup-container captain">
      <div className="logo">Uber</div>
      <div className="signup-content">
        <div className="signup-form-wrapper">
          <h1 className="signup-title">Drive with Uber</h1>
          <p className="signup-subtitle">Sign up to start earning with Uber</p>

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
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="form-group">
              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                required
                className="select-input"
              >
                <option value="">Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="bike">Bike</option>
                <option value="auto">Auto</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="vehicleNumber"
                value={formData.vehicleNumber}
                onChange={handleChange}
                placeholder="Vehicle Number"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="licenseNumber"
                value={formData.licenseNumber}
                onChange={handleChange}
                placeholder="Driver's License Number"
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
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
              />
            </div>

            <button type="submit" className="signup-button">
              Sign Up as Driver
            </button>
          </form>

          <div className="auth-options">
            <Link to="/captain-login" className="auth-link">
              Already have a driver account? Log in
            </Link>
            <div className="divider">or</div>
            <Link to="/user-signup" className="captain-link">
              Sign up as a Rider instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
