import React from 'react';
import data from './data';
import Pokedex from './pokedex';

function App() {
  return (
    <div className='App'>
      <Pokedex pokemons={data}/>
    </div>
  )
}

export default App;