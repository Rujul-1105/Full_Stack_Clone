import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";


const App = () => {
  return (
  <>

  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/user-login' element={<UserLogin />} />
    <Route path='/user-signup' element={<UserSignUp />} />
    <Route path='/captain-signup' element={<CaptainSignup />} />
    <Route path='/captain-login' element={<CaptainLogin />} />
  </Routes>
  
  </>
  )
}

export default App
