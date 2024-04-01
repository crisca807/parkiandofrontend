import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link desde React Router


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <div className="login-header">
            <div className="logo"></div>

                <h2>Iniciar sesión</h2>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="Correo electronico" />
                <label htmlFor="password">Contraseña</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="contraseña" />
                <button type="submit">Iniciar sesión</button>
            </form>
            {/* Utiliza Link para crear un enlace a la ruta de registro */}
            <Link className="link-btn" to="/register">¿No tienes una cuenta? Regístrate aquí.</Link>
        </div>
    );
}

export default Login;