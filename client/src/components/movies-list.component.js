import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Movie = (props) => (
  <tr>
    <td>{props.movie.username}</td>
    <td>{props.movie.title}</td>
    <td>{props.movie.year}</td>
    <td>{props.movie.image}</td>
    <td>{props.movie.rating}</td>
    <td>
      <Link to={"/edit/" + props.movie._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteMovie(props.movie._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
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

  movieList() {
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
        <h3>Watched Movies</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Title</th>
              <th>Year</th>
              <th>Image</th>
              <th>IMDB Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.movieList()}</tbody>
        </table>
      </div>
    );
  }
}
