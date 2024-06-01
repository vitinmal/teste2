import React from 'react';
import './HomeStyle.css';
import Copa_futsal from '../componets/Copa_futsal.png';

const Home = () => {
  const descriptionText = `

    Este evento repleto de energia e talento é uma celebração do desporto e da integração dos atletas nas suas comunidades. A competição acontece todos os domingos às 9h00 e é uma oportunidade única para testemunhar a paixão e habilidade das equipes participantes.

    Nossos torneios são estritamente regulamentados, garantindo condições iguais para todos os participantes e promovendo um campo de jogo justo e respeitoso. Estas equipes são formadas por jogadores dedicados, com pelo menos 16 anos e que buscam não só a vitória, mas também a integração e a boa convivência entre todos os envolvidos.

    O evento é organizado pelo Comitê Organizador Central, composto por José Ronaldo Pereira e Rogério Borges, seguindo as normas da Federação Brasileira de Futebol de Salão (CBFS) e supervisionado por uma comissão disciplinar para garantir que todas as regras sejam seguidas.

    A premiação inclui troféus e medalhas para os times do campeonato, vice e terceiro colocados, além de troféus especiais para o artilheiro do torneio e o goleiro menos vazado. Cada jogo será uma festa de habilidade e trabalho em equipe, resultando em momentos inesquecíveis para jogadores e espectadores.

    Venha participar desta celebração do esporte, torça pelo seu time favorito e torça por cada gol. O primeiro Campeonato Multivix Feminino de Futsal é mais que uma partida; é uma celebração da paixão pelo futsal e do poder das mulheres no esporte. Acompanhe, apoie e faça parte desta emocionante jornada!
  `;

  const paragraphs = descriptionText.trim().split('\n\n').map((text, index) => (
    <p key={index}>{text}</p>
  ));

  return (
    <main>
      <div className="home-container">
      <div className="text-container">
          <h2>Bem-vindos ao primeiro Campeonato Multivix de Futsal Feminino!</h2>
          {paragraphs}
        </div>
        <div className="banner-container">
          <img src={Copa_futsal} alt="Banner do Campeonato de Futsal Feminino Multivix" className="banner-image"/>
        </div>
      </div>
    </main>
  );
}

export default Home;
