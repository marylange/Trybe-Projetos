import React from 'react';
import { Link } from 'react-router-dom';

class Contatos extends React.Component {
  render() {
    return (
      <div data-testid="componente-contato">
        <h1 data-testid="texto">Contatos</h1>
        <a href="https://www.linkedin.com/in/maryssleal/" target="_blank">Linkedin</a>
        <div>
          <Link to="/">Voltar para Home</Link>
        </div>
      </div>
    );
  }
}

export default Contatos;
