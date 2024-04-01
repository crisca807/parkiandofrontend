import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard";
import projImg1 from "../../assets/img/parq1.png";
import projImg2 from "../../assets/img/parq2.png";
import projImg3 from "../../assets/img/parq3.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      title: "PARQUEADERO VALLES DE CAFAM",
      description: "Por sus variedad de precio",
      imgUrl: projImg1,
    },
    {
      title: "PARQUEADERO SERRANIAS",
      description: "Amplios espacios de aparcamiento",
      imgUrl: projImg2,
    },
    {
      title: "PARQUEADERO LOS ANGELES",
      description: "Alta flujo de vehiculos",
      imgUrl: projImg3,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>NUESTROS ESTABLECIMIENTOS ☆☆☆</h2>
                <p>Descubre nuestros parqueaderos preferidos, seleccionados para ofrecerte la mejor experiencia. Únete a nosotros y disfruta de un estacionamiento excepcional</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">ESTABLECIMIENTOS ☆☆☆</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">¿TIENES DUDAS?</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">SOBRE NOSOTROS</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Desafiamos el tedio de encontrar parqueaderos en Usme! Nuestra solución: una plataforma donde encuentras y reservas fácilmente desde múltiples opciones según tu ubicación. ¡Adiós a las largas esperas y trayectos agotadores! Descubre cómo simplificamos el estacionamiento en Usme. ¡Tu comodidad es nuestra meta! </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Desafiamos el tedio de encontrar parqueaderos en Usme! Nuestra solución: una plataforma donde encuentras y reservas fácilmente desde múltiples opciones según tu ubicación. ¡Adiós a las largas esperas y trayectos agotadores! Descubre cómo simplificamos el estacionamiento en Usme. ¡Tu comodidad es nuestra meta! </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects;