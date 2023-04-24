import React from "react";
import Card  from "react-bootstrap/Card";
import  Col  from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Produto5 from "../../../img/produtos/capa-almofada.jpg";
import Produto6 from "../../../img/produtos/jogo-capa-pra-cadeiras.jpg";
import Produto7 from "../../../img/produtos/capa-botijao.jpg";
import Produto8 from "../../../img/produtos/capa-maquina.jpg";

const Casa = () => {
    return(
        <section>
            <div className="container" id="best-sellers">
                <h2 className="title primary-color" id="roupas" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">Casa</h2>
                <Row xs={1} md={4} className="g-5">
                <Col data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <Card className="produto-card">
                    <Card.Img variant="top" src={Produto5}  />
                    <Card.Body>
                        <Card.Title className="card-title">Capas de almofadas</Card.Title>
                        <Card.Subtitle className="card-text">R$80.00</Card.Subtitle>
                        <Link className="btn" to="/comprar">Comprar</Link>
                    </Card.Body>
                    </Card>
                </Col>
                <Col data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <Card className="produto-card">
                    <Card.Img variant="top" src={Produto6}  />
                    <Card.Body>
                        <Card.Title className="card-title">jogo de mesa</Card.Title>
                        <Card.Subtitle className="card-text">R$300.00</Card.Subtitle>
                        <Link className="btn" to="/comprar">Comprar</Link>
                    </Card.Body>
                    </Card>
                </Col>
                <Col data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <Card className="produto-card">
                    <Card.Img variant="top" src={Produto7}  />
                    <Card.Body>
                        <Card.Title className="card-title">Capa para botijão</Card.Title>
                        <Card.Subtitle className="card-text">R$90.00</Card.Subtitle>
                        <Link className="btn" to="/comprar">Comprar</Link>
                    </Card.Body>
                    </Card>
                </Col>
                <Col data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <Card className="produto-card">
                    <Card.Img variant="top" src={Produto8}  />
                    <Card.Body>
                        <Card.Title className="card-title">Capa para maquina</Card.Title>
                        <Card.Subtitle className="card-text">R$200.00</Card.Subtitle>
                        <Link className="btn" to="/comprar">Comprar</Link>
                    </Card.Body>
                    </Card>
                </Col>
                </Row>
            </div>
        </section>
    )
}



export default Casa;