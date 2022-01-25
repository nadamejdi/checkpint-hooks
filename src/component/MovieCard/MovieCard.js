import React from 'react';
import Rate from "../Rate";
import './MovieCard.css'
const MovieCard = ({
  movie: { image, name, date, rating, type, description }
}) => {

  return (  <div className="card">


<div>
        <header>
          <span className="siteTitle"><span>
            </span></span></header>
        <main>
          <a href="https://google.com" className="card">
            <div className="inner">
              <h2 className="title">{name}</h2>
              <time className="subtitle">{date}<time>
              <div className="card_right__rating">
          <Rate rating={rating} />
        </div>
                </time></time></div>
          </a>
          
          <main>
            {/*<footer>
              <a className="footerLink" href="/impressum"></a>
              <a className="footerLink" href="/impressum">  </a>
            </footer>*/}
          </main></main></div>
  </div>
    );
};

export default MovieCard;
