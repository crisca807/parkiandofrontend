import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link desde react-router-dom
import '../../assets/css/Establishment.css'; // Ajusta la ruta si es necesario
import logo from '../../assets/img/loguito.png'; // Ajusta la ruta de la imagen del logo

const EstablishmentForm = () => {
  const [precioMoto, setPrecioMoto] = useState('');
  const [precioCarro, setPrecioCarro] = useState('');

  const handleGuardar = () => {
    // Aquí puedes manejar la lógica para guardar los datos
    console.log('Precio por minuto de moto:', precioMoto);
    console.log('Precio por minuto de carro:', precioCarro);
    // Ejemplo: podrías enviar los datos a una API, guardar en el estado global, etc.
  };

  return (
    <>
      <nav className="navbar-establishment">
        <Link to="/">
          <img src={logo} alt="Logo de Establecimiento" className="navbar-logo-establishment" />
        </Link>
        <div className="navbar-links-establishment">
          
        <Link to="/"><span>inicio</span></Link>
          <Link to="/profile"><span>Perfil</span></Link>
      
          <button onClick={() => alert('¡Sesión cerrada!')}>Cerrar Sesión</button>
        </div>
      </nav>

      <div className="container-establishment">
        <img src={logo} alt="Logo de la página" className="logo-establishment" />
        <h1 className="h1-establishment">Agrega tu Establecimiento</h1>
        <p className="subtitle-establishment">¡Parkiando! Tu lugar ideal para estacionar</p>
        <div className="form-group-establishment">
          <label className="label-establishment">Nombre del Establecimiento</label>
          <input type="text" className="input-establishment" />
        </div>
        <div className="form-group-establishment">
          <label className="label-establishment">Propietario del Negocio</label>
          <input type="text" className="input-establishment" />
        </div>
        <div className="form-group-establishment">
          <label className="label-establishment">Dirección</label>
          <input type="text" className="input-establishment" />
        </div>
        <div className="form-group-establishment">
          <label className="label-establishment">Capacidad</label>
          <input type="number" className="input-establishment" />
        </div>
        <div className="form-group-establishment">
          <label className="label-establishment">Precio por minuto de Moto</label>
          <input
            type="number"
            className="input-establishment"
            value={precioMoto}
            onChange={(e) => setPrecioMoto(e.target.value)}
          />
        </div>
        <div className="form-group-establishment">
          <label className="label-establishment">Precio por minuto de Carro</label>
          <input
            type="number"
            className="input-establishment"
            value={precioCarro}
            onChange={(e) => setPrecioCarro(e.target.value)}
          />
        </div>
        <button className="button-establishment" onClick={handleGuardar}>
          Guardar
        </button>
      </div>
    </>
  );
};

export default EstablishmentForm;
