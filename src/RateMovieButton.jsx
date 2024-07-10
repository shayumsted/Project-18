// U78784426
// src/RateMovieButton.jsx
import React, { useState } from 'react';

const RateMovieButton = ({ movie }) => {
  const [rating, setRating] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleRatingSubmit = () => {
    if (rating) {
      setFeedback('Thanks for rating the movie!');
    } else {
      setFeedback('Please select a rating before submitting.');
    }};

  return (
    <div>
      <h3>Rate this movie:</h3>
      <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
      <button onClick={handleRatingSubmit}>Submit Rating</button>
      <p>{feedback}</p>
    </div>);};

export default RateMovieButton;