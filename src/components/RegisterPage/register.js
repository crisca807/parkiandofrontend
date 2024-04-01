import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link desde React Router

export const Register = (props) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Nombre:', name);
        console.log('Apellidos:', lastName);
        console.log('Email:', email);
        console.log('Contraseña:', password);
    }

    return (
        <div className="eight-form-container">
            <div className="register-header">
                <div className="logo"></div>
                <h2>Registrese</h2>
            </div>
           
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Tu nombre" id="name" name="name" />
            <label htmlFor="name">Nombre</label> 

            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Tus apellidos" id="lastname" name="lastname" />
            <label htmlFor="lastname">Apellidos</label> 

            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="Correo electronico" />
                
                <label htmlFor="password">Contraseña</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="contraseña" />
                
                <button type="submit">Registrarse</button>
            </form>
            
            {/* Utiliza Link para crear un enlace a la ruta de inicio de sesión */}
            <Link className="link-btn" to="/login">¿Ya tienes cuenta? Inicia sesión aquí.</Link>
        </div>
    );
}

export default Register;