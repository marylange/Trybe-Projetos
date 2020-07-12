import React from 'react';
import Pokemon from './pokemon';

class Pokedex extends React.Component {
    render() {
        const { pokemons } = this.props;
        return (
            <div className='pokemon-app'>
                {pokemons.map((poke, index) => <Pokemon key={index} pokeBola={poke}/>)}
            </div>
        )
    }
}

export default Pokedex;