import React, { useState, useEffect, setState } from "react";
import axios from "axios";

function CreateMovie() {
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [season, setSeason] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState(0);
  const [link, setLink] = useState("");
  const [users, setUsers] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/users/");

      if (response.data.length > 0) {
        setUsers(response.data.map((user) => user.username));
        setUsername(response.data[0].username);
      }
    }
    fetchData();
  }, []);

  console.log(users);
  console.log(username);

  //useEffect(() => console.log("mounted or updated"));

  //   useEffect(() => {
  //     const getAllUsers = () => {
  //       axios
  //         .get("http://localhost:5000/users/")
  //         .then((response) => {
  //           if (response.data.length > 0) {
  //             setUsers(response.data.map((user) => user.username));
  //             setUsername(response.data[0].username);
  //           }
  //         })
  //         .catch((error) => console.error(`Error: ${error}`));
  //     };
  //     getAllUsers();
  //     // console.log(users);
  //     // console.log(username);
  //   }, [users, username]);

  const onSubmit = (e) => {
    e.preventDefault();
    const movie = {
      username: username,
      title: title,
      year: year,
      season: season,
      image: image,
      rating: rating,
      link: link,
    };
    console.log(movie);

    axios
      .post("http://localhost:5000/movies/add/", movie)
      .then((res) => console.log(res.data));

    window.location = "/";
  };

  return (
    <div>
      <h3>Add New TV Show</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username:</label>
          {/* <select
            ref="userInput"
            required
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            // onChange={onChangeUsername}
          >
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select> */}
        </div>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            required
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Year Released:</label>
          <input
            type="text"
            required
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Season:</label>
          <input
            type="text"
            required
            className="form-control"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>IMDb Rating:</label>
          <input
            type="text"
            required
            className="form-control"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Link:</label>
          <input
            type="text"
            required
            className="form-control"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input
            type="text"
            required
            className="form-control"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Add TV Show"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateMovie;
