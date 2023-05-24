import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container-fluid dark-bg-color" id="contato">
                <div className="col-12">
                    <div className="row">
                        <p className="secondary-color mt-5" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">Receba todas as nossas Ofertas e Novidades</p>
                        <form className="d-flex" id="news-form" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000">
                            <i className="bi bi-envelope primary-color"></i>
                            <input type="email" className="form-control me-2" placeholder="Insira seu e-mail" required />
                            <a className="btn secondary-bg-color" href='mailto:czs20172017@outlook.com'>Enviar</a>
                        </form>
                    </div>
                </div>
                <div className="col-12 col-md-12 footer-column mb-5" id="footer-center" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <p className="secondary-color">Dúvidas? Ligue para nós!</p>
                    <a className="store-phone" href='tel: 5571993763244'><i className="bi bi-telephone" ></i>(71)99294-2367</a>
                </div>
            </div>
            <div className="container" id="copy-container">
                <p>Todos os direitos reservados @2023 <span className="primary-color">Feito à mão</span></p>
            </div>
        </footer>
    );
};

export default Footer;
