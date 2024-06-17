import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componets/Header';
import FooterComponent from './componets/FooterComponent';
import Home from './paginas/Home';
import Campeonato from './paginas/Campeonato';
import Documento from './paginas/Documento';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campeonato" element={<Campeonato />} />
        <Route path="/documento" element={<Documento />}/>
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
      
      <FooterComponent />
    </Router>
  );
}

export default App;
