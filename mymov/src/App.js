import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './component/MovieList';
import MovieDescription from './component/MovieDescription';
import Filter from './component/Filter';

const App = () => { 
  return (  
    <Router>
      <div className="app">
        <h1>My Movie List</h1>
        <Routes>
          <Route path="/" element={<Filter />} />
          <Route path="/movies" element={<MovieList/>} />
          <Route path="/movies/:title" element={<MovieDescription />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;