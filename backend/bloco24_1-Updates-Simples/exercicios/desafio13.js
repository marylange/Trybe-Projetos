// Exercício 13: Para os filmes Batman ou Home Alone, atribua a 
// imdbRating o valor 17, caso o valor de imdbRating seja menor que 17.
db.movies.updateOne(
  { $or: [{ "title": "Batman"}, { "title": "Home Alone" }] },
  { $lt: { "imdbRating": 17 } },
  { $set: {"imdbRating": 17 } }
);


db.inventory.find({ $or: [{ qty: { $lt: 20 } }, { price: 10 }] })