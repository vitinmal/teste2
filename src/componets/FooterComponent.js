import React from 'react';
import './footerStyles.css';
import LogoFooter from './LogoFooter.png';

function FooterComponent() {
  return (
    <footer className="footer">
      <div className="container">
        <img src={LogoFooter} alt="LogoFooter" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius massa euismod magna sollicitudin.</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/victor_malveira/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/seu_perfil_do_linkedin" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/Vitinmal" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
