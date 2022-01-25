import { useState } from "react";
import "./SearchMovie.css";
import Rate from "../Rate";

const SearchMovie = ({ setNameSearch, ratingSearch, setRatingSearch }) => {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
    setNameSearch(event.target.value);
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          value={text}
          placeholder="Type movie name to search"
          onChange={handleChange}
        />
        <div className="rating-search">
          <Rate rating={ratingSearch} setRatingSearch={setRatingSearch} />
        </div>
        <div className="rating-search"></div>
      </div>
    </div>
  );
};

export default SearchMovie;
