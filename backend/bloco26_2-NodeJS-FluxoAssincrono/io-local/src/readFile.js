const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {// método assincrono
  if (err) {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1); //importante colocar para finalizar o processo
  }
  console.log(`Conteúdo do arquivo: ${data}`);
});


/*
Ele recebe três parâmetros:
  - O nome do arquivo;
  - Um parâmetro opcional que, quando é uma string, define o encoding que será
  utilizado durante a leitura do arquivo;
  - Uma callback que permite receber e manipular os dados lidos do arquivo.
*/