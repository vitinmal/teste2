import React from 'react';
import './Campeonato.css';
import LeaderboardTable from '../componets/LeaderboardTable';

const Campeonato = () => {
  return (
    <div className="container">
      <div className="leaderboard">
        <h2 className="titulo-tabela">Tabela de Classificação</h2>
        <div className="table-container">
          <LeaderboardTable />
        </div>
      </div>
      <div className="extra-container">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quas.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quas.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quas.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quas.</p>
      </div>
    </div>
  );
};

export default Campeonato;
