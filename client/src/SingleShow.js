import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const SingleShow = () => {
  const { id } = useParams();
  const [show, setShow] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchShow = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data.success === "false") {
      setError({ show: true, msg: data.status_message });
      setIsLoading(false);
    } else {
      setShow(data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchShow(
      `https://api.themoviedb.org/3/tv/${id}tv?api_key=${process.env.REACT_APP_TVSHOW_API_KEY}`
    );
  }, [id]);

  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div>
        <h1>{error.msg}</h1>
        <Link to="/" className="btn btn-primary">
          back to shows
        </Link>
      </div>
    );
  }
  const {
    poster_path: poster,
    original_name: title,
    overview: overview,
    first_air_date: date,
    type: type,
    vote_average: vote_average,
  } = show;

  const handleSubmit = (e) => {
    e.preventDefault();

    const show = {
      poster: poster,
      title: title,
      overview: overview,
      date: date,
      type: type,
      vote_average: vote_average,
    };
    console.log(show);

    // this is going to send an HTTP post request to the back end endpoint, and the endpoint is expecting a JSON object (and that's exercise)
    axios
      .post("http://localhost:5000/shows/add", show)
      .then((res) => console.log(res.data));

    // take the person back to the homepage when the form is submitted
    //window.location = "/";
  };

  return (
    <div className="container d-flex justify-content-center mt-4">
      <div className="row">
        <section className="col-md-8 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <img
                className="center-block"
                src={
                  poster === null
                    ? url
                    : `https://image.tmdb.org/t/p/w500/${poster}`
                }
                alt={title}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                hidden
                value={`https://image.tmdb.org/t/p/w500/${poster}`}
              />
            </div>
            <div className="form-group">
              <span
                className="input"
                className="show-title"
                value={title}
                contenteditable
              >
                {title}
              </span>
            </div>
            <div className="form-group">
              <span
                className="input"
                className="show-overview"
                role="textbox"
                value={overview}
                contenteditable
              >
                {overview}
              </span>
            </div>
            <div className="form-group">
              <strong>User Score: </strong>
              <span className="input" value={vote_average} contenteditable>
                {vote_average}
              </span>
            </div>
            <div className="form-group">
              <strong>Premier Date: </strong>
              <span className="input" value={date} contenteditable>
                {moment(date).format("MMMM Do, YYYY")}
              </span>
            </div>
            <div className="form-group">
              <strong>Type of Show: </strong>
              <span className="input" value={type} contenteditable>
                {type}
              </span>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-5">
              Add TV Show to Watched List
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SingleShow;
