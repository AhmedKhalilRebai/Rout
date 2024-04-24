// App.js
import React, { useState } from 'react';
import MovieList from './component/MovieList';
import Filter from './component/Filter';
import Movies from './component/Data';

const App = () => {
    const [filter, setFilter] = useState('');
    const filteredMovies = Movies.filter(
        (movie) =>
            movie.title.toLowerCase().includes(filter.toLowerCase()) ||
            movie.rating.toString().includes(filter)
    );

    return (
        <div className="app">
          <div className='header'>
            <h1>My Movie App</h1>
            <Filter filter={filter} setFilter={setFilter} />
            </div>
            <MovieList movies={filteredMovies} />
        </div>
    );
};

export default App;
