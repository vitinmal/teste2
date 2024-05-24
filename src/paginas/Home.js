// src/pages/Home.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import  './HomeStyle.css';


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Desativar a rotação automática
    arrows: true,
    className: 'carousel',
    centerMode: true,
    centerPadding: '0',
    appendDots: (dots) => (
      <div className="carousel-dots">
        <ul>{dots}</ul>
      </div>
     ),
     responsive: [
       {
         breakpoint: 1024, 
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           centerPadding: '0',
         },
       },
       {
         breakpoint: 600, 
         settings: {
           slidesToShow: 1, // Ajustar para um valor menor se necessário
           slidesToScroll: 1,
           centerPadding: '10px', // Adicionar algum espaço em torno do carrossel
         },
       },
       {
         breakpoint: 480, 
         settings: {
           slidesToShow: 1, // Ajustar para um valor menor se necessário
           slidesToScroll: 1,
           centerPadding: '10px', // Adicionar algum espaço em torno do carrossel
         },
       },
     ],
   };
  return (
    <main>
      <div className="home-container">
        <div className="lorem-text">
          <h1>Sobre o Jogo</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor nisl et justo tincidunt, eu ultricies nisi pharetra. Sed ultrices pretium erat, vel vestibulum nisi vulputate quis.</p>
          <p>Nulla facilisi. Donec suscipit ante ac ligula fermentum, id venenatis quam bibendum. Fusce non arcu vestibulum, tincidunt nisl vel, sagittis nisi. Nam a ante nec augue feugiat hendrerit.</p>
          <p>Proin dictum erat sit amet quam tempor, at vehicula risus volutpat. Vivamus semper, nunc et efficitur dignissim, libero quam lobortis est, in gravida ligula tortor vel sem.</p>
        </div>
        <Slider {...settings}>
          <div>
            <a href="https://static.wixstatic.com/media/013386_fe6820b4e7f740cab5b875c0d9511bc2~mv2.jpg/v1/fill/w_427,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/D34_0147.jpg" target="_blank" rel="noopener noreferrer">
              <img src="https://static.wixstatic.com/media/013386_fe6820b4e7f740cab5b875c0d9511bc2~mv2.jpg/v1/fill/w_427,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/D34_0147.jpg" alt="Imagem 1" />
            </a>
          </div>
          <div>
            <a href="https://static.wixstatic.com/media/013386_0c308be2f12e458b8112fdeea07e4a21~mv2.jpg/v1/fill/w_427,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/D34_0569.jpg" target="_blank" rel="noopener noreferrer">
              <img src="https://static.wixstatic.com/media/013386_0c308be2f12e458b8112fdeea07e4a21~mv2.jpg/v1/fill/w_427,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/D34_0569.jpg" alt="Imagem 2" />
            </a>
          </div>
        </Slider>
      </div>
      </main>
    
  );
}

export default Home;
