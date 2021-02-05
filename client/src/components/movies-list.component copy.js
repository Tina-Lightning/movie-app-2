import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import Movie from "./movie.component";

export default class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = { movies: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/movies/")
      .then((response) => {
        this.setState({ movies: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteMovie(id) {
    axios
      .delete("http://localhost:5000/movies/" + id)
      .then((res) => console.log(res.data));
    this.setState({
      movies: this.state.movies.filter((el) => el._id !== id),
    });
  }

  movieCard() {
    return this.state.movies.map((currentmovie) => {
      return (
        <Movie
          movie={currentmovie}
          deleteMovie={this.deleteMovie}
          key={currentmovie._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Shows Watched:</h3>
        <div className="row">{this.movieCard()}</div>
      </div>
    );
  }
}
