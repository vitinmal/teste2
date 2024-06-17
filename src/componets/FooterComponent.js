import React from 'react';
import './footerStyles.css';
import Uberlandialogorodape from './Uberlandialogorodape.png';

function FooterComponent() {
  return (
    <footer className="footer">
      <div className="containerFooter">
        <img className='logobaixo' src={Uberlandialogorodape} alt="Uberlandialogorodape" />
         <p>|© 2024 Copa Futsal Multivix-Uberlandia</p>

        </div>
    </footer>
  );
}

export default FooterComponent;
