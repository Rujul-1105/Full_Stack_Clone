import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/users/UserLogin";
import UserSignUp from "./pages/users/UserSignUp";
import CaptainLogin from "./pages/captains/CaptainLogin";
import CaptainSignup from "./pages/captains/CaptainSignup";
import Home from "./pages/users/Home";
import UserProtectWrapper from "./pages/users/UserProtectWrapper";
import UserLogout from "./pages/users/UserLogout";
import CaptainHome from "./pages/captains/CaptainHome";
import CaptainProtectWrapper from "./pages/captains/CaptainProtectWrapper";
import CaptainLogout from "./pages/captains/CaptainLogout";
import ConfirmPayment from "./pages/users/ConfirmPayment";
import CaptainRiding from "./pages/captains/CaptainRiding";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-logout" element={<UserLogout />} />
        <Route path="/user-signup" element={<UserSignUp />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/payment"
          element={
            <UserProtectWrapper>
              <ConfirmPayment />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/users/logout"
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/CaptainHome"
          element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
          }
        />
        <Route
          path="/CaptainRiding"
          element={
            <CaptainProtectWrapper>
              <CaptainRiding />
            </CaptainProtectWrapper>
          }
        />
        <Route
          path="/captains/logout"
          element={
            <CaptainProtectWrapper>
              <CaptainLogout />
            </CaptainProtectWrapper>
          }
        />
      </Routes>
    </>
  );
};

export default App;
