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

// Exercício 5: Aumente em 5 o budget do filme Home Alone.

db.movies.updateOne(
  { "title": "Home Alone" },
  { $inc: { "budget": 5 } }
);