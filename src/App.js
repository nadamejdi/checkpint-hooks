import SearchMovie from "./component/SearchMovie/SearchMovie";
import MoviesList from "./component/MoviesList";
import AddMovie from "./component/AddMovie/AddMovie";
import { moviesData } from "./component/MoviesData";
import { useEffect, useState } from "react";

function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(null);

  const filterByName = () => {
    setMoviesList(
      moviesData.filter((el) =>
        el.name.toLowerCase().includes(nameSearch.toLowerCase().trim())
      )
    );
  };

  const filterByRating = () => {
    ratingSearch &&
      setMoviesList(moviesData.filter((el) => el.rating === ratingSearch));
  };

  const addMovie = (element) => {
    moviesData.push(element);
    setMoviesList([...moviesList, element]);
  };

  useEffect(() => {
    filterByName();
  }, [nameSearch]);

  useEffect(() => {
    filterByRating();
  }, [ratingSearch]);

  return (
    <div className="App">
      <SearchMovie
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
      <MoviesList moviesList={moviesList} />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <AddMovie addMovie={addMovie} />
      </div>
    </div>
  );
}

export default App;
