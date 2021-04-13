import React, { useState, useEffect } from "react";
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
  return (
    <section>
      <img
        src={
          poster === null ? url : `https://image.tmdb.org/t/p/w500/${poster}`
        }
        alt={title}
      />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{overview}</p>
        <h4>{date}</h4>
        <h4>{type}</h4>
        <Link to="/" className="btn btn-primary">
          back to shows
        </Link>
      </div>
    </section>
  );
};

export default SingleShow;
