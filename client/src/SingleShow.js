import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";
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
  } = show;

  const handleSubmit = (e) => {
    e.preventDefault();

    const show = {
      poster: poster,
      title: title,
      overview: overview,
      date: date,
      type: type,
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
    <div class="container-fluid single-show-box">
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
              <input className="show-title" value={title} />
            </div>
            <div className="form-group">
              <span
                class="input"
                className="show-overview"
                role="textbox"
                value={overview}
                contenteditable
              >
                {overview}
              </span>
            </div>
            <div className="form-group row">
              <label class="col-sm-3 col-form-label show-date">
                First Air Date:
              </label>
              <div class="col-sm-9">
                <input className="show-date" value={date} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label show-type">
                Type of Show:
              </label>
              <div className="col-sm-9">
                <input className="show-date" value={type} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Add TV Show
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SingleShow;
