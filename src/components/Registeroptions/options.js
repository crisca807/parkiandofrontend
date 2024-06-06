import React from 'react';
import '../../assets/css/Registeroptions.css'; 
import { Link } from 'react-router-dom';

const RegisterOptions = () => {
  return (
    <div className="register-options-container">
      <div className="logo-section">
    
      </div>
      <h2>¡Registrate en parkiando!</h2>
      <p>¡Explora Usme con Parkiando! Encuentra estacionamiento al instante y olvídate de las vueltas innecesarias. ¡Regístrate hoy y libérate del estrés de buscar parqueadero en Bogotá!</p>
      <div className="options">
        <div className="option parkiador">
          <button onClick={() => console.log('Registrarse como Parkiador')}>
            <link to="user_register">Regístrate como PARKIADOR.</link>
          </button>
        </div>
        <div className="option propietario">
          <button onClick={() => console.log('Registrarse como Propietario de Parqueadero')}>
            <link to="parking_register">Regístrate como PROPIETARIO DE PARQUEADERO.</link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterOptions;
