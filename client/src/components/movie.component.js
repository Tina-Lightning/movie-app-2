import React from "react";
import { Link } from "react-router-dom";

const Movie = (props) => (
  <div className="card col-sm-2">
    <a href={props.movie.link}>
      <img
        className="card-img-top"
        src={props.movie.image}
        alt="Card image cap"
      />
    </a>
    <div className="card-body">
      <p className="card-text">
        <span className="movieTitle">{props.movie.title}</span>
        {/* <span className="movieYear">{props.movie.year}</span> */}
      </p>
      <p className="card-text">
        {props.movie.season === "Mini-Series"
          ? "Mini-Series"
          : "Season: " + props.movie.season}
      </p>
      <p className="card-text">Year Released: {props.movie.year}</p>
      <p className="card-text">IMDb Rating: {props.movie.rating}</p>
      <p>
        <Link to={"/edit/" + props.movie._id}>edit</Link> |{" "}
        <a
          href="#"
          onClick={() => {
            props.deleteMovie(props.movie._id);
          }}
        >
          delete
        </a>
      </p>
    </div>
  </div>
);

export default Movie;
