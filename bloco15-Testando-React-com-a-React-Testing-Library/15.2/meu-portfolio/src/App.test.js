import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import Inicio from './pages/Inicio';
import App from './App';

jest.mock('react-router-dom', () => {
	const originalModule = jest.requireActual('react-router-dom');
	return {
		...originalModule,
		BrowserRouter: ({ children }) => (<div>{children}</div>),
	}
});

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
    history,
  };
};

describe('Testes do portfolio', () => {

	test('Verificando clicks do Link', () => {
    const { getByTestId } = renderWithRouter(<App />);
    
    const linkInicio = getByTestId('link-inicio');
    fireEvent.click(linkInicio);

    const textoInicio = getByTestId('componente-inicio');
    expect(textoInicio).toBeInTheDocument();


    const linkProjetos = getByTestId('link-projetos');
    fireEvent.click(linkProjetos);

    const textoProjeto = getByTestId('componente-projetos');
    expect(textoProjeto).toBeInTheDocument();

    const linkSobreMim = getByTestId('link-sobremim');
    fireEvent.click(linkSobreMim);

    const textoSobreMim = getByTestId('componente-sobremim');
    expect(textoSobreMim).toBeInTheDocument();

    const linkContato = getByTestId('link-contato');
    fireEvent.click(linkContato);

    const textoContato = getByTestId('componente-contato');
    expect(textoContato).toBeInTheDocument();
  });
  
  test('Verificando urls', () => {
    const { history, getByTestId, getByText } = renderWithRouter(<App />);

    const linkInicio = getByTestId('link-inicio');
    fireEvent.click(linkInicio);
    expect(history.location.pathname).toBe('/');
    const textDocument = getByText(/Contatos/);
    expect(textDocument).toBeInTheDocument();

    const linkProjetos = getByTestId('link-projetos');
    fireEvent.click(linkProjetos);
    expect(history.location.pathname).toBe('/projetos');

    const linkSobremim = getByTestId('link-sobremim');
    fireEvent.click(linkSobremim);
    expect(history.location.pathname).toBe('/sobremim');

    const linkContato = getByTestId('link-contato');
    fireEvent.click(linkContato);
    expect(history.location.pathname).toBe('/contato');
  })

  test('Verificar se o texto some da tela', async () => {
    const { history, getByTestId, queryByText } = renderWithRouter(<Inicio />);

    const linkInicio = getByTestId('componente-inicio');
    fireEvent.click(linkInicio);
    expect(history.location.pathname).toBe('/');
    const textDocument = await queryByText(/Contatos/);
    expect(textDocument).not.toBeInTheDocument();
  })
});