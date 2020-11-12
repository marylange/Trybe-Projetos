/*
o NodeJS surgiu do V8, que é a ferramenta do Google Chrome responsável
por ler e executar as instruções que escrevemos em JavaScript,
processo comumente chamado de interpretar o código. Ao software
responsável por interpretar o código, dá-se o nome de interpretador,
engine e, por vezes, de runtime. Por isso, é comum dizer que o NodeJS é
um runtime JavaScript.


- Utilizar os comandos do npm para criar e gerenciar pacotes e dependências;




- Utilizar o comando node para executar scripts;
- Utilizar o sistema de módulos do NodeJS;

Pra começar, vamos entender o que é um módulo em NodeJS: um módulo é um "pedaço de código"
que pode ser organizado em um ou mais arquivos, e que possui escopo próprio,
ou seja: suas variáveis, funções, classes e afins só estão disponíveis nos arquivos
que fazem parte daquele módulo. Em outras palavras, um módulo é uma funcionalidade
ou um conjunto delas que se encontram isoladas do restante do código.

O NodeJS possui três tipos de módulos: internos, locais e de terceiros.

  Módulos internos: Os módulos internos (ou core modules) são inclusos no NodeJS
  e instalados junto com ele quando baixamos o runtime(interpretador).

  fs: Fornece uma API para interagir com o sistema de arquivos de forma geral;
  url: Provê utilitários para ler e manipular URLs;
  querystring: Disponibiliza ferramentas para leitura e manipulação de parâmetros de URLs;
  util: Oferece ferramentas e funcionalidades comumente úteis aos programadores.

  Módulos locais: são aqueles definidos juntamente à nossa aplicação.
  Representam funcionalidades ou partes do nosso programa que foram separados
  em arquivos diferentes. Módulos locais podem ser publicados no npm para que outras
  pessoas possam baixá-los e utilizá-los.

  Módulos de terceiros: são aqueles criados por outras pessoas e
  disponibilizados para uso através do npm

  Quando queremos utilizar um módulo/pacote para o contexto atual, podemos utilizar dois tipos no back-end:

    * Módulos ES6
      Os módulos são importados utilizando a palavra-chave import,
      tendo como contrapartida a palavra-chave export para exportá-los.

        Ex Importando um módulo

          import meuModulo from './meuModulo';
          meuModulo.fazerAlgo();

        Ex Exportando um módulo

          export function fazerAlgo () { ---> Export que possui um nome(named export)
            console.log('fazendo');
          }

          export default { fazerAlgo };

      O Named exports nos permitem importar apenas parte do módulo, e não ele como um todo

    * Módulos CommonJS
      O commonjs foi implementado pelo NodeJS nanativamente. Para importar um módulo,
      temos que usar a função require.

        Ex Módulos internos

          Para usar os módulos internos, devemos usar o nome do pacote como parâmetro para a função require.

          const fs = require('fs');
          fs.readFileSync('./meuArquivo.txt');


        Ex Módulos locais
          
          Quando queremos importar um módulo local, precisamos passar 
          para o require o caminho do módulo, seguindo a mesma assinatura. 
          Por exemplo, require('./meuModulo'). Note que a extensão (.js) não é necessária,
          uma vez que o Node já procura, por padrão, por arquivos terminados em .js ou .json e os
          considera como módulos.

          Além disso, podemos importar pastas. Para isso, temos que ter dentro desta pasta um arquivo index.js
          que faz o require do arquivos que tenho interesse:

            // meuModulo/index.js
            const funcionalidade1 = require('./funcionalidade-1');
            const funcionalidade2 = require('./funcionalidade-2');

            odule.exports = { funcionalidade1, funcionalidade2 };

          E assim eu consigo exportar os arquivos que tenho interesse:

            // meuModulo/funcionalidade-1.js

            module.exports = function () {
              console.log('funcionalidade1');
            }
            
            // meuModulo/funcionalidade-2.js

            module.exports = function () {
              console.log('funcionalidade2');
            }
        
        Ex Módulos de terceiros

          

- Criar scripts simples, com interação do usuário, com NodeJS.
*/