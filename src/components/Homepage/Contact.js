import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useForm from '../../containers/Homepagecontainer/ContactLogic';
import '../../assets/css/home/contact.css';

const Contact = () => {
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
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <div className="contact-form">
              <h2 className="mb-4">Informanos tus dudas</h2>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12} sm={6}>
                    <input type="text" value={formDetails.firstName} placeholder="Nombres" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                  </Col>
                  <Col xs={12} sm={6}>
                    <input type="text" value={formDetails.lastName} placeholder="Apellidos" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                  </Col>
                  <Col xs={12} sm={6}>
                    <input type="email" value={formDetails.email} placeholder="Correo Electrónico" onChange={(e) => onFormUpdate('email', e.target.value)} />
                  </Col>
                  <Col xs={12} sm={6}>
                    <input type="tel" value={formDetails.phone} placeholder="Número de teléfono" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                  </Col>
                  <Col xs={12}>
                    <textarea rows="6" value={formDetails.message} placeholder="Mensaje" onChange={(e) => onFormUpdate('message', e.target.value)} style={{ resize: 'vertical' }}></textarea>
                  </Col>
                  <Col xs={12} className="text-center">
                    <button type="submit" className="btn-submit">{buttonText}</button>
                  </Col>
                  {status.message && (
                    <Col xs={12}>
                      <p className={status.success ? "success" : "danger"}>{status.message}</p>
                    </Col>
                  )}
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
