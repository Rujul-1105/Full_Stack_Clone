import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Home from "./pages/Home";

const App = () => {
  return (
  <>

  <Routes>
    <Route path='/' element={<Start />} />
    <Route path='/user-login' element={<UserLogin />} />
    <Route path='/user-signup' element={<UserSignUp />} />
    <Route path='/captain-signup' element={<CaptainSignup />} />
    <Route path='/captain-login' element={<CaptainLogin />} />
    <Route path='/home' element={<Home />} />
  </Routes>
  
  </>
  )
}

export default App
