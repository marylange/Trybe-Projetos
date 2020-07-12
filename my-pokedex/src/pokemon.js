import React from 'react';
import './App.css';


class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokeBola;
        return (
            <div className='todo'>
                <div className='container'>
                    <p className='name-pokemon'>Nome: {name}</p>
                    <p className='type-pokemon'>Tipo: {type}</p>
                    <p className='value-pokemon'>Peso: {averageWeight.value}{averageWeight.measurementUnit}</p>
                    <div>
                        <img className='image-pokemon' src={image} alt='imagem pokemon' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Pokemon;