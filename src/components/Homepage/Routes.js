import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterOptions from "../Registeroptions/options";
import User_Register from './User_Register';
import Parkin_Register from './Parking_Register';
import SignIn from '../Loginpage/SignIn';
import Profile from './Profile.tsx';

export const Routes = () => {
  return (
    <Router>
        <Routes>
        <Route path="/register-options" component={RegisterOptions} />
        <Route path="/user-register" component={User_Register} />
        <Route path="/parking-register" component={Parkin_Register} />
        <Route path="/signin" component={SignIn} />
        {/* Agrega más rutas según sea necesario */}
        {/* Si ninguna de las rutas anteriores coincide, redirecciona a la página de inicio */}
        <Route path="/" component={RegisterOptions} />
        </Routes>
    </Router>
  );
};

export default Routes;
