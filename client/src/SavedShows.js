import React, { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

function SavedShows() {
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

  //   return (
  //     <div className="container">
  //       <div className="row">
  //         <ul>
  //           {savedShows.map((show) => (
  //             <li>{show.title}</li>
  //           ))}
  //         </ul>
  //       </div>
  //     </div>

  if (!savedShows) {
    return <div className="loading"></div>;
  } else {
    return (
      <div className="container">
        <div className="row">
          {savedShows.map((show) => (
            <div className="col-sm-4">
              <div className="card bg-dark text-white">
                <Link to={`/shows/${show.id}`} key={show.id}>
                  <article className="show">
                    <img
                      src={
                        show.poster === null
                          ? url
                          : `https://image.tmdb.org/t/p/w500/${show.poster}`
                      }
                      alt={show.title}
                    />
                    <div class="card-img-overlay show-info">
                      <h5 className="card-title">{show.title}</h5>
                      <p className="card-text">{show.date}</p>
                    </div>
                  </article>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SavedShows;
