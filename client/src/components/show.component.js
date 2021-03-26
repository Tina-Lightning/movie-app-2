import React from "react";
import { Link } from "react-router-dom";

const Show = (props) => (
  <div className="card col-sm-2">
    <a href={props.show.link}>
      <img className="card-img-top" src={props.show.image} alt="show Poster" />
    </a>
    <div className="card-body">
      <p className="card-text">
        <span className="showTitle">{props.show.title}</span>
        {/* <span className="showYear">{props.show.year}</span> */}
      </p>
      <p className="card-text">
        {props.show.season === "Mini-Series"
          ? "Mini-Series"
          : "Season: " + props.show.season}
      </p>
      <p className="card-text">Year Released: {props.show.year}</p>
      <p className="card-text">IMDb Rating: {props.show.rating}</p>
      <p>
        <Link to={"/edit/" + props.show._id}>
          <button type="button" className="btn btn-outline-primary btn-sm">
            edit
          </button>
        </Link>
        <button
          type="button"
          onClick={() => {
            props.deleteshow(props.show._id);
          }}
          className="btn btn-outline-danger btn-sm"
        >
          delete
        </button>
      </p>
    </div>
  </div>
);

export default Show;
