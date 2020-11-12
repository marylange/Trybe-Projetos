/*
Filter Operators


*** Utilizar os operadores de comparação $lt, $lte, $gt, $gte, $eq, $ne, $in e $nin;

Operadores de Comparação

$lt: < 
sintaxe: db.inventory.find({ qty: { $lt: 20 } })

$lte: <=
sintaxe: db.inventory.find({ qty: { $lte: 20 } })

$gt: >
sintaxe: db.inventory.find({ qty: { $gt: 20 } })

$gte: =>
sintaxe: db.inventory.find({ qty: { $gte: 20 } })

$eq: ==
sintaxe: db.inventory.find({ qty: { $eq: 20 } }) ou somente db.inventory.find({ qty: 20 })

$ne: !==
sintaxe: db.inventory.find({ qty: { $ne: 20 } })

$in: retorna todos os documentos que contém os valores especificados
sintaxe: db.inventory.find({ qty: { $in: [ 5, 15 ] } })

$nin: Retorna os documentos em que são diferentes dos valores especificados no array
sintaxe: db.inventory.find( { qty: { $nin: [ 5, 15 ] } } )




*** Utilizar os operadores lógicos $not e $nor;

Operadores Lógicos

$not: retorna os valores que NÃO É MAIOR QUE o valor especificado.
sintaxe: db.inventory.find({ price: { $not: { $gt: 1.99 } } })

$or: executa a operação lógica de OU em um ARRAY
sintaxe: db.inventory.find({ $or: [{ qty: { $lt: 20 } }, { price: 10 }] })

Essa query acima seleciona todos os documentos da coleção inventory 
em que o valor do campo qty é menor do que 20 ou o valor do campo price é igual a 10.

$nor: executa uma operação lógica de NEGAÇÃO, com este operador, 
as expressões falham, seleciona documentos em que as expressões do array sejam falsas 
sintaxe: db.inventory.find({ $nor: [{ price: 1.99 }, { sale: true }] })

$and: executa a operação lógica de E em um ARRAY
A expressão só é verdadeira, se as duas forem verdadeiras, se uma for falsa as duas expressões ficam falsas(avaliação em curto-circuito)
sintaxe: db.inventory.find({
and: [
        { price: { $gt: 5 } },
        { price: { $lt: 20 } }
    ]
})

*** Utilizar o operador $exists;

$exist: quando true, é selecionado os documentos que contêm o campo especificado incluindo os campos null. 
Se for false, a query retorna somente os documentos que não contêm o campo.
sintaxe: db.inventory.find({ qty: { $exists: true } })

Podemos encadear operadores
db.inventory.find({ qty: { $exists: true, $nin: [ 5, 15 ] } })


*** Utilizar o método sort();

sort(): ordena os documentos por ordem crescente e descrecente. O valor 1 é crescente ou alfabética e o -1 é decrescente
sintaxe: db.example.find().sort({ "price": 1 ou -1 }).pretty()

*** Remover documentos com os métodos deleteOne() e deleteMany()

db.colecao.deleteOne(): Remove apenas um documento que satisfaça o critério de seleção,
se nenhum valor for especificado, a operação removerá o primeiro documento
sintaxe: db.inventory.deleteOne({ status: "D" })

db.colecao.deleteMany(): este método remove todos os documentos que satisfazem o critério de seleção.
sitaxe: db.inventory.deleteMany({ status : "A" })
Para remover todos, basta não passar parâmetro para o método.
sintaxe: db.inventory.deleteMany( {} )














*/