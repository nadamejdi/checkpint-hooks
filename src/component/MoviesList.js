import MovieCard from "./MovieCard/MovieCard";

const MoviesList = (props) => {
  const { moviesList } = props;
  console.log(props);
  return (
    <div
      className="movies-list"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap"
      }}
    >
      {moviesList.map((el, i) => (
        <MovieCard movie={el} key={i} />
      ))}
    </div>
  );
};

export default MoviesList;
