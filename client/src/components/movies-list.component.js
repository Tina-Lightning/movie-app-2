import React, { useState, setState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Movie from "./movie.component";

function MoviesList(props) {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const result = await axios.get("http://localhost:5000/movies/");

    setMovies(result.data);
  });

  const deleteMovie = (id) => {
    axios
      .delete("http://localhost:5000/movies/" + id)
      .then((res) => console.log(res.data));
    setState({
      movies: movies.filter((el) => el._id !== id),
    });
  };

  const movieCard = () => {
    return movies.map((currentmovie) => {
      return (
        <Movie
          movie={currentmovie}
          deleteMovie={deleteMovie}
          key={currentmovie._id}
        />
      );
    });
  };

  return (
    <div>
      <h3>Shows Watched:</h3>
      <div className="row">{movieCard()}</div>
    </div>
  );
}

export default MoviesList;
