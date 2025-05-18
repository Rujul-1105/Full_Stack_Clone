import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../../context/UserContext';

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
        localStorage.setItem("token", data.token);
        navigate('/home');
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col text-gray-800 overflow-x-hidden">
      <div className="text-2xl font-bold py-8 px-8 -tracking-[0.5px]">
        Uber
      </div>
      <div className="w-full px-8 flex flex-col items-center flex-1">
        <div className="w-full max-w-md mx-auto p-4 bg-white rounded-xl">
          <h1 className="text-4xl font-bold mb-3 -tracking-[0.5px] text-black">
            Welcome back
          </h1>
          <p className="text-lg mb-8 text-gray-600">
            Sign in to continue your journey with Uber
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
                className="w-full px-4 py-4 border border-gray-200 rounded-lg bg-white text-black text-base transition-all focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
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
                className="w-full px-4 py-4 border border-gray-200 rounded-lg bg-white text-black text-base transition-all focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
              />
            </div>

            <button type="submit" className="w-full py-4 mt-4 bg-black text-white text-base font-medium rounded-lg transition-all hover:bg-gray-800">
              Sign In
            </button>
          </form>

          <div className="text-center mt-6">
            <Link to="/user-signup" className="inline-block text-black text-sm transition-colors hover:text-gray-600 py-3">
              Don't have an account? Sign up
            </Link>
            <div className="text-sm text-gray-500 my-4">or</div>
            <Link to="/captain-login" className="inline-block text-black text-sm transition-colors hover:text-gray-600 py-3">
              Sign in as a Driver instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
