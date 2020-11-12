import React from 'react';
import { Link } from 'react-router-dom';

class Sobremim extends React.Component {
  render() {
    return (
      <div data-testid="componente-sobremim">
        <h1>Sobre mim</h1>
        <div>
          <p>Sou de Fortaleza no Ceará, tenho dois irmãos e uma
          irmã e um sobrinho.
          Sou casada a 4 anos com o Clêrton, moramos em Belo Horizonte há quatro anos
          e temos três gatas, a Josefina, Margot e Cacau.</p>
          <h5>Habilidades</h5>
          <ul>
            <li>Adoro conversar com meu sobrinho</li>
            <li>Consigo captar os desejos das minhas gatas</li>
            <li>Adoro jogar vídeo-game</li>
          </ul>
        </div>
        <div>
          <Link to="/">Voltar para Home</Link>
        </div>
      </div>
    );
  }
}

export default Sobremim;
