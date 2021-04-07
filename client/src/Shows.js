import React from "react";
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
      <div class="row">
        {shows.map((show) => {
          console.log(show);
          const {
            id: id,
            poster_path: poster,
            name: title,
            first_air_date: date,
          } = show;
          return (
            <div class="col-sm-4">
              <div className="card bg-dark text-white">
                <Link to={`/shows/${id}`} key={id}>
                  <article className="show">
                    <img
                      src={
                        poster === null
                          ? url
                          : `https://image.tmdb.org/t/p/w500/${poster}`
                      }
                      alt={title}
                    />
                    <div class="card-img-overlay show-info">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">{date}</p>
                    </div>
                  </article>
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
