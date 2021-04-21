import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

const photo_url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const SavedShows = () => {
  const { isLoading } = useGlobalContext();
  const [savedShows, setSavedShows] = useState("");

  const url = "http://localhost:5000/";

  useEffect(() => {
    getSavedShows();
  }, []);

  const getSavedShows = () => {
    axios
      .get(`${url}shows`)
      .then((response) => {
        const allShows = response.data;
        setSavedShows(allShows);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  console.log(savedShows);

  if (isLoading) {
    return <div className="loading"></div>;
  }

  if (!savedShows) {
    return <div className="loading"></div>;
  } else {
    return (
      <div className="container">
        <div className="row">
          {savedShows.map((show) => (
            <div className="show-container">
              <div className="content">
                <Link to={`/shows/${show.id}`} key={show.id}>
                  <div className="content-overlay"></div>
                  <img
                    src={
                      show.poster === null
                        ? photo_url
                        : `https://image.tmdb.org/t/p/w500/${show.poster}`
                    }
                    alt={show.title}
                    className="content-image"
                  />

                  <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">{show.title}</h3>
                    <p className="content-text">
                      <strong>Premier Date:</strong>
                      <br />
                      {moment(show.date).format("MMMM Do, YYYY")}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default SavedShows;
