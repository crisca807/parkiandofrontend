import meter1 from "../../assets/img/iniciar.jpg";
import meter2 from "../../assets/img/ubi.png";
import meter3 from "../../assets/img/buscar.png";
import meter4 from "../../assets/img/reserva.png";
import meter5 from "../../assets/img/carro.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import colorSharp from "../../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>COMO RESERVAS CON NOSOTROS</h2>
                        <p>¡Reserva tu espacio de estacionamiento en Usme desde cualquier lugar con Parkiando! Descubre cómo hacerlo de manera rápida y sencilla.  </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
                        <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Iniciar sesion</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Actualiza tu ubicacion</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Buscar parqueadero</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Realiza tu reserva</h5>
                            </div>

                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>acercate al establecimiento</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

export default Skills; 
