// ...

readFilePromise('./file.txt')
  .then((content) => {
    console.log(`Lido arquivo com ${content.byteLength} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivo: ${err.message}`);
  });
// Promise com then e catch para tratamento de erro. Essa funcionalidade 
//permite criar uma estrutura de pipeline