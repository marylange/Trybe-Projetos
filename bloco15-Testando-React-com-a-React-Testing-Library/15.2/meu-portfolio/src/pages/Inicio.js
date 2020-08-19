import React from 'react';
import Foto from '../img/mary2.JPG';

class Inicio extends React.Component {
	render() {
		return (
			<div data-testid="componente-inicio">
				<h1>Início</h1>
				<div>
					<p>Marylange da Silva Souza leal</p>
					<img src={Foto} alt='minha foto' className="foto" />
				</div>
			</div>
		);
	}
}

export default Inicio;