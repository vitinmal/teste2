import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'; 
import './Header.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import logo from '../componets/Uberlandialogorodape.png'; 

const Header = () => {
  return (
    <header className="bg-custom">
      <div className="container-menu">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-4 text-center text-md-left">
            <NavLink to="/" className="navbar-brand text-white">
              <img src={logo} alt="Logo" className="logo" />
            </NavLink>
          </div>
          <div className="col-12 col-md-4 text-center">
            <nav className="navbar navbar-expand-md">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link text-white" activeClassName="active">Copa Multivix</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/campeonato" className="nav-link text-white" activeClassName="active">Campeonato</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/documento" className="nav-link text-white" activeClassName="active">Regulamento</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contato" className="nav-link text-white" activeClassName="active">Vídeos</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-12 col-md-4 text-center text-md-right">
            <div className="sociais">
              <a href="https://www.instagram.com/seu_perfil_instagram" target="_blank" rel="noreferrer">
                <button className="btn btn-link text-white p-0"><FaInstagram /></button>
              </a>
              <a href="https://www.facebook.com/Vitinmal" target="_blank" rel="noreferrer">
                <button className="btn btn-link text-white p-0"><FaFacebook /></button>
              </a>
              <a href="https://www.linkedin.com/in/seu_perfil_linkedin" target="_blank" rel="noreferrer">
                <button className="btn btn-link text-white p-0"><FaLinkedin /></button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
