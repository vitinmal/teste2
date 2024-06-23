import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Campeonato.css';
import LeaderboardTable from '../componets/LeaderboardTable';
import { Carousel } from 'react-bootstrap';
import slide1 from '../componets/slide1.jpg';
import slide2 from '../componets/slide2.jpg';
import slide3 from '../componets/slide3.jpg';

const Campeonato = () => {
  return (
    <main className="main-container">
      <div className="containerCamp">
        <div className="row justify-content-center">
          <div className="col-12 mb-4 d-flex justify-content-center">
            <Carousel className="carousel-custom">
              <Carousel.Item>
                <img className="d-block w-100" src={slide1} alt="First slide" />
                <Carousel.Caption>
                  <h3>Primeiro Slide</h3>
                  <p>Descrição do primeiro slide.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={slide2} alt="Second slide" />
                <Carousel.Caption>
                  <h3>Segundo Slide</h3>
                  <p>Descrição do segundo slide.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={slide3} alt="Third slide" />
                <Carousel.Caption>
                  <h3>Terceiro Slide</h3>
                  <p>Descrição do terceiro slide.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="justify-content-center">
            <div className="">
              <LeaderboardTable />
            </div>
          </div>
        </div>
       
      </div>
    </main>
  );
};

export default Campeonato;
