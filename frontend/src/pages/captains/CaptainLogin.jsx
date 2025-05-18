import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
        const data = response.data;
        localStorage.setItem("token", data.token);
        navigate('/CaptainHome');
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
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
            Welcome back, Driver
          </h1>
          <p className="text-lg mb-8 text-gray-400">
            Sign in to start accepting rides
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
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

            <button type="submit" className="w-full py-4 mt-4 bg-white text-black text-base font-medium rounded-lg transition-all hover:bg-gray-100">
              Sign In as Driver
            </button>
          </form>

          <div className="text-center mt-6">
            <Link to="/captain-signup" className="inline-block text-white text-sm transition-colors hover:text-gray-300 py-3">
              Don't have a driver account? Sign up
            </Link>
            <div className="text-sm text-gray-500 my-4">or</div>
            <Link to="/user-login" className="inline-block text-white text-sm transition-colors hover:text-gray-300 py-3">
              Sign in as a Rider instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin;
