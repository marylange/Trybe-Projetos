const fs = require('fs');

fs.readFile('./arquivo.txt', (err, content) => {// callback
  if (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
    return;
  }

  console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`);
});

/*
callback recebe dois parâmetros: 
  - o primeiro, que chamamos de err , é um erro que pode
  ter ocorrido durante a leitura do arquivo; caso nenhum erro tenha ocorrido,
  esse parâmetro será undefined.
  - O segundo parâmetro é, nesse caso, o conteúdo do arquivo, em forma de
  uma sequência de bytes, que chamamos de content.
  Caso ocorra um erro na leitura do arquivo, esse parâmetro será undefined.
*/