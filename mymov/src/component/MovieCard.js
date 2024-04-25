import React from 'react';
import { Link } from 'react-router-dom';


const MovieCard = ({ movie }) => {
    return (
        <Link to={`/movies/${encodeURIComponent(movie.title)}`}>
            <div className="movie-card">
                <img src={movie.posterURL} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>Rating : {movie.rating}</p>
                <p>{movie.description}</p>
            </div>
        </Link>
    );
};

export default MovieCard;
