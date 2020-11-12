/*
Desafio 15
Conte quantos produtos contêm Mc no nome, sem considerar letras
maiúsculas ou minúsculas.
*/
// db.produtos.find(
//   { $text: { $search: "\"Mc\"", $caseSensitive: false } }
// ).count();

db.produtos.find({ "nome": { $regex: /Mc/i } }).count();
