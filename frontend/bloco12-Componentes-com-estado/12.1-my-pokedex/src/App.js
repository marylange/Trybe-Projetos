import React from 'react';
import data from './data';
import Pokedex from './pokedex';
import Header from './Header';
import './App.css';

class App extends React.Component {
  constructor
  setFilterValue = event => {
    console.log(event.target.value);
  }
  render() {
    return (
      <div className='App'>
        {data.map(({name, image}) => (
        <div key={name}>
          <p>{name}</p>
          <img src={image} alt="imagem"/>
        </div>
        ))}
        <button onClick={this.setFilterValue}>Botão</button>
      </div>
    );
  }
}

export default App;