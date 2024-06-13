import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Register_Form.css';

export const Parkin_Register = () => {
  return (
    <div className='register-page'>
    <div className="page-container">
      <div className="register-container">
        <div className="register-header">
          <img src={require('../../assets/img/profile.png')} alt="Usuario" className="user-icon" />
        </div>
        <form className="register-form">
          <h2>Regístrate</h2>
          <div className="form-row">
            <label>
              <input type="text" name="username" placeholder="Nombre de Usuario" required />
            </label>
            <label>
              <input type="email" name="email" placeholder="Correo Electrónico" required />
            </label>
          </div>
          <label>
            <input type="text" name="address" placeholder="Dirección" required />
          </label>
          <div className="form-row">
            <label>
              <input type="password" name="password" placeholder="Contraseña" required />
            </label>
            <label>
              <input type="password" name="confirmPassword" placeholder="Repite la Contraseña" required />
            </label>
          </div>
          <button type="submit">Registrar</button>
        </form>
        <p className="login-link">
          ¿Ya tienes cuenta? <Link to="#">Iniciar Sesión</Link>
        </p>
      </div>
      <img src={require('../../assets/img/carro prom.png')} alt="Decoración" className="decorative-icon" />
    </div>
    </div>
  );
}

export default Parkin_Register;
