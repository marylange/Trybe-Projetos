/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
*/
/*
 Crie uma função que mude o texto na tag <p> para uma descrição de como você 
 se vê daqui a 2 anos. (Não gaste tempo pensando no 
 texto e sim realizando o exercício)
 */
const mudaTagP = (elemento, alteracao) => {
    for(let i = 0; i < document.querySelectorAll(elemento).length; i += 1) {
        document.querySelectorAll(elemento)[1].innerHTML = alteracao;
    }
}

mudaTagP('p', 'Rica!!');