import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.setFilterValue = this.setFilterValue.bind(this);
    this.buttonChange = this.buttonChange.bind(this);
  }

  setFilterValue(event) {
    const { name, value } = event.target;
    this.setState({ [name]: name === 'rating' ? parseFloat(value) : value });
  }

  buttonChange(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const setFilterValue = this.setFilterValue;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="title">Título</label>
          <input type="text"name="title"value={title}onChange={setFilterValue} />
          <label htmlFor="subtitle">Subtítulo</label>
          <input type="text"name="subtitle"value={subtitle}onChange={setFilterValue} />
          <label htmlFor="image">Imagem</label>
          <input type="text"name="imagePath"value={imagePath}onChange={setFilterValue} />
          <label htmlFor="synopsis">Sinopse</label>
          <textarea name="storyline"value={storyline} onChange={setFilterValue} />
          <label htmlFor="number">Avaliação</label>
          <input type="number"name="rating"value={rating}onChange={setFilterValue} />
          <label htmlFor="gender">Gênero</label>
          <select name="gender"value={genre}onChange={setFilterValue}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
          <button onClick={this.buttonChange}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
