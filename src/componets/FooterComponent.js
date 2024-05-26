import React from 'react';
import './footerStyles.css';
import Uberlandialogorodape from './Uberlandialogorodape.png';

function FooterComponent() {
  return (
    <footer className="footer">
      <div className="container">
        <img className='logobaixo' src={Uberlandialogorodape} alt="Uberlandialogorodape" />
         <p>| Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius massa euismod
           magna sollicitudin.</p>

        </div>
    </footer>
  );
}

export default FooterComponent;
