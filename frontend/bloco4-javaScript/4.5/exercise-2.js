/*
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe.
 */
const mudaCor = (elemento, alteracao) => {
    for(let i = 0; i < document.getElementsByClassName(elemento).length; i += 1) {
       document.getElementsByClassName(elemento)[i].style.backgroundColor = alteracao;
    }
}
mudaCor('main-content', 'rgb(15, 163, 107)');
/*
Crie uma função que mude a cor do quadrado vermelho para branco.
*/
mudaCor('center-content', 'white');