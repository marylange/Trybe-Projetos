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

// Exercício 6: Multiplique por 4 o imdbRating do filme Batman.

db.movies.updateOne(
  { "title": "Batman" },
  { $mul: { "imdbRating": NumberInt(4) } }
);
