import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    vehicleType: 'car',
    vehicleColor: '',
    vehicleNumber: '',
    vehicleCapacity: '',
    password: '',
    confirmPassword: ''
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
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const newCaptain = {
        fullname: {
          firstname: formData.firstName,
          lastname: formData.lastName
        },
        email: formData.email,
        password: formData.password,
        vehicle: {
          type: formData.vehicleType,
          color: formData.vehicleColor,
          number: formData.vehicleNumber,
          capacity: parseInt(formData.vehicleCapacity)
        },
        status: "offline"
      };

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, newCaptain);

      if (response.status === 201) {
        navigate('/CaptainHome');
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col text-white overflow-x-hidden">
      <div className="text-2xl font-bold py-8 px-8 -tracking-[0.5px]">
        Uber
      </div>
      <div className="w-full px-8 flex flex-col items-center flex-1">
        <div className="w-full max-w-md mx-auto p-4 bg-black rounded-xl">
          <h1 className="text-4xl font-bold mb-3 -tracking-[0.5px] text-white">
            Drive with Uber
          </h1>
          <p className="text-lg mb-8 text-gray-400">
            Sign up to start earning with Uber
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  required
                  className="w-full px-4 py-4 border border-gray-700 rounded-lg bg-gray-900 text-white text-base transition-all focus:outline-none focus:border-white focus:ring-1 focus:ring-white placeholder-gray-500"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  required
                  className="w-full px-4 py-4 border border-gray-700 rounded-lg bg-gray-900 text-white text-base transition-all focus:outline-none focus:border-white focus:ring-1 focus:ring-white placeholder-gray-500"
                />
              </div>
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-4 border border-gray-700 rounded-lg bg-gray-900 text-white text-base transition-all focus:outline-none focus:border-white focus:ring-1 focus:ring-white placeholder-gray-500"
              />
            </div>
            <div>
              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 border border-gray-700 rounded-lg bg-gray-900 text-white text-base transition-all focus:outline-none focus:border-white focus:ring-1 focus:ring-white appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e')] bg-no-repeat bg-[length:1em] bg-[right_1rem_center]"
              >
                <option value="car">Car</option>
                <option value="bike">Bike</option>
                <option value="auto">Auto</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                name="vehicleColor"
                value={formData.vehicleColor}
                onChange={handleChange}
                placeholder="Vehicle Color"
                required
                className="w-full px-4 py-4 border border-gray-700 rounded-lg bg-gray-900 text-white text-base transition-all focus:outline-none focus:border-white focus:ring-1 focus:ring-white placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="text"
                name="vehicleNumber"
                value={formData.vehicleNumber}
                onChange={handleChange}
                placeholder="Vehicle Number"
                required
                className="w-full px-4 py-4 border border-gray-700 rounded-lg bg-gray-900 text-white text-base transition-all focus:outline-none focus:border-white focus:ring-1 focus:ring-white placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="number"
                name="vehicleCapacity"
                value={formData.vehicleCapacity}
                onChange={handleChange}
                placeholder="Vehicle Capacity"
                required
                className="w-full px-4 py-4 border border-gray-700 rounded-lg bg-gray-900 text-white text-base transition-all focus:outline-none focus:border-white focus:ring-1 focus:ring-white placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full px-4 py-4 border border-gray-700 rounded-lg bg-gray-900 text-white text-base transition-all focus:outline-none focus:border-white focus:ring-1 focus:ring-white placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
                className="w-full px-4 py-4 border border-gray-700 rounded-lg bg-gray-900 text-white text-base transition-all focus:outline-none focus:border-white focus:ring-1 focus:ring-white placeholder-gray-500"
              />
            </div>

            <button type="submit" className="w-full py-4 mt-4 bg-white text-black text-base font-medium rounded-lg transition-all hover:bg-gray-100">
              Sign Up as Driver
            </button>
          </form>

          <div className="text-center mt-6">
            <Link to="/captain-login" className="inline-block text-white text-sm transition-colors hover:text-gray-300 py-3">
              Already have a driver account? Log in
            </Link>
            <div className="text-sm text-gray-500 my-4">or</div>
            <Link to="/user-signup" className="inline-block text-white text-sm transition-colors hover:text-gray-300 py-3">
              Sign up as a Rider instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
