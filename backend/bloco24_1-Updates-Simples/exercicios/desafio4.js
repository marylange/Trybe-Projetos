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

// Exercício 4: Aumente em 2 o imdbRating do filme Batman.

db.movies.updateOne(
  { "title": "Batman" },
  { $inc: { "imdbRating": 2 } }
);