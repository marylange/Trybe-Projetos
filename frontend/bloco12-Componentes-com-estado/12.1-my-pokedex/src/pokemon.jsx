import React from 'react';
import './App.css';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokeBola;
    return (
      <div className='todo'>
        <div className='container'>
          <div>
            <p className='pokemon'>Pokemon: {name}</p>
            <p className='pokemon'>Tipo: {type}</p>
            <p className='pokemon'>Peso: {averageWeight.value}{averageWeight.measurementUnit}</p>
          </div>
          <div>
            <img className='image-pokemon' src={image} alt='imagem pokemon' />
          </div>
        </div>
      </div>
    );
  }
}

export default Pokemon;