const fs = require('fs');

const text = 'Texto teste 2';

async function writingFiles() {
  await fs.writeFile('./meu-arquivo.txt', text, (err) => {
    if (err) return console.log(err);
    console.log(text);
  })
}

writingFiles();

/*
Note que bastou adicionar o async na declaração da
função principal, e o await na função writeFile .
*/