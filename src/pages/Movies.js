// src/pages/Movies.js
import React from 'react';
import MovieList from '../components/MovieList';

const Movies = ({ movies }) => {
  return (
    <div>
      <h1>Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
