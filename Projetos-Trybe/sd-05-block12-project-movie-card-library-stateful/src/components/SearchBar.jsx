import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        <label htmlFor="include">Inclui o texto:</label>
        <input type="text" id="include" value={searchText} onChange={onSearchTextChange} />
        <input type="checkbox" id="f" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        <label htmlFor="f">Mostrar somente favoritos</label>
        <label htmlFor="filterGender">Filtrar por gênero</label>
        <select value={selectedGenre} id="filterGender" onChange={onSelectedGenreChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </form>
    );
  }
}

export default SearchBar;
