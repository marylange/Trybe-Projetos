const fs = require('fs');

const nomeDoArquivo = 'meu texto no writeFile';

fs.writeFile(nomeDoArquivo, (err) => {
  if (err) {
    throw err;
  }
  console.log('Arquivo salvo');
});
/*
o múdulo fs também tem o método writeFile

Ainda sobre o writeFile, você pode especificar 
algumas opções na escrita de arquivos passando um
terceiro parâmetro opcional para os métodos writeFile e writeFileSync.
A opção flag especifica como o arquivo deve ser aberto e manipulado.
O padrão é 'w' , que especifica que o arquivo deve ser aberto para escrita.
Se o arquivo não existir, ele é criado. Caso contrário, ele é reescrito, ou seja,
tem seu conteúdo apagado antes de o novo conteúdo ser escrito. A flag 'wx' , 
por exemplo, funciona como 'w' , mas lança um erro caso o arquivo já exista:
*/

const fs = require('fs');

fs.writeFile('./meu-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx' }, function (err) {
  // A flag wx abre o arquivo para escrita caso ele não exista
  /*
    Flag =>
      w: write
      x: exclusive
  */
  // Se o arquivo existir, um erro é retornado
  if (err) throw err;
  console.log('Arquivo salvo');
});
