import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/loguito.png'; // Asegúrate de importar tu logo adecuadamente
import '../../assets/css/reset.css';
const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Aquí puedes implementar la lógica para enviar una solicitud de reestablecimiento de contraseña
    // Por ejemplo, enviar el correo electrónico a un endpoint de backend o mostrar un mensaje de éxito
    alert(`Se enviará un correo electrónico de reestablecimiento a: ${email}`);
    // Puedes redirigir al usuario a otra página después de enviar el correo, si es necesario
  };

  return (
    <>
      <nav className="navbar-resetpassword">
        <Link to="/">
          <img src={logo} alt="Logo de Establecimiento" className="navbar-logo-resetpassword" />
        </Link>
        <div className="navbar-links-resetpassword">
          <Link to="/"><span>Inicio</span></Link>
          <Link to="/profile"><span>Perfil</span></Link>
        </div>
      </nav>

      <div className="container-resetpassword">
        <img src={logo} alt="Logo de la página" className="logo-resetpassword" />
        <h1 className="h1-resetpassword">Reestablecer Contraseña</h1>
        <p className="subtitle-resetpassword">Ingresa tu correo electrónico para reestablecer tu contraseña</p>
        <div className="form-group-resetpassword">
          <label className="label-resetpassword">Correo Electrónico</label>
          <input
            type="email"
            className="input-resetpassword"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="button-resetpassword" onClick={handleResetPassword}>
          Enviar Correo de Reestablecimiento
        </button>
      </div>
    </>
  );
};

export default ResetPasswordPage;
