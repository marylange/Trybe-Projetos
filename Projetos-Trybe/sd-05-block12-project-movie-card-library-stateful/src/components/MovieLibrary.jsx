import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.changeSearchText = this.changeSearchText.bind(this);
    this.changeBookmarkedOnly = this.changeBookmarkedOnly.bind(this);
    this.changeSelectedGenre = this.changeSelectedGenre.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }

  changeSearchText(state) {
    this.setState({ searchText: state.target.value });
  }

  changeBookmarkedOnly() {
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly });
  }

  changeSelectedGenre(state) {
    this.setState({ selectedGenre: state.target.value });
  }

  changeMovies() {
    const { movies, bookmarkedOnly, selectedGenre, searchText } = this.state;
    console.log(movies)
    if (bookmarkedOnly === true) {
      return movies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre !== '') {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText !== '') {
      return movies.filter((movie) => movie.title.indexOf(searchText) >= 0 ||
        movie.subtitle.indexOf(searchText) >= 0 ||
        movie.storyline.indexOf(searchText) >= 0);
    }
    return movies;
  }

  newMovie(newMovie) {
    // const movies = this.state.movies;
    // this.setState({ movies: movies.push(newMovie) });
    this.setState({ movies: [...this.state.movies, newMovie] });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.changeSearchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.changeBookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.changeSelectedGenre}
        />
        <MovieList movies={this.changeMovies()} />
        <AddMovie onClick={this.newMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
