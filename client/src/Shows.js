import React from "react";
import moment from "moment";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Shows = () => {
  const { shows, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <div className="container">
      <div className="row">
        {shows.map((show) => {
          const {
            id,
            poster_path: poster,
            name: title,
            first_air_date: date,
          } = show;

          return (
            <div className="show-container">
              <div className="content">
                <Link to={`/shows/${id}`} key={id}>
                  <div className="content-overlay"></div>
                  <img
                    src={
                      poster === null
                        ? url
                        : `https://image.tmdb.org/t/p/w500/${poster}`
                    }
                    alt={title}
                    className="content-image"
                  />

                  <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">{title}</h3>
                    <p className="content-text">
                      <strong>Premier Date:</strong>
                      <br />
                      {moment(date).format("MMMM Do, YYYY")}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shows;
