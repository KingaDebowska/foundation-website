import React from "react";
import Typed from "react-typed";
import "../../galeria.css";
import Carousel from "react-bootstrap/Carousel";
import spacer from "../../spacer.jpg";
import fun from "../../fun.jpeg";
import galeria1 from "../../galeria1.jpeg";
import galeria2 from "../../galeria2.jpeg";
import galeria3 from "../../galeria3.jpeg";
import galeria4 from "../../galeria4.jpeg";

const Galeria = () => {
  return (
    <div className="wrapper-galeria">
      <div className="main-head-wrapper-galeria">
        <div className="main-head-galeria">
          <h1>GALERIA</h1>
          <div className="short-text-galeria">
            <Typed
              // className="typed-text-podopieczni"
              strings={["Twoi kandydaci na przyjaciela"]}
              typeSpeed={50}
              backSpeed={60}
              loop
            />
          </div>
        </div>
      </div>
      {/* **************CONTENT*************** */}
      <div className="content-galeria">
        <Carousel className="carousel">
          <Carousel.Item className="car-item">
            <img
              className="car-img d-block w-100"
              src={galeria1}
              alt="First slide"
            />
            <Carousel.Caption className="car-caption">
              <h3>Zabawa na świeżym powietrzu</h3>
              <p>Staramy się zapewnić pieskom szczęśliwe życie! </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="car-item">
            <img
              className="car-img d-block w-100"
              src={fun}
              alt="First slide"
            />
            <Carousel.Caption className="car-caption">
              <h3>Zabawa na świeżym powietrzu</h3>
              <p>Bo wybiegany piesek to szczęśliwy piesek! </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="car-item">
            <img
              className="car-img d-block w-100"
              src={galeria2}
              alt="Second slide"
            />

            <Carousel.Caption className="car-caption">
              <h3>Nasi wolontariusze</h3>
              <p>Ty też możesz nim zostać!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="car-item">
            <img
              className="car-img d-block w-100"
              src={galeria3}
              alt="Third slide"
            />

            <Carousel.Caption className="car-caption">
              <h3>Nasi wolontariusze</h3>
              <p>Ty też możesz nim zostać!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="car-item">
            <img
              className="car-img d-block w-100"
              src={galeria4}
              alt="First slide"
            />
            <Carousel.Caption className="car-caption">
              <h3>Nasi wolontariusze</h3>
              <p>Dołącz do nas!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Galeria;
