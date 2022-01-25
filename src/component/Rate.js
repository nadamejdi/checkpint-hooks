const Rate = ({ rating, setRatingSearch }) => {
    const stars = (x) => {
      let starsArray = [];
  
      for (let i = 1; i <= 5; i++) {
        if (i <= x) {
          starsArray.push(
            <span
              style={{ fontSize: "3rem" }}
              key={i}
              onClick={() => {
                setRatingSearch(i);
              }}
            >
              &#11089;
            </span>
          );
        } else {
          starsArray.push(<span style={{ fontSize: "3rem" }} key={i} onClick={() => {
            setRatingSearch(i);
          }} >&#11090;</span>);
        }
      }
      return starsArray;
    };
  
    return <div>{stars(rating)}</div>;
  };
  
  export default Rate;
  