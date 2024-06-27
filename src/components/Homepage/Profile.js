import React, { useState, useEffect } from 'react';
import '../../assets/css/Profile.styles.css';
import logoPK from '../../assets/img/logoPK.jpg';
import Parqueadero3 from '../../assets/img/parqueadero3.jpg';
import Parqueadero4 from '../../assets/img/parqueadero4.jpg';

const Profile = () => {
  const [section, setSection] = useState('Perfil');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Obtener datos del usuario desde localStorage al cargar el componente
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setName(user.name);
      setLastName(user.lastName);
      setEmail(user.email);
    }
  }, []); // El array vacío como segundo argumento ejecuta el efecto solo una vez al montar el componente

  const handleMenuClick = (menuOption) => {
    setSection(menuOption);
    // Scroll a la sección correspondiente
    const element = document.getElementById(menuOption);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="profile-container">
      <div className="sidebar">
        <div className="profile-pic">
          <img src={logoPK} alt="Profile" />
        </div>
        <h2>Usuario: {name} {lastName}</h2>
        <p>Email: {email}</p>
        <ul>
          <li onClick={() => handleMenuClick('Perfil')}>Perfil</li>
          <li onClick={() => handleMenuClick('Historial de Reservas')}>Historial de Reservas</li>
          <li onClick={() => handleMenuClick('Parqueaderos Favoritos')}>Parqueaderos Favoritos</li>
          <li onClick={() => handleMenuClick('Configuraciones de Cuenta')}>Configuraciones de Cuenta</li>
          <li>Cerrar Sesión</li>
        </ul>
      </div>
      <div className="content">
        <div id="Perfil">
          <h1>Perfil</h1>
          <div className="profile-info">
            <p><strong>Nombre:</strong> {name}</p>
            <p><strong>Apellido:</strong> {lastName}</p>
            <p><strong>Email:</strong> {email}</p>
            {/* Agrega más datos del perfil aquí */}
          </div>
        </div>
        <div id="Historial de Reservas">
          <h1>Historial de Reservas</h1>
          <div className="reservation">
            <img src={Parqueadero4} alt="Profile" className="profile-image" />
            <h2>Reserva Confirmada:</h2>
            <p><strong>Fecha:</strong> 01/06/2024</p>
            <p><strong>Hora de Entrada:</strong> 10:00 AM</p>
            <p><strong>Hora de Salida:</strong> 12:00 PM</p>
            <p><strong>Parqueadero:</strong> Parqueadero XYZ</p>
            <p><strong>Costo:</strong> $10.00</p>
          </div>
          <div className="reservation">
            <img src={Parqueadero3} alt="Parqueadero" className="parking-image" />
            <h2>Reserva Pendiente:</h2>
            <p><strong>Fecha:</strong> 02/06/2024</p>
            <p><strong>Hora de Entrada:</strong> 11:00 AM</p>
            <p><strong>Hora de Salida:</strong> 1:00 PM</p>
            <p><strong>Parqueadero:</strong> Parqueadero ABC</p>
            <p><strong>Costo:</strong> Pendiente</p>
          </div>
          {/* Agrega más reservas aquí */}
        </div>
        <div id="Parqueaderos Favoritos">
          <h1>Parqueaderos Favoritos</h1>
          <div className="favorite-parking">
            <div className="parking">
              <p>Parqueadero el Tiempo</p>
            </div>
            <div className="parking">
              <p>Parqueadero Los Héroes</p>
            </div>
            <div className="parking">
              <p>Parqueadero Santa Fe</p>
            </div>
            <div className="parking">
              <p>Parqueadero Museo Nacional</p>
            </div>
            <div className="parking">
              <p>Parqueadero La Candelaria</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
