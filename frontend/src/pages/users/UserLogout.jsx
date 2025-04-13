import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const UserLogout = () => {

    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    // const handleLogout = async () => {
        // const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            if (res.status === 200) {
                localStorage.removeItem("token");
                navigate("/user-login");
            }
        });
    // }
    return <div>UserLogout</div>;
}

export default UserLogout