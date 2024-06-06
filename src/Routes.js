import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegisterOptions from "./components/Registeroptions/options.js";
import User_Register from './components/Homepage/User_Register.js';
import Parkin_Register from './components/Homepage/Parking_Register.js';
import SignIn from './components/Loginpage/SignIn.js';

// Método para renderizar RegisterOptions
const renderRegisterOptions = () => <RegisterOptions />;

// Método para renderizar User_Register
const renderUserRegister = () => <User_Register />;

// Método para renderizar Parkin_Register
const renderParkingRegister = () => <Parkin_Register />;

// Método para renderizar SignIn
const renderSignIn = () => <SignIn />;

// Componente que contiene las rutas
function Routes() {
  return (
    <Router>
      <div className='Routes'>
        <Route exact path="/" element={renderRegisterOptions} />
        <Route path="/user_register" element={renderUserRegister} />
        <Route path="/parking_register" element={renderParkingRegister} />
        <Route path="/signin" element={renderSignIn} />
      </div>
    </Router>
  );
};

export default Routes;
