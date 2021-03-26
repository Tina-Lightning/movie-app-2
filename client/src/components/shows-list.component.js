import React, { useState, setState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Show from "./show.component";

function ShowsList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://localhost:5000/shows/");
      setShows(result.data);
    }
    fetchData();
  }, []);

  const deleteShow = (id) => {
    axios
      .delete("http://localhost:5000/shows/" + id)
      .then((res) => console.log(res.data));
    setState({
      shows: shows.filter((el) => el._id !== id),
    });
  };

  const showCard = () => {
    return shows.map((currentshow) => {
      return (
        <Show
          show={currentshow}
          deleteShow={deleteShow}
          key={currentshow._id}
        />
      );
    });
  };

  return (
    <div>
      <h3>Shows Watched:</h3>
      <div className="row">{showCard()}</div>
    </div>
  );
}

export default ShowsList;
