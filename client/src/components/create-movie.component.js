import React, { Component } from "react";

export default class CreateMovie extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.onChangeLink = this.onChangeLink.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      title: "",
      year: "",
      image: "",
      rating: "",
      link: "",
      users: [],
    };
  }

  componentDidMount() {
    this.setState({
      users: ["test user"],
      username: "test user",
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeYear(e) {
    this.setState({
      year: e.target.value,
    });
  }

  onChangeImage(e) {
    this.setState({
      image: e.target.value,
    });
  }

  onChangeRating(e) {
    this.setState({
      rating: e.target.value,
    });
  }

  onChangeLink(e) {
    this.setState({
      link: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const movie = {
      username: this.state.username,
      title: this.state.title,
      year: this.state.year,
      image: this.state.image,
      rating: this.state.rating,
      link: this.state.link,
    };
    console.log(movie);

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Add New Movie</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>Year:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.year}
              onChange={this.onChangeYear}
            />
          </div>
          <div className="form-group">
            <label>Image:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.image}
              onChange={this.onChangeImage}
            />
          </div>
          <div className="form-group">
            <label>Rating:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.rating}
              onChange={this.onChangeRating}
            />
          </div>
          <div className="form-group">
            <label>Link:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.link}
              onChange={this.onChangeLink}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Add Movie"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
