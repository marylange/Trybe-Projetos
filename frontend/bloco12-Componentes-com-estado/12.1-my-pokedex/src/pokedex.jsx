import React from 'react';
import Pokemon from './pokemon';
import Data from './data';

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'all',
        }


    }

    render() {
        return (
            <div className='pokemon-app'>
                {Data
                    .filter(({ elemento }) => this.state.filter === 'all' ? true : elemento.includes(this.state.filter))
                    .map((entry, index) => <Pokemon key={index} pokeBola={entry} />)}

                <div>
                    <button type="button">All</button>
                </div>
            </div>
        )
    }
}

export default Pokedex;
