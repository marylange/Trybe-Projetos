import React from 'react';
import './App.css';
import Library from './data';
import Header from '../src/components/Header';
import MovieList from '../src/components/MovieList';

function App() {
  return (
    <div className="App">
      {<Header /> }
      {<MovieList movies={Library} /> }
    </div>
  );
}

export default App;
