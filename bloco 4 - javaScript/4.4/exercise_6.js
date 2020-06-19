/*
Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

Exemplo: bishop -> diagonals
*/
const objXadrex = () => {
    return  {
    'bispo': 'Bispo: O bispo se move em uma linha reta diagonalmente no tabuleiro.',
    'torre': 'Torre: A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça.',
    'cavalo': 'Cavalo: É a única peça do tabuleiro que pode pular sobre outras peças.',
    'peão': 'Peão: Os peões se movem somente para frente, uma casa por vez.',
    'rei': 'Rei: O rei pode se mover para qualquer casa adjacente.',
    'rainha': 'Rainha: Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.',
    };
}

const posicaoNoXadrez = (peca) => {
    let pecaLowerCase = peca.toLowerCase();
    for(let nomePeca in objXadrex()) {
        if(pecaLowerCase == nomePeca) {
            return objXadrex()[nomePeca];
        } 
    }
    return 'Eita!! Essa peça não existe no meu xadrez.';
}
console.log(posicaoNoXadrez('rei'));