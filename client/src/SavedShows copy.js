import React, { useState, useEffect } from "react";
import axios from "axios";

function SavedShows() {
  const [savedShows, setSavedShows] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/shows/");

      setSavedShows(result.savedShows);
    };

    fetchData();
  }, []);

  console.log(savedShows);

  return (
    <div>Hello</div>
    // <ul>
    //   {savedShows.hits.map((show) => (
    //     <li key={show.objectID}>
    //       <a href={show.url}>{show.title}</a>
    //     </li>
    //   ))}
    // </ul>
  );
}

export default SavedShows;
