import React from 'react';
import '../App.css';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div className="card">
        <div>
          <img src={imagePath} className="image" alt="card de filmes" />
        </div>
        <div className="container">
          <h4 className="title">{title}</h4>
          <h5 className="subtitle">{subtitle}</h5>
          <p className="description">{storyline}</p>
        </div>
        <div className="evaluation">
          <div className="rating"><Rating rating={rating} /></div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
