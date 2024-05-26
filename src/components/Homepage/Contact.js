// Contact.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../../assets/img/dudas.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import useForm from '../../containers/Homepagecontainer/ContactLogic';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const { formDetails, buttonText, status, onFormUpdate, handleSubmit } = useForm(formInitialDetails);

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Informanos tus dudas</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="Nombres" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Apellidos" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Correo Electrónico" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Número de teléfono" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col xs={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Mensaje" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p className={status.success ? "success" : "danger"}>{status.message}</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
};
