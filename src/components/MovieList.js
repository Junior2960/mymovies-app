// src/components/MovieList.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <Link to={`/movies/${movie.id}`}>Watch Now</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
