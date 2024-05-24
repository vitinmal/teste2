
import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'; 
import './Header.css'; 

const Header = () => {
  return (
    <header>
      <div className='banner'></div>
      <div className="container">
        
        <div className="menu">
          <nav>
            <NavLink to="/" activeClassName="active">Home</NavLink> {/* Adicionado activeClassName */}
            <NavLink to="/campeonato" activeClassName="active">Campeonato</NavLink> {/* Adicionado activeClassName */}
            <NavLink to="/sobre" activeClassName="active">Sobre</NavLink> {/* Adicionado activeClassName */}
            <NavLink to="/contato" activeClassName="active">Contato</NavLink> {/* Adicionado activeClassName */}
          </nav>
        </div>
        <div className="sociais">
          <a href="https://www.instagram.com/seu_perfil_instagram" target="_blank" rel="noreferrer">
            <button><FaInstagram /></button>
          </a>
          <a href="https://www.facebook.com/Vitinmal" target="_blank" rel="noreferrer">
            <button><FaFacebook /></button>
          </a>
          <a href="https://www.linkedin.com/in/seu_perfil_linkedin" target="_blank" rel="noreferrer">
            <button><FaLinkedin /></button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
