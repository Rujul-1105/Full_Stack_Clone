import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
        navigate("/user-login");
    }
  }, [token]);

  axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.status === 200) {
      setIsLoading(false);
    }
  }).catch((err) => {
    localStorage.removeItem("token");
    navigate("/user-login");
  });

  if (isLoading) {
    return <div>Loading...</div>;
  } 


  return <>{children}</>;
};

export default UserProtectWrapper;
