/*

MongoDB armazena documentos BSON dentro de coleções dentro de databases

BSON é um formato de serialização binária usada para armazenar documentos e fazer chamadas de procedimentos remoto no mongoDB.


* Databases: Podemos ter um ou vários banco de dados dentro no mongodb, 
a diferença dele para um banco relacional é que os bancos podem ser 
criados ao mesmo tempo que fazemos um insert das informações.

Ex: 
*/

use meuBanco -- criando o banco de dados
db.minhaColecao1.insertOne( { x: 1 }) -- criando a coleção (mesma coisa de tabelas)

/*

* Coleções: os documentos no mongodb são armazenados dentro das coleções, 
fazendo um paralelo com um banco de dados relacional, um coleção é como se fosse um tabela.

Como criar um coleção no MongoDB

Ex: 

db.minhaColecao2.insertOne({ x: 1 }) -- cria uma coleção caso ela ainda não exista
db.minhaColecao3.createIndex({ y: 1 }) -- outra forma de criar uma coleção caso ela não exista

Criação Explícita

Também podemos o método  db.createCollection() para criar uma coleção e especificar 
uma série de parâmetros, como o tamanho máximo do documento ou as regras de validação para os documentos. 
Caso não tenha necessidade especificar alguns dos parâmetros, o uso deste método não é necessário

Ex:

db.createCollection( "minhaColecao4", { collation: { locale: "fr" } } ); -- método de criação usando o db.createCollection()
*/

/*

* Documentos: são equivalentes aos registros ou linhas de uma tabela nos bancos de dados relacionais.
Cada atributos em MongoDB equivale a uma coluna de uma linha da tabela, a diferença é que em um 
documento pode conter mais informações do que conseguimos colocar em uma linha do banco de dados relacional.

Ex de documentos em MongoDB

{
    "_id": 1,
    "nome": "Jose",
    "endereco": {
        "logradouro": "Rua 1",
        "cidade": "São Paulo",
        "uf": "SP"
    }
},
{
    "_id": 2,
    "nome": "Maria",
    "endereco": {
        "logradouro": "Rua 2",
        "cidade": "Belo Horizonte",
        "uf": "MG"
    }
}



BSON Types

Iternamente, o MongoDB armazena os dados num formato BSON, esse formato 
é uma extensão do JSON e permite que tenha mais tipos de dados
e não somente o JSON (objeto com chave/valor)


                                                  Criar databases, coleções e documentos(métodos)
											
*** insertOne(): Os métodos insertOne têm suas particularidades e limitações, neste podemos fazer a insert de um único documento por vez

EX:

> use sample -- criando o banco smple
switched to db sample
> db -- verificando o banco que foi criado
sample
> db.procucts.insertOne({ productName: "Caixa", price: 20 }); -- inserindo um colection e o documento
{
	"acknowledged" : true, -- mensagem de confirmação da inserção
	"insertedId" : ObjectId("5f91bc765e0f673be8424bdf")
}
> db.procucts.insertOne({_id: 100, productName: "Caixa", price: 20 }); -- inserindo o dado contralando o valor de _id
{ "acknowledged" : true, "insertedId" : 100 }
> db
sample
>


*** insertMany(): Podemos inserir vários documentos de uma só vez no MongoDB.

EX:
INSERINDO VÁRIOS DOCUMENTOS AO MESMO TEMPO COM insertMany()

 db.procucts.insertMany([ 
	{ ProductsName: "Lápis", stock: 10, price: 20, status: "A"}, 
    {"productName": "Tesoura", "price": 5, "status": "B"}, 
    {"productName": "Borracha", "price": 15, "status": "A"}
]);

Resultado da inserção
{
	"acknowledged" : true,
	"insertedIds" : [
		ObjectId("5f91bf535e0f673be8424be0"),
		ObjectId("5f91bf535e0f673be8424be1"),
		ObjectId("5f91bf535e0f673be8424be2")
	]
}

*/
