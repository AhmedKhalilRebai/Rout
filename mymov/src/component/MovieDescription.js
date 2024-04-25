import React from 'react';
import { useParams } from 'react-router-dom';
import Movies from './Data';

const MovieDescription = () => {
  const { title } = useParams();
  const movie = Movies.find(movie => movie.title === title);

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div className="movie-description">
      <h2 className='titre'>{movie.title}</h2>
      <p>Description <br></br>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <a className='lien'  href="/">Back to Movies</a >
    </div>
  );
};

export default MovieDescription