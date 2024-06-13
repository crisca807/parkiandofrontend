import React from 'react';
import '../../assets/css/Registeroptions.css'; 
import { Link } from 'react-router-dom';

const RegisterOptions = () => {
  return (
    <div className="register-options-container">
      <div className="logo-section">
        {/* Aquí puedes agregar un logo si lo tienes */}
      </div>
      <h2>¡Registrate en parkiando!</h2>
      <p>¡Explora Usme con Parkiando! Encuentra estacionamiento al instante y olvídate de las vueltas innecesarias. ¡Regístrate hoy y libérate del estrés de buscar parqueadero en Bogotá!</p>
      <div className="options">
        <div className="option parkiador">
          <Link to="/user_register">
            <button onClick={() => console.log('Registrarse como Parkiador')}>
              Regístrate como PARKIADOR
            </button>
          </Link>
        </div>
        <div className="option propietario">
          <Link to="/parking_register">
            <button onClick={() => console.log('Registrarse como Propietario de Parqueadero')}>
              Regístrate como PROPIETARIO DE PARQUEADERO
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterOptions;
