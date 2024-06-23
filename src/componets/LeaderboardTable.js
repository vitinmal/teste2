import React, { useState } from 'react';
import { FaRegFutbol } from 'react-icons/fa';
import './LeaderboardTable.css';

const initialTeams = [
  { name: 'Equipe 1', pts: 0, v: 0, gp: 0, gs: 0, yellow: 0, red: 0 },
  { name: 'Equipe 2', pts: 0, v: 0, gp: 0, gs: 0, yellow: 0, red: 0 },
  { name: 'Equipe 3', pts: 0, v: 0, gp: 0, gs: 0, yellow: 0, red: 0 },
  { name: 'Equipe 4', pts: 0, v: 0, gp: 0, gs: 0, yellow: 0, red: 0 },
  { name: 'Equipe 5', pts: 0, v: 0, gp: 0, gs: 0, yellow: 0, red: 0 },
  { name: 'Equipe 6', pts: 0, v: 0, gp: 0, gs: 0, yellow: 0, red: 0 },
  { name: 'Equipe 7', pts: 0, v: 0, gp: 0, gs: 0, yellow: 0, red: 0 },
  { name: 'Equipe 8', pts: 0, v: 0, gp: 0, gs: 0, yellow: 0, red: 0 },
  { name: 'Equipe 9', pts: 0, v: 0, gp: 0, gs: 0, yellow: 0, red: 0 },
  { name: 'Equipe 10', pts: 6, v: 0, gp: 0, gs: 0, yellow: 0, red: 0 },
  { name: 'Equipe 11', pts: 0, v: 0, gp: 0, gs: 0, yellow: 0, red: 0 },
  { name: 'Equipe 12', pts: 0, v: 0, gp: 0, gs: 0, yellow: 0, red: 0 },
  { name: 'Equipe 13', pts: 0, v: 0, gp: 0, gs: 0, yellow: 0, red: 0 },
  { name: 'Equipe 14', pts: 0, v: 0, gp: 0, gs: 0, yellow: 0, red: 0 },
  { name: 'Equipe 15', pts: 0, v: 0, gp: 0, gs: 0, yellow: 0, red: 0 },
  { name: 'Equipe 16', pts: 0, v: 0, gp: 0, gs: 0, yellow: 0, red: 0 }
];

const LeaderboardTable = () => {
  const [teams, setTeams] = useState(initialTeams);
  const isEditor = false; // Desativado para remover os botões

  const incrementStat = (index, stat) => {
    const updatedTeams = [...teams];
    updatedTeams[index][stat] += 1;
    setTeams(updatedTeams);
  };

  const decrementStat = (index, stat) => {
    const updatedTeams = [...teams];
    if (updatedTeams[index][stat] > 0) {
      updatedTeams[index][stat] -= 1;
      setTeams(updatedTeams);
    }
  };

  const sortTeams = (teams) => {
    return teams.sort((a, b) => {
      if (b.pts !== a.pts) {
        return b.pts - a.pts;
      } else {
        return b.gp - a.gp;
      }
    });
  };

  const groupA = sortTeams(teams.slice(0, 8));
  const groupB = sortTeams(teams.slice(8, 16));

  return (
    <div className="main-container-tabela">
      <div className="group">
        <h2>Grupo A</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Pts</th>
              <th>V</th>
              <th>GP</th>
              <th>GS</th>
              <th><FaRegFutbol color="yellow" /></th>
              <th><FaRegFutbol color="red" /></th>
            </tr>
          </thead>
          <tbody>
            {groupA.map((team, index) => (
              <tr key={index}>
                <td className="team-name">{team.name}</td>
                <td>{team.pts}</td>
                <td>{team.v}</td>
                <td>{team.gp}</td>
                <td>{team.gs}</td>
                <td>{team.yellow}</td>
                <td>{team.red}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="group">
        <h2>Grupo B</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Pts</th>
              <th>V</th>
              <th>GP</th>
              <th>GS</th>
              <th><FaRegFutbol color="yellow" /></th>
              <th><FaRegFutbol color="red" /></th>
            </tr>
          </thead>
          <tbody>
            {groupB.map((team, index) => (
              <tr key={index}>
                <td className="team-name">{team.name}</td>
                <td>{team.pts}</td>
                <td>{team.v}</td>
                <td>{team.gp}</td>
                <td>{team.gs}</td>
                <td>{team.yellow}</td>
                <td>{team.red}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardTable;
