import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  }, [token]);

  axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.status === 200) {
      setIsLoading(false);
    }
  }).catch((err) => {
    localStorage.removeItem("token");
    navigate("/captain-login");
  });


  if (isLoading) {
    return <div>Loading...</div>;
  } 

  return <>{children}</>;
};

export default CaptainProtectWrapper;
