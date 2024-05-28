import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/img/loguito.png';
import useNavbarLogic from '../../containers/Homepagecontainer/NavbarLogic'; // Importar el hook personalizado
import { BrowserRouter as Router, NavLink } from "react-router-dom"; // Importar NavLink para la navegación

import '../../assets/css/Navregister.css'; // Asegúrate de importar los estilos

const NavBarRegister = () => {
  const { activeLink, scrolled, onUpdateActiveLink } = useNavbarLogic(); // Usar el hook personalizado

  return (
    <Router>
      <Navbar expand="md" className={`navbar-custom ${scrolled ? "scrolled" : ""}`}>
        <Container className="navbar-container">
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link
                as={NavLink}
                to="/reservas"
                className={activeLink === 'reservas' ? 'active' : ''}
                onClick={() => onUpdateActiveLink('reservas')}
              >
                Tus Reservas
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/perfil"
                className={activeLink === 'perfil' ? 'active' : ''}
                onClick={() => onUpdateActiveLink('perfil')}
              >
                Tu Perfil
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/calificaciones"
                className={activeLink === 'calificaciones' ? 'active' : ''}
                onClick={() => onUpdateActiveLink('calificaciones')}
              >
                Calificaciones
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

export default NavBarRegister; // Exportar como el valor predeterminado
