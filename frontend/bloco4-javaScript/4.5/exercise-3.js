const corrigeTexto = (elemento, alteracao) => {
    for(let i = 0; i < document.getElementsByTagName(elemento).length; i += 1) {
        document.getElementsByTagName(elemento)[i].innerHTML = alteracao;
    }
 }
 corrigeTexto('h1', 'Exercício 4.5 - JavaScript')