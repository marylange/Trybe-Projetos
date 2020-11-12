const fs = require('fs').promises;

const text = 'Texto teste 3';

function writingFiles() {
  fs.writeFile('./meu-arquivo.txt', text);
}

writingFiles();
/*
Basta modificar o importe(require) colocando .promises na frente
*/