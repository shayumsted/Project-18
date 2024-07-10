// src/App.js
import React from 'react';
import Toolbar from './components/Toolbar';

const movies = ['Movie 1', 'Movie 2', 'Movie 3'];

function App() {
  return (
    <div className="App">
      <Toolbar movies={movies} />
    </div>);};

export default App;