import React, { useState } from 'react';
import { FaRegFutbol, FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from 'react-icons/fa';
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
  { name: 'Equipe 10', pts: 0, v: 0, gp: 0, gs: 0, yellow: 0, red: 0 },
  { name: 'Equipe 11', pts: 0, v: 0, gp: 0, gs: 0, yellow: 0, red: 0 },
  { name: 'Equipe 12', pts: 0, v: 0, gp: 0, gs: 0, yellow: 0, red: 0 },
  { name: 'Equipe 13', pts: 0, v: 0, gp: 0, gs: 0, yellow: 0, red: 0 },
  { name: 'Equipe 14', pts: 0, v: 0, gp: 0, gs: 0, yellow: 0, red: 0 },
  { name: 'Equipe 15', pts: 0, v: 0, gp: 0, gs: 0, yellow: 0, red: 0 },
  { name: 'Equipe 16', pts: 0, v: 0, gp: 0, gs: 0, yellow: 0, red: 0 }
];

const LeaderboardTable = () => {
  const [teams, setTeams] = useState(initialTeams);
  const isEditor = true; // Defina isso com base na autenticação real do usuário

  const incrementStat = (index, stat) => {
    if (isEditor) {
      const updatedTeams = [...teams];
      updatedTeams[index][stat] += 1;
      setTeams(updatedTeams);
    }
  };

  const decrementStat = (index, stat) => {
    if (isEditor) {
      const updatedTeams = [...teams];
      if (updatedTeams[index][stat] > 0) {
        updatedTeams[index][stat] -= 1;
        setTeams(updatedTeams);
      }
    }
  };

  return (
    <div className="main-container">
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
            {teams.slice(0, 8).map((team, index) => (
              <tr key={index}>
                <td className="team-name">{team.name}</td>
                <td>
                  {team.pts}
                  {isEditor && (
                    <>
                      <button onClick={() => incrementStat(index, 'pts')}><FaRegArrowAltCircleUp /></button>
                      <button onClick={() => decrementStat(index, 'pts')}><FaRegArrowAltCircleDown /></button>
                    </>
                  )}
                </td>
                <td>
                  {team.v}
                  {isEditor && (
                    <>
                      <button onClick={() => incrementStat(index, 'v')}><FaRegArrowAltCircleUp /></button>
                      <button onClick={() => decrementStat(index, 'v')}><FaRegArrowAltCircleDown /></button>
                    </>
                  )}
                </td>
                <td>
                  {team.gp}
                  {isEditor && (
                    <>
                      <button onClick={() => incrementStat(index, 'gp')}><FaRegArrowAltCircleUp /></button>
                      <button onClick={() => decrementStat(index, 'gp')}><FaRegArrowAltCircleDown /></button>
                    </>
                  )}
                </td>
                <td>
                  {team.gs}
                  {isEditor && (
                    <>
                      <button onClick={() => incrementStat(index, 'gs')}><FaRegArrowAltCircleUp /></button>
                      <button onClick={() => decrementStat(index, 'gs')}><FaRegArrowAltCircleDown /></button>
                    </>
                  )}
                </td>
                <td>
                  {team.yellow}
                  {isEditor && (
                    <>
                      <button onClick={() => incrementStat(index, 'yellow')}><FaRegArrowAltCircleUp /></button>
                      <button onClick={() => decrementStat(index, 'yellow')}><FaRegArrowAltCircleDown /></button>
                    </>
                  )}
                </td>
                <td>
                  {team.red}
                  {isEditor && (
                    <>
                      <button onClick={() => incrementStat(index, 'red')}><FaRegArrowAltCircleUp /></button>
                      <button onClick={() => decrementStat(index, 'red')}><FaRegArrowAltCircleDown /></button>
                    </>
                  )}
                </td>
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
            {teams.slice(8, 16).map((team, index) => (
              <tr key={index}>
                <td className="team-name">{team.name}</td>
                <td>
                  {team.pts}
                  {isEditor && (
                    <>
                      <button onClick={() => incrementStat(index + 8, 'pts')}><FaRegArrowAltCircleUp /></button>
                      <button onClick={() => decrementStat(index + 8, 'pts')}><FaRegArrowAltCircleDown /></button>
                    </>
                  )}
                </td>
                <td>
                  {team.v}
                  {isEditor && (
                    <>
                      <button onClick={() => incrementStat(index + 8, 'v')}><FaRegArrowAltCircleUp /></button>
                      <button onClick={() => decrementStat(index + 8, 'v')}><FaRegArrowAltCircleDown /></button>
                    </>
                  )}
                </td>
                <td>
                  {team.gp}
                  {isEditor && (
                    <>
                      <button onClick={() => incrementStat(index + 8, 'gp')}><FaRegArrowAltCircleUp /></button>
                      <button onClick={() => decrementStat(index + 8, 'gp')}><FaRegArrowAltCircleDown /></button>
                    </>
                  )}
                </td>
                <td>
                  {team.gs}
                  {isEditor && (
                    <>
                      <button onClick={() => incrementStat(index + 8, 'gs')}><FaRegArrowAltCircleUp /></button>
                      <button onClick={() => decrementStat(index + 8, 'gs')}><FaRegArrowAltCircleDown /></button>
                    </>
                  )}
                </td>
                <td>
                  {team.yellow}
                  {isEditor && (
                    <>
                      <button onClick={() => incrementStat(index + 8, 'yellow')}><FaRegArrowAltCircleUp /></button>
                      <button onClick={() => decrementStat(index + 8, 'yellow')}><FaRegArrowAltCircleDown /></button>
                    </>
                  )}
                </td>
                <td>
                  {team.red}
                  {isEditor && (
                    <>
                      <button onClick={() => incrementStat(index + 8, 'red')}><FaRegArrowAltCircleUp /></button>
                      <button onClick={() => decrementStat(index + 8, 'red')}><FaRegArrowAltCircleDown /></button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardTable;
