// U78784426
// src/Toolbar.js
import React, { useState } from 'react';
import MovieSelector from './MovieSelector';
import RateMovieButton from './RateMovieButton';
import './Toolbar.css';

const Toolbar = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  return (
    <div className="toolbar">
      <MovieSelector movies={movies} onMovieSelect={setSelectedMovie} />
      <RateMovieButton movie={selectedMovie} />
    </div>);};

export default Toolbar;