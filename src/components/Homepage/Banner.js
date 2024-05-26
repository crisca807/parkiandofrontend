import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useBannerLogic from '../../containers/Homepagecontainer/BannerLogic'; // Importar el hook personalizado
import headerImg from '../../assets/img/carro prom.png';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const { text } = useBannerLogic(); // Usar el hook personalizado

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                  <h1>{`¡BIENVENIDOS A PARKIANDO!`}</h1>

                  <p>Parkiando hace que aparcar sea fácil y conveniente! Reserva tu estacionamiento sin filas ni esperas desde tu celular en cualquier momento. ¡No más estrés ni pérdida de tiempo.</p>
                  <button onClick={() => console.log('connect')}>UNETE <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}