import React, { useState, useEffect } from 'react';
import '../../assets/css/User_Form.css';
import userIcon from '../../assets/img/user_icon.png';
import { Link } from 'react-router-dom';
import axios from '../../Api/Axiosconfig.js';

const User_Register = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: '',
    tipoUsuario: 'cliente'
  });
  const [error, setError] = useState('');
  const [serverStatus, setServerStatus] = useState('checking'); // Estado inicial de comprobación

  useEffect(() => {
    // Función para verificar la conexión al servidor
    const checkServerConnection = async () => {
      try {
        // Realiza una solicitud GET a un endpoint existente para verificar la conexión
        const response = await axios.get('/ping');
        if (response.status === 200) {
          setServerStatus('connected');
        } else {
          setServerStatus('disconnected');
          console.error('No se pudo conectar al servidor:', response.statusText);
        }
      } catch (error) {
        setServerStatus('disconnected');
        console.error('No se pudo conectar al servidor:', error.message);
      }
    };

    checkServerConnection();
  }, []);

  const handleCheckboxChange = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (serverStatus !== 'connected') {
      setError('No se puede conectar al servidor. Por favor, inténtalo de nuevo más tarde.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    try {
      const response = await axios.post('/api/user', {
        nombre: formData.nombre,
        apellido: formData.apellido,
        email: formData.email,
        password: formData.password,
        tipoUsuario: formData.tipoUsuario.toLowerCase() // Asegura que el tipo de usuario se envíe en minúsculas
      });
      console.log('Usuario registrado:', response.data);
      // Limpiar el formulario después de un registro exitoso, redirigir o mostrar mensaje de éxito
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        confirmPassword: '',
        tipoUsuario: ''
      });
      setError('');
      alert('¡Usuario registrado exitosamente!');
    } catch (error) {
      console.error('Error al registrar usuario:', error.response); // Mostrar el error completo para depuración
      if (error.response && error.response.status === 400) {
        setError('Error al registrar usuario: ' + error.response.data.error); // Mostrar mensaje de error del servidor
      } else {
        setError('Error al registrar usuario. Inténtalo de nuevo más tarde.'); // Mensaje genérico para otros errores
      }
    }
  };

  if (serverStatus === 'checking') {
    return <p>Verificando conexión con el servidor...</p>; // Puedes mostrar un mensaje de carga mientras se verifica la conexión
  }

  return (
    <div className='user-register-page'>
      <div className="user-register-wrapper">
        <div className="user-register-container">
          <div className="form-container">
            <h2>Registro de Usuario</h2>
            {serverStatus === 'disconnected' && (
              <p className="error">No se puede conectar al servidor. Por favor, inténtalo de nuevo más tarde.</p>
            )}
            <form className="user-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  required
                  value={formData.nombre}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="apellido"
                  placeholder="Apellido"
                  required
                  value={formData.apellido}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-row">
                <input
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-row">
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Repite la Contraseña"
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-row">
                <select
                  name="tipoUsuario"
                  required
                  value={formData.tipoUsuario}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Tipo de Usuario</option>
              
                  <option value="client">Cliente</option>
                </select>
              </div>
              <div className="terms-container">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={handleCheckboxChange}
                />
                <label>Acepto <Link to="/terminos_condiciones">términos y condiciones</Link></label>
              </div>
              {error && <p className="error">{error}</p>}
              <button type="submit" disabled={!acceptedTerms || serverStatus !== 'connected'} className={acceptedTerms && serverStatus === 'connected' ? 'active' : ''}>
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