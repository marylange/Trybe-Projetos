db.movies.insertMany([
  {
    "title": "Batman",
    "category": ["action", "adventure"],
    "imdbRating": 7.6,
    "budget": 35
  },
  {
    "title": "Godzilla",
    "category": ["action", "adventure", "sci-fi"],
    "imdbRating": 6.6
  },
  {
    "title": "Home Alone",
    "category": ["family", "comedy"],
    "imdbRating": 7.4
  }
]);

// Exercício 8: Utilize o operador $min para alterar o budget para 5 do filme Home Alone.

db.movies.updateOne(
  { "title": "Home Alone" },
  { $min: { "budget": 5 } }
);