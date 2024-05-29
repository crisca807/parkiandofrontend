import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../assets/css/IniciarSesion.css'; // Importar el archivo de estilos
import 'animate.css';

export const IniciarSesion = ({ className }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
  };

  return (
    <Container className={`login-form ${className}`}>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} xl={5}>
          <div className="form-wrapper animate__animated animate__fadeIn">
            <h2 className="text-center mb-4">Iniciar Sesión</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Ingrese su correo electrónico"
                  required
                />
              </Form.Group>
              <Form.Group controlId="password" className="mb-4">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Ingrese su contraseña"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Iniciar Sesión
              </Button>
            </Form>
            <div className="text-center mt-3">
              <span>¿No tienes cuenta? </span>
              <a href="/register" className="register-link">Registrarse</a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
