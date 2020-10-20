 /*
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 */
const letrasMaiusculas = (elemento, alteracao) => {
    for(let i = 0; i < document.getElementsByTagName(elemento).length; i += 1) {
        document.getElementsByTagName(elemento)[i].style.textTransform = alteracao;
    }
 }
 letrasMaiusculas('p', 'uppercase')