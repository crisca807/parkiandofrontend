import React, { useState } from 'react';
import '../../assets/css/Profile.styles.css';
import perfil from '../../assets/img/perfil.jpg';
import Parqueadero1 from '../../assets/img/parqueadero1.jpg';
import Parqueadero2 from '../../assets/img/parqueadero2.jpg';
import Parqueadero3 from '../../assets/img/parqueadero3.jpg';
import Parqueadero4 from '../../assets/img/parqueadero4.jpg';


const Profile: React.FC = () => {
  const [section, setSection] = useState<string>('Perfil');
  const [nombre, setNombre] = useState<string>('Juan Pérez');
  const [fechaNacimiento, setFechaNacimiento] = useState<string>('10 de Enero de 1985');
  const [pais, setPais] = useState<string>('Colombia');
  const [correo, setCorreo] = useState<string>('juanperez@example.com');
  const [telefono, setTelefono] = useState<string>('+57 123456789');
  const [nuevoNombre, setNuevoNombre] = useState<string>('');

  const handleMenuClick = (menuOption: string) => {
    setSection(menuOption);
    // Scroll a la sección correspondiente
    const element = document.getElementById(menuOption);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleActualizarClick = () => {
    // Actualizar los estados locales con los nuevos valores ingresados en los campos de configuración de cuenta
    setNombre(nuevoNombre);
    setFechaNacimiento(nuevaFechaNacimiento);
    setPais(nuevoPais);
    setCorreo(nuevoCorreo);
    setTelefono(nuevoTelefono);
  };
  

  return (
    <div className="profile-container">
      <div className="sidebar">
        <div className="profile-pic">
          <img src={perfil} alt="Profile" />
        </div>
        <h2>Usuario: {nombre}</h2>
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
            <img src={perfil} alt="Profile" className="profile-image" />
            <p><strong>Nombre:</strong> {nombre}</p>
            <p><strong>Fecha de Nacimiento:</strong> {fechaNacimiento}</p>
            <p><strong>País:</strong> {pais}</p>
            <p><strong>Correo Electrónico:</strong> {correo}</p>
            <p><strong>Teléfono:</strong> {telefono}</p>

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
          <p></p>
          <div className="favorite-parking">
            <div className="parking">
              <img src={Parqueadero1} alt="Parqueadero 1" />
            </div>
            <p></p>
            <div className="parking">
              <img src={Parqueadero2} alt="Parqueadero 2" />
              
            </div>
            <p></p>
            <div className="parking">
              <img src={Parqueadero3} alt="Parqueadero 3" />
              
            </div>
            <p></p>
            <div className="parking">
              <img src={Parqueadero4} alt="Parqueadero 4" />
              
            </div>
          </div>
        </div>
        <div id="Configuraciones de Cuenta">
          <h1>Configuraciones de Cuenta</h1>
          <div className="profile-info">
            <p><strong>Nombre:</strong> <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} /></p>
            <p><strong>Fecha de Nacimiento:</strong> <input type="text" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} /></p>
            <p><strong>País:</strong> <input type="text" value={pais} onChange={(e) => setPais(e.target.value)} /></p>
            <p><strong>Correo Electrónico:</strong> <input type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} /></p>
            <p><strong>Teléfono:</strong> <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} /></p>
           
            {/* Agrega más campos de perfil editables aquí */}
          </div>
          <button onClick={handleActualizarClick}>Actualizar</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
