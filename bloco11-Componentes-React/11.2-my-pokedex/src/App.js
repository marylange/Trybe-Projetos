import React from 'react';
import data from './data';
import Pokedex from './pokedex';
import Header from './Header';
import './App.css';

function App() {
  return (
    <div className='App'>
      {<Header />}
      {<Pokedex pokemons={data} />}
    </div>
  );
}

export default App;