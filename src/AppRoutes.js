import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterOptions from './components/Registeroptions/options.js';
import User_Register from './components/Homepage/User_Register.js';
import Parkin_Register from './components/Homepage/Parking_Register.js';
import SignIn from './components/Loginpage/SignIn.js';

// Componente que contiene las rutas
function AppRoutes() {
  return (
    <Router>
      <div className='Routes'>
        <Routes>
          <Route path="/" element={<RegisterOptions />} />
          <Route path="/user_register" element={<User_Register />} />
          <Route path="/parking_register" element={<Parkin_Register />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRoutes;
