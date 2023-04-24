import React from "react";
import "../css/style.css";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
const Navbar = () => {
    return (
    <nav className="navbar fixed-top navbar-expand-lg secondary-bg-color p2" id="bottom-navbar-container">
      <div className="container">
        <Link className="navbar-brand" to="/"><img src="" alt=""/>Feito à mão</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#bottom-navbar"
          aria-controls="bottom-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>
        <ul className="navbar-nav mb-2 mb-lg-0 collapse navbar-collapse" id="bottom-navbar">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Dropdown>
              <Dropdown.Toggle >
                Produtos
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/roupas" className="dropdow-link">
                    Roupas
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/acessorios" className="dropdow-link">
                    Acessórios
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/casa" className="dropdow-link">
                    Casa
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
        
  )
}

export default Navbar;