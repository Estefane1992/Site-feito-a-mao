import React from "react";
import Card  from "react-bootstrap/Card";
import  Col  from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Produto9 from "../../../img/produtos/cachecol.jpg";
import Produto10 from "../../../img/produtos/sacola.jpg";
import Produto11 from "../../../img/produtos/bolsa.png";
import Produto12 from "../../../img/produtos/Chapeu.png";

const Acessorios = () => {
    return(
        <section>
            <div className="container" id="best-sellers">
      <h2 className="title primary-color" id="roupas" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">Acessórios</h2>
        <Row xs={1} md={4} className="g-5">
          <Col data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            <Card className="produto-card">
              <Card.Img variant="top" src={Produto9}  />
              <Card.Body>
                <Card.Title className="card-title">Cachecol</Card.Title>
                <Card.Subtitle className="card-text">R$70.00</Card.Subtitle>
                <Link className="btn" to="/comprar">Comprar</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            <Card className="produto-card">
              <Card.Img variant="top" src={Produto10}  />
              <Card.Body>
                <Card.Title className="card-title">Sacola</Card.Title>
                <Card.Subtitle className="card-text">R$90.00</Card.Subtitle>
                <Link className="btn" to="/comprar">Comprar</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            <Card className="produto-card">
              <Card.Img variant="top" src={Produto11}  />
              <Card.Body>
                <Card.Title className="card-title">Bolsa</Card.Title>
                <Card.Subtitle className="card-text">R$109,99</Card.Subtitle>
                <Link className="btn" to="/comprar">Comprar</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            <Card className="produto-card">
              <Card.Img variant="top" src={Produto12}  />
              <Card.Body>
                <Card.Title className="card-title">Chapéu</Card.Title>
                <Card.Subtitle className="card-text">R$69.99</Card.Subtitle>
                <Link className="btn" to="/comprar">Comprar</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
        </section>
    )
}



export default Acessorios;