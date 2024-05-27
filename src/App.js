// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import About from './pages/About';
import MovieDetail from './components/MovieDetail';
import AddMovie from './pages/AddMovie';

const App = () => {
  const [movies, setMovies] = useState([]);

  // Load movies from local storage when the component mounts
  useEffect(() => {
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);

  // Save movies to local storage whenever the movies state changes
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies movies={movies} />} />
        <Route path="/movies/:id" element={<MovieDetail movies={movies} />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-movie" element={<AddMovie addMovie={addMovie} />} />
      </Routes>
    </Router>
  );
};

export default App;
