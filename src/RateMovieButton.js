// U78784426
// src/RateMovieButton.js
import React, { useState } from 'react';

const RateMovieButton = ({ movie }) => {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (rate) => {
    setRating(rate);
    setSubmitted(true);
  };

  return (
    <div>
      <h3>Rate {movie}</h3>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <button key={star} onClick={() => handleRating(star)}>
            {star} {star <= rating ? '★' : '☆'}
          </button>
        ))}
      </div>
      {submitted && <p>Thank you for rating!</p>}
    </div>);};

export default RateMovieButton