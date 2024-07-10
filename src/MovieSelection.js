// U78784426
// src/MovieSelection.js
import React from 'react';

const MovieSelection = ({ movies, onMovieSelect }) => {
  return (
    <select onChange={(e) => onMovieSelect(e.target.value)}>
      {movies.map((movie) => (
        <option key={movie} value={movie}>
          {movie}
        </option>
      ))}
    </select>);};

export default MovieSelection;