import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = { movies: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/movies")
      .then((response) => {
        this.setState({ movies: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteMovie(id) {
    axios
      .delete("http://localhost:5000/movies" + id)
      .then((res) => console.log(res.data));
    this.setState({
      movies: this.state.movies.filter((el) => el._id !== id),
    });
  }

  render() {
    return <div></div>;
  }
}
