import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LeaderboardTable.css';

const LeaderboardTable = () => {
  const teams = [
    { rank: 1, name: 'Marias', points: 30, goalsFor: 40, goalsAgainst: 10 },
    { rank: 2, name: 'Joanas', points: 28, goalsFor: 35, goalsAgainst: 15 },
    { rank: 3, name: 'Martas', points: 25, goalsFor: 32, goalsAgainst: 20 },
    { rank: 4, name: 'Martas', points: 45, goalsFor: 72, goalsAgainst: 20 },
    { rank: 5, name: 'Martas', points: 26, goalsFor: 82, goalsAgainst: 20 },
    { rank: 6, name: 'Martas', points: 24, goalsFor: 2, goalsAgainst: 20 },
    { rank: 7, name: 'Martas', points: 22, goalsFor: 92, goalsAgainst: 20 },
  ];

  return (
    <div className="leaderboard container mt-4">
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Posição</th>
              <th>Equipe</th>
              <th>Pontos</th>
              <th>Gols Pró</th>
              <th>Gols Contra</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team.rank}>
                <td>{team.rank}</td>
                <td>{team.name}</td>
                <td>{team.points}</td>
                <td>{team.goalsFor}</td>
                <td>{team.goalsAgainst}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardTable;
