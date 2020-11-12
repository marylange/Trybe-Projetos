import React from 'react';
import Contato from './pages/Contato';
import Inicio from './pages/Inicio';
import Projetos from './pages/Projetos';
import Sobremim from './pages/Sobremim';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/" data-testid="link-inicio">Início</Link>
        <Link to="/projetos" data-testid="link-projetos">Projetos</Link>
        <Link to="/sobremim" data-testid="link-sobremim">Sobre mim</Link>
        <Link to="/contato" data-testid="link-contato">Contatos</Link>
        <Switch>
          <Route exact path="/projetos" component={Projetos} />
          <Route path="/sobremim" component={Sobremim} />
          <Route path="/contato" component={Contato} />
          <Route path="/" component={Inicio} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
