import React, { useState } from 'react';
import MovieList from './MovieList.js';
import movies from './Data.js';

const Filter = () => {
    const [filter, setFilter] = useState('');
    
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };
    
    const filteredMovies = movies.filter(
        (movie) =>
        movie.title.toLowerCase().includes(filter.toLowerCase()) ||
        movie.rating.toString().includes(filter)
    );

    return (
        <div className="filter">
            <input
                type="text"
                placeholder="Search by title or rating"
                value={filter}
                onChange={handleFilterChange}
            />
            <MovieList movies={filteredMovies}/>
        </div>
    );
};

export default Filter;
