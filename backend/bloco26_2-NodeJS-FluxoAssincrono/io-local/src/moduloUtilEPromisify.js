const fs = require('fs');
const util = require('util'); //modulo util

const writeFile = util.promisify(fs.writeFile);

const text = 'Texto teste 4';

function writingFiles() {
  writeFile('./meu-arquivo.txt', text);
}

writingFiles();

/*
No módulo util, há também uma propriedade chamada promisify.
Ela transforma o parâmetro recebido em uma promise. Como vimos no exemplo acima.
*/