import React from "react";
import Card  from "react-bootstrap/Card";
import  Col  from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Produto1 from "../../../img/produtos/saida-praia.jpg";
import Produto2 from "../../../img/produtos/vestido-vermelho.jpg";
import Produto3 from "../../../img/produtos/saia-longa.jpg";
import Produto4 from "../../../img/produtos/conjunto.jpg";

const Roupas = () => {
    return(
        <section>
           
        <div className="container" id="best-sellers">
            <h2 className="title primary-color" id="roupas" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">Roupas</h2>
            <Row xs={1} md={4} className="g-5">
            <Col data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <Card className="produto-card">
                <Card.Img variant="top" src={Produto1} className="card-img"  />
                <Card.Body>
                    <Card.Title className="card-title">Saida de praia</Card.Title>
                    <Card.Subtitle className="card-text">R$160.00</Card.Subtitle>
                    <Link className="btn" to="/comprar">Comprar</Link>
                </Card.Body>
                </Card>
            </Col>
            <Col data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <Card className="produto-card">
                <Card.Img variant="top" src={Produto2}  />
                <Card.Body>
                    <Card.Title className="card-title">Vestido curto</Card.Title>
                    <Card.Subtitle className="card-text">R$250.00</Card.Subtitle>
                    <Link className="btn" to="/comprar">Comprar</Link>
                </Card.Body>
                </Card>
            </Col>
            <Col data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <Card className="produto-card">
                <Card.Img variant="top" src={Produto3}  />
                <Card.Body>
                    <Card.Title className="card-title">Saia longa</Card.Title>
                    <Card.Subtitle className="card-text">R$180.99</Card.Subtitle>
                    <Link className="btn" to="/comprar">Comprar</Link>
                </Card.Body>
                </Card>
            </Col>
            <Col data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <Card className="produto-card">
                <Card.Img variant="top" src={Produto4}  />
                <Card.Body>
                    <Card.Title className="card-title">Conjunto</Card.Title>
                    <Card.Subtitle className="card-text">R$129.50</Card.Subtitle>
                    <Link className="btn" to="/comprar">Comprar</Link>
                </Card.Body>
                </Card>
            </Col>
            </Row>
            </div>
        </section>
    )
}



export default Roupas;