import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaptainLogout = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleLogout = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                localStorage.removeItem("token");
                navigate("/captain-login");
            }
        } catch (error) {
            console.error('Logout failed:', error);
        }
    }

    return (
        <div className="logout-container">
            <h2>Are you sure you want to logout?</h2>
            <button onClick={handleLogout} className="logout-button">
                Logout
            </button>
        </div>
    );
}

export default CaptainLogout

