import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

const Movie = (props) => (
  <div className="card col-sm-3">
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
      <p className="card-text">Season: {props.movie.season}</p>
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
