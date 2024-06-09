import React, { useState } from 'react';
import '../../assets/css/User_Form.css';
import userIcon from '../../assets/img/user_icon.png';
import { Link } from 'react-router-dom';

const User_Register = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleCheckboxChange = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  return (
    <div className='user-register-page'>
    <div className="user-register-wrapper">
      <div className="user-register-container">
        <div className="form-container">
          <h2>Registro de Usuario</h2>
          <form className="user-form">
            <div className="form-row">
              <input type="text" name="username" placeholder="Nombre de Usuario" required />
              <input type="email" name="email" placeholder="Correo Electrónico" required />
            </div>
            <div className="form-row">
              <input type="password" name="password" placeholder="Contraseña" required />
              <input type="password" name="confirmPassword" placeholder="Repite la Contraseña" required />
            </div>
            <div className="form-row">
              <select name="vehicleType" required>
                <option value="" disabled selected>Tipo de Vehículo</option>
                <option value="moto">Moto</option>
                <option value="carro">Carro</option>
              </select>
              <input type="text" name="vehiclePlate" placeholder="Placa del Vehículo" required />
            </div>
            <div className="terms-container">
              <input type="checkbox" checked={acceptedTerms} onChange={handleCheckboxChange} />
              <label>Acepto <a href="./terminos_condiciones.js">términos y condiciones</a></label>
            </div>
            <button type="submit" disabled={!acceptedTerms} className={acceptedTerms ? 'active' : ''}>
              Enviar
            </button>
          </form>
          <p className="login-link">
            ¿Ya tienes cuenta? <Link to="/signin">Iniciar Sesión</Link>
          </p>
        </div>
        <div className="separator"></div>
        <div className="image-container">
          <div className="top-image">
            <img src={userIcon} alt="Usuario" className="user-icon" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default User_Register;
