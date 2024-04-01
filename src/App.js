import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/css/App.css';
import '../src/css/login.css';
import '../src/css/Register.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import HomePageComponents from '../src/pages/HomePage';
import Login from './components/login/Login'; // Importa el componente de inicio de sesión
import Register from './components/RegisterPage/register';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Ruta para la página de inicio */}
          <Route path="/" element={<HomePageComponents />} />
          {/* Ruta para el inicio de sesión */}
          <Route path="/login" element={<Login />} />
          {/* Puedes agregar más rutas según sea necesario */}
          <Route path="/register" element={<Register />} />
          {/* Puedes agregar más rutas según sea necesario */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
