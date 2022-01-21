import './App.css';
import MovieCard from "./component/MovieCard"
import MovieList from "./component/MovieList"
import Filter from "./component/Filter"
import React, { useState } from "react";
function App() {
  return (
    <div className="App">
  <MovieCard/>
  <Filter/>
 </div>
  );
}

export default App;
