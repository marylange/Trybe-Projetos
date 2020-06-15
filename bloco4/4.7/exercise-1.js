/*
1. Adicione uma tag de script na parte inferior da página para o seu código.

2. Adicione um ouvinte de evento ao botão para que ele chame uma makeMadLibfunção quando clicado.

3. Na makeMadLibfunção, recupere os valores atuais dos elementos de entrada do formulário, 
faça uma história a partir deles e produza isso na divisão da história (como "Pamela realmente gosta de pepinos cor de rosa").
*/
const executa = () => {
    const campo1 = document.getElementById('noun').value;
    const campo2 = document.getElementById('adjective').value;
    const campo3 = document.getElementById('person').value;
    
    const historia = document.getElementById('story');
    
    historia.innerHTML = `Meu nome é ${campo3}, o mais importante é ${campo1} e o mundo é ${campo2}`;
}
const button = document.getElementById('lib-button');
button.addEventListener('click', executa);