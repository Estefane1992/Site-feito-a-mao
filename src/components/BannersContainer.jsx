import React, { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/style.css"
import Banner1 from "../img/banner1.jpg"
import Banner2 from '../img/banner2.jpg';
import Carousel from 'react-bootstrap/Carousel';

import { Col, Row } from "react-bootstrap";



const BannersContainer = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section>
    <div className="container" >
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block  w-100 carousel-img"
          src={Banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="carousel-titulo">Artesanatos em crochê</h3>
          <p>Feito à mão.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={Banner2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="carousel-titulo">Qualidade nos produtos</h3>
          <p>Fabricação própria.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className="container" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="3000">
      <Row xs={1} md={4}  style={{ justifyContent: "center"}}>
        <Col className="card-banner1" >
          <div className="card-content" data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="3000">
            <span>Roupas</span>
          </div>
        </Col>
        <Col className="card-banner2" >
          <div className="card-content" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="3000">
            <span>Acessórios</span>
          </div>
        </Col>
        <Col className="card-banner3" >
          <div className="card-content" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="3000">
            <span>Casa</span>
          </div>
        </Col>
      </Row>
    </div>
    </section>

    
  );
};

export default BannersContainer;
