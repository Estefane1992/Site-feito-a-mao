import React, { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/style.css"
import Banner1 from "../img/banner1.jpg"
import Banner2 from '../img/banner2.jpg';



const BannersContainer = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="container">
      <div id="slider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" id="home">
          <div className="carousel-item active" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
            <img
              src={Banner1}
              className="d-block w-100 img-fluid"
              alt="..."
            />
            <div className="carousel-caption primary-bg-color">
              <h5>Artesanatos em crochê</h5>
              <p>Feito à mão</p>
            </div>
          </div>
          <div className="carousel-item" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            <img
              src={Banner2}
              className="d-block w-100 img-fluid"
              alt="..."
            />
            <div className="carousel-caption primary-bg-color">
              <h5>Qualidade nos produtos</h5>
              <p>Fabricação própria</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#slider"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#slider"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container" id="mini-banners">
        <div className="row justify-content-around">
          <div className="col-12" id="mini-banner-1" data-aos="flip-up" data-aos-easing="linear" data-aos-duration="1500">
            <h2>Roupas</h2>
          </div>
          <div className="col-12" id="mini-banner-2" data-aos="flip-up" data-aos-easing="linear" data-aos-duration="2000">
            <h2>Acessórios</h2>
          </div>
          <div className="col-12" id="mini-banner-3" data-aos="flip-up" data-aos-easing="linear" data-aos-duration="3000">
            <h2>Casa</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannersContainer;
