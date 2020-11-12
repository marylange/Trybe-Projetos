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

// Exercício 3: Altere budget para 15 e imdbRating para 5.5 no filme Home Alone.

db.movies.updateOne(
  { "title": "Home Alone" },
  { $set: { "budget": 15, "imdbRating": 5.5 } }
);
