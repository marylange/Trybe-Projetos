import React from 'react';
import { Link } from 'react-router-dom';

class Projetos extends React.Component {
	render() {
		return (
			<div data-testid="componente-projetos">
				<h1>Projetos</h1>
				<a href="https://github.com/marylange" target="_blank">Mary Leal - GitHub</a>
				<div>
					<Link to="/">Voltar para Home</Link>
				</div> 
			</div>
		);
	}
}

export default Projetos;
